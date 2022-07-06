import { Link } from "react-router-dom";

import AuthForm from "../../components/forms/AuthForm";
import Title from "../../components/layout/Title";

const Signin = () => {
  return (
    <section className="text-center">
      <Title title="Sign In" />
      <div className="mx-5">
        <AuthForm type="signin" />
        <br />
        <p>
          Don't have an account?{" "}
          <Link
            to="/auth/signup/"
            className="text-purple-700 hover:text-purple-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signin;
