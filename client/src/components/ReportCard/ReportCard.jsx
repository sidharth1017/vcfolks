import React from "react";
import styles from "./ReportCard.module.css";

const ReportCard = ({ report }) => {
  const authors = Array.isArray(report.author)
    ? report.author.join(", ")
    : report.author;
  return (
    <>
      <a
        href={report.reportlink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div className={styles.CardSection}>
          <img src={report.thumbnail} alt="Report-Thumbnail" />
          <div className={styles.cardContent}>
            <div className={styles.tags}>
              <span>{report.category}</span> <span>{report.subcategory}</span>{" "}
              <span className={styles.month}>{report.month}</span>{" "}
              <span className={styles.year}>{report.year}</span>
            </div>
            <h2>{report.title}</h2>
            <h4>By - {authors}</h4>
          </div>
        </div>
      </a>
    </>
  );
};

export default ReportCard;
