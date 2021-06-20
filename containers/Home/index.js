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

  const fileName = "objects.txt";

  useEffect(() => {
    setData(objects.objects);
  }, [data]);

  function generateObjects() {
    setShowSection(true);

    // prepare the data to get the object's value comma separated
    const values = objects.objects.map((obj) => Object.values(obj)).join(", ");

    //download the file
    const blob = new Blob([values]);
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
