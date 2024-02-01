import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
// import { createCabin } from "../../services/apiCabins";
import {
  getTherapists,
  updateTherapist,
} from "../../services/apiTherapists";
import {
  addRatings,
  avgRatings,
} from "../../services/apiRatings";

function TherapistReviewForm({ id }) {
  // this hook will return few fns one is register and other one is handleSubmit,reset,getValues

  // getValues gets all values from entired form as an object
  // but using name of the field we can extract for each field

  // from formState object we can extract errors object using errors property
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState,
  } = useForm();

  const { errors } = formState;
  console.log(errors);
  // how to use react hook
  // step 1 :So always the first step is to register all the input fields
  // that we actually want React hook form, to handle.

  // step2:And then the second part is to specify

  // the on submit form in the from.

  // then we are going to call that handle submit function that we also received from use form by passing a new fn

  // that we want to be called whenever the form is submitted.

  // So when onSubmit,handleSubmit will call onSubmit function by passing the form related data as argument,
  // then using that we can push it to db

  //it will be passed on by handleSubmit fn into the on submit

  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } =
    useMutation({
      mutationFn: ({ id, averageRating }) =>
        updateTherapist(id, {
          Rating: averageRating,
        }),
      onSuccess: () => {
        toast.success(
          "Succesfully added ur review"
        );
        queryClient.invalidateQueries({
          queryKey: ["therapists"],
        });
        reset();
        console.log("success");
      },
      onError: (err) => {
        toast.error("Failed to fetch again");
      },
    });

  async function onSubmit(data) {
    try {
      // Make the API call to add ratings
      await addRatings({
        ...data,
        therapistId: id,
      });

      // Retrieve the updated average rating
      const { averageRating } = await avgRatings(
        id
      );

      // Update therapist rating using the mutation
      mutate({
        id,
        averageRating: averageRating.toFixed(1),
      });
    } catch (error) {
      // Handle any errors
      console.error(error);
      toast.error("Failed to fetch again");
    }
  }

  // if there is one Error in validations(validation fails)
  //handle submit will call not call onSubmit fn
  // but instead calls the seconds function by passing errors as an argument
  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow
        label="name"
        error={errors?.name?.message}
      >
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow
        label="rating"
        error={errors?.rating?.message}
      >
        <Input
          type="number"
          id="rating"
          defaultValue={0}
          {...register("rating", {
            required: "This field is required",
            max: {
              value: 5,
              message: "Value must be <=5",
            },
          })}
          disabled={isCreating}
        />
      </FormRow>

      {/* Leave the last FormRow unchanged */}
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>
          Add Review
        </Button>
      </FormRow>
    </Form>
  );
}

export default TherapistReviewForm;
