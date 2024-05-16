import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectFilters } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const textFilter = useSelector(selectFilters);

  return (
    <>
      <p className={css.text}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={textFilter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
}
