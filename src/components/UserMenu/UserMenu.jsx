import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function UserMenu() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button>Logout</button>
    </div>
  );
}
