// Self-defined Components
import Greeting from "./components/Greeting";
import Doors from "./components/Doors";
import Password from "./components/Password";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col flex-auto justify-between items-center"
    >
      <Greeting />
      <Doors />
      <Password />
    </div>
  );
};

export default Home;
