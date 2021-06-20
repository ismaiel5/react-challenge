import Styles from "../styles/Card.module.scss";

const ReportCard = (props) => {
  const objectList = props.objects.map((obj, index) => {
    return (
      <li key={index}>
        {" "}
        {Object.keys(obj)} : {Object.values(obj)}{" "}
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
