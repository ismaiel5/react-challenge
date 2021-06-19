import Styles from '../styles/Card.module.scss';
import Button from "./Button"

const Card = (props) => {
  return <div className={Styles.card}>
      testing
      <Button title="Generate"/>
  </div>;
};

export default Card;
