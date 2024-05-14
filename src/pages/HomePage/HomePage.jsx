import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div>
      {" "}
      <h1>Your contacts</h1>
      <div className={css.container}>
        <img
          src="https://i.pinimg.com/originals/a0/18/51/a018519b06c45f4399bafebb95b7ac4d.jpg"
          alt=""
        />

        <p className={css.text}>
          Welcome to the app Your Contacts.
          <br /> We usually save contacts on our phone, but sometimes it can
          break or get lost and we can lose contacts that are very important to
          us. Thats why this application is necessary. Here you can save your
          important contacts. Also you can delete or refresh contacts. Enjoy
        </p>
      </div>
    </div>
  );
}
