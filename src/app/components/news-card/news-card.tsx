import React from "react";
import {ITypeNews} from "../../types";
import styles from "./news-card.module.css";

export const NewsCard: React.FC<ITypeNews> = ({
                                                  title,
                                                  description,
                                                  category,
                                                  pubDate,
                                                  source_id,
                                                  link,
                                                  image_url
                                              }): JSX.Element => {
    return (
        <div className={styles.newsCard_container}>
            <span className={styles.date}>{pubDate}</span>
            <span className={styles.category}>{category[0]}</span>
            <span className={styles.source_id}>{source_id}</span>
            <a href={link} className={styles.title}>{title}</a>
            {image_url && <img src={image_url} alt={"pic"} className={styles.image}/>}
            <p className={styles.description}>{description}</p>
        </div>
    )
}