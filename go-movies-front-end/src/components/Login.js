import { useState } from "react";
import Input from "./form/input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertClassName } = useOutletContext();
  const { setAlertMessage } = useOutletContext();
  const navaigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);

    if (email === "admin@example.com"){
      setJwtToken("12345");
      setAlertClassName("d-none");
      setAlertMessage("");
      navaigate("/");
    } else {
      setAlertClassName("alert alert-danger");
      setAlertMessage("Invalid email or password");
    }
  }

  return(
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(e) => setPassword(e.target.value)}
        />

        <hr />

        <input
          type="submit"
          className="btn btn-primary"
          value="Login"
        />
      </form>
    </div>
  )
}

export default Login;
