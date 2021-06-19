import Card from "../../components/Card";
import Styles from "../../styles/Home.module.scss";

const HomePage = () => {
  return (
    <>
      <main className={Styles.container}>
        <h1>Reactjs Challenge</h1>
        <Card />
      </main>
    </>
  );
};

export default HomePage;
