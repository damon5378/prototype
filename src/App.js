import React, { useState } from "react";
import s from "./App.module.css";
import { CardFish } from "./CardFish";
import { CardFuagra } from "./CardFuagra";
import { CardChicken } from "./CardChicken";

function App() {

  return (
    <div className={s.App}>
      <h1 className={s.App__title}>Ты сегодня покормил кота?</h1>
      <div className={s.App__container}>
      <CardFuagra />
      <CardFish />
      <CardChicken />
      {/*<Card weight={2}/>
          <Card weight={5}/>*/}
      </div>
    </div>
  );
}

export default App;
