import Styles from"../styles/Header.module.scss";

const Header = (props) => {
  return <div className={Styles.header}>{props.content}</div>;
};

export default Header;
