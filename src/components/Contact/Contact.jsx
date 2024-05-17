import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operation";
import toast from "react-hot-toast";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Contact({ id, name, number }) {
  const [modalState, setModalState] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Your contact has been successfully deleted!"))
      .catch((error) => error.message);
  return (
    <div className={css.wrapper}>
      <div>
        <h1>
          <RiUser3Fill className={css.icon} />
          {name}
        </h1>
        <p>
          <BiSolidPhone className={css.icon} />
          {number}
        </p>
      </div>
      <Modal
        call={modalState}
        onClose={() => setModalState(false)}
        onClick={handleDelete}
      />
      <button
        type="button"
        className={css.button}
        onClick={() => setModalState(true)}
      >
        Delete
      </button>
    </div>
  );
}
