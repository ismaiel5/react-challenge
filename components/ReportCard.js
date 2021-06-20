import Styles from "../styles/Card.module.scss";

const ReportCard = (props) => {
  const objectList = Object.keys(props.data).map((obj, index) => {
    return (
      <li key={index}>
        {" "}
        {obj}: {props.data[obj]}
      </li>
    );
  });

  return (
    <section className={Styles.card}>
      <p>{objectList}</p>
    </section>
  );
};

export default ReportCard;
