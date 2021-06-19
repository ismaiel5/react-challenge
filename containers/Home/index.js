import Styles from "../../styles/Home.module.scss";

import Card from "../../components/Card";
import ReportCard from "../../components/ReportCard";

const HomePage = () => {
  const showReport = false;

  return (
    <>
      <main className={Styles.container}>
        <h1>Reactjs Challenge</h1>
        <Card />
        <br />
        {showReport ? <ReportCard /> : ""}
      </main>
    </>
  );
};

export default HomePage;
