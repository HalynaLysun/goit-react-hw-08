import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.button}>Logout</button>
    </div>
  );
}
