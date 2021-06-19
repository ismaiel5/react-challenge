import { useState } from "react";

import Styles from "../styles/Card.module.scss";
import Button from "./Button";

const Card = (props) => {
  const [showSection, setShowSection] = useState(false);

  function generateObjects() {
    setShowSection(true);
  }

  return (
    <section className={Styles.card}>
      <Button title="Generate 4 Objects" clickHandler={generateObjects} />
      <br />
      <br />

      {showSection && (
        <div>
          Link :<a href="https://github.com/ismaiel5/react-challenge/commits/master"> Click to download objects</a>
          <br />
          <br />
          <Button title="Print Report" />
        </div>
      )}
    </section>
  );
};

export default Card;
