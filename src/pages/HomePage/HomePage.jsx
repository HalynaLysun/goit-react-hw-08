import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Your contacts!</h1>
      <p className={css.text}>
        <br /> We usually save contacts on our phone, but sometimes it can break
        or get lost and we can lose contacts that are very important to us.
        Thats why this application is necessary. Here you can save your
        important contacts. Also you can delete or refresh contacts. Enjoy!
      </p>
    </div>
  );
}
