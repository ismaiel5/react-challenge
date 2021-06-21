import Styles from "../styles/Card.module.scss";

const ReportCard = (props) => {
  function populateData() {
    if (props.source == "home") {
      return Object.keys(props.data).map((obj, index) => {
        return (
          <li key={index}>
            {" "}
            {obj}: {props.data[obj]}
          </li>
        );
      });
    } else if (props.data.users) {
      return props.data.users.map((obj, index) => {
        return <li key={index}> User name : {obj.first_name}</li>;
      });
    }
  }

  return (
    <section className={Styles.card}>
      <h2>{props.title}</h2>
      <p>{populateData()}</p>
    </section>
  );
};

export default ReportCard;
