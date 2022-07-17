import style from "./App.module.css";
import React from "react";
import {MainPage} from "../pages/main-page";
import {Header} from "../components/header/header";

function App() {

    return (
        <main className={style.App}>
            <Header/>
            <MainPage/>
        </main>
    );
}

export default App;
