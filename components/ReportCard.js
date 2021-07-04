import Styles from "../styles/Card.module.scss";

const ReportCard = (props) => {
  function populateData() {
    return Object.keys(props.data).map((obj, index) => {
      return (
        <li key={index}>
          {" "}
          {obj}: {props.data[obj]}
        </li>
      );
    });
  }

  return (
    <section className={Styles.card}>
      <h2>{props.title}</h2>
      <p>{populateData()}</p>
    </section>
  );
};

export default ReportCard;
