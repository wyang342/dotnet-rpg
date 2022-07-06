import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Home from "./pages/Home";
import CreateCharacter from "./pages/character/CreateCharacter";
import Characters from "./pages/character/Characters";
import AddWeapon from "./pages/AddWeapon";
import Battle from "./pages/Battle/Battle";
import AddSkillPage from "./pages/AddSkillPage";
import EditCharacterPage from "./pages/character/EditCharacterPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup/" element={<Signup />} />
        <Route path="/auth/signin/" element={<Signin />} />
        <Route path="/character/" element={<Characters />} />
        <Route path="/character/new/" element={<CreateCharacter />} />
        <Route path="/character/:id/add-skill/" element={<AddSkillPage />} />
        <Route path="/character/:id/new-weapon/" element={<AddWeapon />} />
        <Route path="/character/:id/edit/" element={<EditCharacterPage />} />
        <Route path="/battle/" element={<Battle />} />
      </Routes>
    </Layout>
  );
}

export default App;
