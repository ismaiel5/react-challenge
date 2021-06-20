import { useState, useEffect } from "react";
import Styles from "../../styles/Home.module.scss";
import Card from "../../components/Card";
import ReportCard from "../../components/ReportCard";
import objects from "../../mockData/data";

const HomePage = () => {
  const [showSection, setShowSection] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [data, setData] = useState([]);
  const [fileDownloadURL, setFileDownloadURL] = useState("");

  const fileName = "objects.json";

  useEffect(() => {
    setData(objects.objects);
  }, [data]);

  function generateObjects() {
    setShowSection(true);

    // in case we want just the values of the objects
    // prepare the data as object's value separated
    // const values = objects.objects.map((obj) => Object.values(obj)).join(",")
    // console.log("test :", values);

    // prepare the data as string for the whole array of objects
    let output = JSON.stringify({ objects: data });
    console.log("output :", output);

    //download the file
    //  const blob = new Blob([values]);
    const blob = new Blob([output]);

    console.log("blob :", blob);
    const downloadURL = URL.createObjectURL(blob);
    setFileDownloadURL(downloadURL);
  }

  function generateReport() {
    setShowReport(true);
  }

  return (
    <>
      <main className={Styles.container}>
        <h1>Reactjs Challenge</h1>
        <Card
          generateObjectsFunc={generateObjects}
          generateReportFunc={generateReport}
          showSection={showSection}
          downloadLink={fileDownloadURL}
          fileName={fileName}
        />
        <br />
        {showReport && <ReportCard objects={data} />}
      </main>
    </>
  );
};

export default HomePage;
