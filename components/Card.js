import Styles from "../styles/Card.module.scss";
import Button from "./Button";

const Card = (props) => {
  return (
    <section className={Styles.card}>
      <Button title="Generate 4 Objects" />
      <br />
      <br />

      <div>
        Link :
        <a href="https://github.com/ismaiel5/react-challenge/commits/master">  Click to download objects</a>
      </div>

      <br />
      <Button title="Print Report" />
    </section>
  );
};

export default Card;
