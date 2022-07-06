import AuthForm from "../../components/forms/AuthForm";
import Title from "../../components/layout/Title";

const Signup = () => {
  return (
    <section className="text-center">
      <Title title="Sign Up" />
      <div className="mx-5">
        <AuthForm type="signup" />
      </div>
    </section>
  );
};

export default Signup;
