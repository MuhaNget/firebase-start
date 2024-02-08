import { useNavigate, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

function Home() {
  const navigate = useNavigate();

  const signOut = () => {
    navigate("/sign-in");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          GDSC App
        </Link>
      </span>
      {"" ? (
        <ul className="list">
          <li className="listItem">
            <img src="" alt="" className="avatar" />
          </li>
          <li className="listItem">Name</li>
          <li className="listItem" onClick={signOut}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="/sign-in">
          Login
        </Link>
      )}
    </div>
  );
}

export default Home;
