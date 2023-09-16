import React from "react";
import Button from "../Button/Button";
import tickets from "../../assets/Two-tickets.svg";
import list from "../../assets/List.svg";
import testposter3 from "../../assets/testposter3.png";
import listWhite from "../../assets/list-white.svg";
import styles from "./Ad.module.css";

function Ad() {
  return (
    <div className={styles.ad}>
      <Button
        text="See Showtimes"
        className={`${styles.btnTickets} ${styles.btn}`}
      >
        <img src={tickets} alt="ticket" />
      </Button>
      <Button
        text="More watch options"
        className={`${styles.btnWatch} ${styles.btn}`}
      >
        <img src={list} alt="list" />
      </Button>
      <div className={styles.recommendMovie}>
        <img src={testposter3} alt="test" />
        <div className={styles.recommendMovieText}>
          <img src={listWhite} alt="list" />{" "}
          <span>The Best Movies and Shows in September</span>
        </div>
      </div>{" "}
    </div>
  );
}

export default Ad;
