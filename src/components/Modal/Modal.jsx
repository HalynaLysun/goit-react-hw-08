import css from "./Modal.module.css";
export default function Modal({ call, onClose, onClick }) {
  if (!call) {
    return null;
  }

  return (
    <div className={css.modal}>
      <div className={css.content}>
        <h1 className={css.title}>Do you realy want delete this connact?!</h1>
        <button className={css.true} onClick={onClick}>
          Yes, delete it
        </button>
        <button className={css.rejected} onClick={onClose}>
          No, leave it
        </button>
      </div>
    </div>
  );
}
