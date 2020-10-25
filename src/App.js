import React from "react";
import s from "./App.module.css";
import { Card } from "./Card";

function App() {
  return (
    <div className={s.App}>
      <h1 className={s.App__title}>Ты сегодня покормил кота?</h1>
      <div className={s.App__container}>
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
