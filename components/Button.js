import Styles from "../styles/Button.module.scss";

const Button = (props) => {
  return <button className={Styles.btn}>{props.title}</button>;
};

export default Button;
