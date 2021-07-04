import Styles from "../styles/Home.module.scss";
import Navigation from "../components/Navigation";

function Error({ statusCode }) {
  return (
    <div className={Styles.container}>
      <h2>error page</h2>
      <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>
      <br/>
      <p> Don't panic, lets try again</p>
      <Navigation pageTitle="/" linkTitle="Home Page" />
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
