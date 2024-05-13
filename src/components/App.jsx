import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operation";
import { selectLoading, selectError } from "../redux/contacts/selectors";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const ContactForm = lazy(() => import("./ContactForm/ContactForm"));
const SearchBox = lazy(() => import("./SearchBox/SearchBox"));
const ContactList = lazy(() => import("./ContactList/ContactList"));
const Loader = lazy(() => import("./Loader/Loader"));
const Error = lazy(() => import("./Error/Error"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <Loader />}
        {isError && <Error />}
      </div>
      <Suspense fallback={<div>Please wait loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}
