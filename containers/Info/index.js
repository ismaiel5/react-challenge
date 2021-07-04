import { useState, useEffect } from "react";
import Styles from "../../styles/Home.module.scss";
import ReportCard from "../../components/ReportCard";
import Button from "../../components/Button";
import Navigation from  '../../components/Navigation';
import { countDuplicateObjectsBasedOnKeys } from "../../utils/utilities";
import { getRandomObjects } from "../../containers/Info/api";


const InfoPage = (props) => {
  const [objectsList, setObjectsList] = useState([]);
  const [countObject, setCountObject] = useState([]);

  useEffect(() => {
    setObjectsList(props.randomObjects);
  }, []);

  useEffect(() => {
    const count = countDuplicateObjectsBasedOnKeys(objectsList);
    setCountObject(count);
  }, [objectsList]);

  async function getDataFromApi() {
    const apiData = await getRandomObjects();
    setObjectsList(apiData.randomObjects);
  }

  return (
    <>
      <main className={Styles.container}>
        <h1>Reactjs Challenge</h1>
        <Navigation pageTitle="/" linkTitle="HomePage" />
        <br />
        <Button title="Get new objects from api" clickHandler={getDataFromApi} />
        <ReportCard data={countObject} source="home" title="List of random objects from Api" />
      </main>
    </>
  );
};

export default InfoPage;
