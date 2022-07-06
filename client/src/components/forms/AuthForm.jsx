import { useRef } from "react";
import { auth } from "../../agent";
import GenericButton from "../layout/GenericButton";

const AuthForm = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    props.type === "signup"
      ? auth.signup(username, password)
      : auth.signin(username, password);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          ref={usernameRef}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-2">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mt-3">
        <GenericButton text={props.type === "signin" ? "Sign In" : "Sign Up"} />
      </div>
    </form>
  );
};

export default AuthForm;
