import React, {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../config";
import styles from "./main-page.module.css";
import {NewsCard} from "../components/news-card/news-card";
import {ITypeNews} from "../types";

export const MainPage = () => {
    const [data, setData] = useState<Array<ITypeNews>>([])

    async function getData() {
        const {data} = await axios.get(BASE_URL)
        setData(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.mainPage_container}>
            {data.length
                ? data.map((item) => <NewsCard key={item.description} {...item}/>)
                : ''
            }
        </div>
    )
}