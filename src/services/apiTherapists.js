import supabase from "./supabase";

export async function getTherapists() {
  let { data, error } = await supabase
    .from("Therapists")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error(
      "Therapists could not be loaded"
    );
  }
  console.log(data);
  return data;
}

export async function deleteTherapists(id) {
  const { data, error } = await supabase
    .from("therapists")
    .delete()
    .eq("id", id);
  if (error) {
    console.error(error);
    throw new Error(
      "Therapists could not be deleted"
    );
  }
  return data;
}
export async function updateTherapist(id, obj) {
  console.log(id, obj);
  const { data, error } = await supabase
    .from("Therapists")
    .update(obj)
    .eq("id", id)
    .select();

  if (error) {
    console.error(
      "Supabase error:",
      error.message
    );
  }
  console.log(data);
}
