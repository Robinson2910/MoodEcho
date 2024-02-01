import TherapistTable from "../features/therapists/TherapistTable";
import TherapistTableOperation from "../features/therapists/TherapistTableOperation";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Therapists() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Therapists</Heading>
        <TherapistTableOperation />
      </Row>
      <Row>
        <TherapistTable />
      </Row>
    </>
  );
}

export default Therapists;
