import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function LoginPage() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return <LoginForm />;
}
