import { useState, useEffect } from "react";
import Styles from "../../styles/Home.module.scss";
import Card from "../../components/Card";
import ReportCard from "../../components/ReportCard";
import { countDuplicateObjectsBasedOnKeys, runGeneratingFuncRandomly } from "../../utils/utilities";
import Link from "next/Link";

const HomePage = () => {
  const [showSection, setShowSection] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [fileDownloadURL, setFileDownloadURL] = useState("");
  const [objectsData, setObjectsData] = useState([]);
  const [countObject, setCountObject] = useState([]);
  const [btnMessage, setbtnMessage] = useState("Generate Objects");
  const fileName = "objects.txt";

  useEffect(() => {
    prepareDownloadLink();
  }, [objectsData]);

  function generateObjects() {
    setShowSection(true);
    setbtnMessage("Generate New Objects");
    setObjectsData(runGeneratingFuncRandomly(50));

    if (showReport) {
      setShowReport(false);
    }
  }

  function prepareDownloadLink() {
    // prepare the data to get the object's value comma separated
    const values = objectsData.map((obj) => Object.values(obj)).join(", ");

    //download the file
    const blob = new Blob([values]);
    const downloadURL = URL.createObjectURL(blob);
    setFileDownloadURL(downloadURL);
  }

  function generateReport() {
    setShowReport(true);

    let count = countDuplicateObjectsBasedOnKeys(objectsData);
    setCountObject(count);
  }

  return (
    <main className={Styles.container}>
      <h1>Reactjs Challenge</h1>
      <Link href="/info">
        <a>Info page</a>
      </Link>
      <Card
        btnMessage={btnMessage}
        generateObjectsFunc={generateObjects}
        generateReportFunc={generateReport}
        showSection={showSection}
        downloadLink={fileDownloadURL}
        fileName={fileName}
      />
      <br />
      {showReport && <ReportCard data={countObject} source="home" title="Report facts" />}
    </main>
  );
};

export default HomePage;
