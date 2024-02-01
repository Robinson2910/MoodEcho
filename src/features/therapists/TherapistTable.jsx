import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
// import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import TherapistRow from "./TherapistRow";
import { getTherapists } from "../../services/apiTherapists";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function TherapistTable() {
  const [searchParams] = useSearchParams();
  // object with two proeprties
  //queryKey:uniquely identify data that we are going to query here
  //late if we useQuery again with this exact key then data would be read from the cache
  // fn which is responsible for querying or fetching data fromapi
  //fn needs to return promise
  //promise when resolved returns the data
  //that data is the one which will be stored in the cache
  // cabins state(query state) is similar to all other state we create
  //when it changes rerenders and refetches will happen
  const {
    isLoading,
    data: therapists,
    error,
  } = useQuery({
    queryKey: ["therapists"],
    queryFn: getTherapists,
  });
  // returned data from query fn will be stored in cache with key as cabins
  //next time data can be retrieved directly from cache
  //make sure query fn is a async fn which returns a promise

  // think of it as

  // 1) we are creating a query state using the hook(useQuery)
  // 2) and it will be cached with the key name we give
  // if data is fetched without error,or it will return an error
  //isLoading is for notifying that it is trying to fetch data

  if (isLoading) return <Spinner />;

  //Filter

  const filterValue =
    searchParams.get("experience") || "all";

  let filteredTherapists;
  if (filterValue === "all") {
    filteredTherapists = therapists;
  } else if (
    filterValue === "experience-senior"
  ) {
    filteredTherapists = therapists.filter(
      (therapists) => therapists.experience > 2
    );
  } else if (
    filterValue === "experience-junior"
  ) {
    filteredTherapists = therapists.filter(
      (therapists) => therapists.experience <= 2
    );
  }

  //sort

  const sortBy =
    searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");
  let sortedTherapists;
  const modifier = direction === "asc" ? 1 : -1;
  if (field === "name") {
    sortedTherapists = filteredTherapists.sort(
      (a, b) =>
        a[field].localeCompare(b[field]) *
        modifier
    );
  }
  sortedTherapists = filteredTherapists.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      {" "}
      <Table
        role="table"
        columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"
      >
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Experience</div>
          <div>Price</div>
          <div>Rating</div>
          <div></div>
        </Table.Header>

        {sortedTherapists?.map((therapist) => (
          <TherapistRow
            therapist={therapist}
            key={therapist.id}
          />
        ))}
      </Table>
    </Menus>
  );
}

export default TherapistTable;
