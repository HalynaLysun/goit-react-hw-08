import { selectUser } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operation";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.button} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
