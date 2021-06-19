import Styles from "../styles/Footer.module.scss"

const Footer = (props) => {
    return <div className={Styles.footer}>{props.content}</div>;
  };
  
  export default Footer;
  