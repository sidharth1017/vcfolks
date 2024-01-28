import React from "react";
import styles from "./ReportCard.module.css";

const ReportCard = ({ report }) => {
  return (
    <>
      <a href={report.reportlink} target="_blank" rel="noopener noreferrer" className={styles.link} >
        <div className={styles.CardSection}>
          <img src={report.thumbnail} alt="Report-Thumbnail" />
          <div className={styles.cardContent}>
            <span>{report.category}</span> <span>{report.subcategory}</span>
            <h2>{report.title}</h2>
            <h4>By - {report.author}</h4>
          </div>
        </div>
      </a>
    </>
  );
};

export default ReportCard;
