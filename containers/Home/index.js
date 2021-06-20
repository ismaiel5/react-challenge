import { useState, useEffect } from "react";
import Styles from "../../styles/Home.module.scss";
import Card from "../../components/Card";
import ReportCard from "../../components/ReportCard";
import mockData from "../../mockData/data";
import {getdataTypes} from '../../utils/utilities';

const HomePage = () => {
  const [showSection, setShowSection] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [data, setData] = useState([]);
  const [fileDownloadURL, setFileDownloadURL] = useState("");
  const [dataTypes, setDataTypes]= useState("")

  const fileName = "objects.txt";

  useEffect(() => {
    setData(mockData.mixedArray);
  }, [data]);

  function generateObjects() {
    setShowSection(true);

    // prepare the data to get the object's value comma separated
    const values = mockData.mixedArray.map((item) => item).join(", "); 

    //download the file
    const blob = new Blob([values]);
    const downloadURL = URL.createObjectURL(blob);
    setFileDownloadURL(downloadURL);
  }

  function generateReport() {
    setShowReport(true);

    // get the data types of the array elements
    let dataTypes = getdataTypes(data);
    setDataTypes(dataTypes);
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
        {showReport && <ReportCard data={dataTypes} />}
      </main>
    </>
  );
};

export default HomePage;
