import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <div>
        <h1>
          <RiUser3Fill />
          {name}
        </h1>
        <p>
          <BiSolidPhone />
          {number}
        </p>
      </div>

      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
