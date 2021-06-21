import { useState, useEffect } from "react";
import Styles from "../../styles/Home.module.scss";
import ReportCard from "../../components/ReportCard";
import Link from "next/Link";

const InfoPage = (props) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setUsersList(props.usersData);
  }, [usersList]);

  return (
    <>
      <main className={Styles.container}>
        <h1>Reactjs Challenge</h1>
        <Link href="/">
          <a>Home page</a>
        </Link>
        <br />
        <ReportCard data={usersList} source="info" title="List of users" />
      </main>
    </>
  );
};

export default InfoPage;
