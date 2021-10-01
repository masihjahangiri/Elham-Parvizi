import { useEffect } from "react";

import styles from "../styles/Portfolio.module.scss";
import Header from "../layouts/header/Header";
import Main from "../layouts/main/Main";
import Button from "../components/button/Button";

function Portfolio() {
  useEffect(() => {
    document.getElementById("__next").classList.remove("height-auto");
    document.getElementById("__next").classList.add("height-percentage");
  });

  return (
    <Main>
      <div className={styles.titleContainer}>
        <Header />
        <div className={styles.title}>
          <span className={styles.textBold}>My Portfolio</span>
          <p className={styles.text}>
            Elham is Designer And Psychologist, She Try To Move Forward With
            Strength
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <picture className={styles.contentImage}>
          <source media="(min-width:1024px)" srcset={require("../public/frame-50-desktop.svg")} />
          <source media="(min-width:320px)" srcset={require("../public/frame-50.svg")} />
          <img
            className={styles.contentImage}
            src={require("../public/frame-50.svg")}
          />
        </picture>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          href="https://dribbble.com/elhamparvizi/"
          title="Go to Dribble"
        />
      </div>
    </Main>
  );
}

export default Portfolio;
