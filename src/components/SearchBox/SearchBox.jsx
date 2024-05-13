import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const textFilter = useSelector(selectFilters);

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={textFilter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
}
