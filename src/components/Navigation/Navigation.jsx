import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
}
