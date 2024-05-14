import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </nav>
      <hr className={css.line} />
    </div>
  );
}
