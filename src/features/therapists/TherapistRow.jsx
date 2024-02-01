import Modal from "../../ui/Modal";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";
import {
  HiChartSquareBar,
  HiPencil,
  HiTrash,
} from "react-icons/hi";
import TherapistReviewForm from "./TherapistReviewForm";

const Img = styled.img`
  display: block;
  width: 6.4rem;

  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Rating = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function TherapistRow({ therapist }) {
  const {
    id: therapistId,
    name,
    Rating: rating,
    regularPrice,
    experience,
    image,
  } = therapist;
  return (
    <>
      <Table.Row role="row">
        <Img src={image} />
        <Name>{name}</Name>
        <div>Worked for {experience} years</div>
        <Price>
          {formatCurrency(regularPrice)}
        </Price>
        {rating ? (
          <Rating>{rating} ⭐</Rating>
        ) : (
          "-"
        )}
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={therapistId} />
              <Menus.List id={therapistId}>
                <Modal.Open opens={therapistId}>
                  <Menus.Button
                    icon={<HiPencil />}
                  >
                    Add Rating
                  </Menus.Button>
                </Modal.Open>
                {/* <Modal.Open opens="delete">
                  <Menus.Button
                    icon={<HiTrash />}
                  >
                    Delete
                  </Menus.Button>
                </Modal.Open> */}
              </Menus.List>

              <Modal.Window name={therapistId}>
                <TherapistReviewForm />
              </Modal.Window>

              {/* <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="cabins"
                  disabled={isDeleting}
                  onConfirm={() =>
                    deleteCabin(cabinId)
                  }
                />
              </Modal.Window> */}
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default TherapistRow;
