import Styles from "../styles/Card.module.scss";
import Button from "./Button";

const Card = (props) => {
  return (
    <section className={Styles.card}>
      <Button title="Generate 4 Objects" clickHandler={props.generateObjectsFunc} />
      <br />
      <br />

      {props.showSection && (
        <div>
          Link :<a href={props.downloadLink} download={props.fileName}> Click to download objects</a>
          <br />
          <br />
          <Button title="Print Report" clickHandler={props.generateReportFunc} />
        </div>
      )}
    </section>
  );
};

export default Card;
