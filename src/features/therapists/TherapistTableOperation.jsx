import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function TherapistTableOperation() {
  return (
    <TableOperations>
      {/* this filter component will place the buttons based on options we pass,
      and query parameters will be passed with field name,and the value of button that is clicked,  and then that query parameter can be read from cabin table and based on that we can filter it */}
      <Filter
        filterField="experience"
        options={[
          { value: "all", label: "All" },
          {
            value: "experience-junior",
            label: "Junior",
          },
          {
            value: "experience-senior",
            label: "Consultant",
          },
        ]}
      />
      {/* this sort by component will provide a dropdown menu with options we provide
      and onClicking that option query parameter will be set, and that query paramter  will be read from CabinTAble and from there we can sort it accordingly */}
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort by name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort by price(low first)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by price(high first)",
          },
          {
            value: "Rating-asc",
            label: "Sort by Rating (low first)",
          },
          {
            value: "Rating-desc",
            label: "Sort by Rating (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default TherapistTableOperation;
