import Title from "../components/layout/Title";
import { getUser } from "../utils/authUtils";
import Footer from "../components/layout/Footer";

const Home = () => {
  let user = getUser();

  return (
    <div>
      <Title title=".Net RPG" />
      <section className="mx-5">
        {user ? (
          <p>
            Logged in as <b>{user}</b>
          </p>
        ) : (
          "Not logged in"
        )}
        <br />
      </section>
    </div>
  );
};

export default Home;
