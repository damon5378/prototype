import React from "react";
// import cardBlue from './img/card_blue.jpg'
import cardPink from "./img/card_pink.png";
import s from "./CardFuagra.module.css";

export const CardFish = () => {
  return (
    <div className={s.card}>
      <img src={cardPink} alt="" className={s.card__img} />
      <div className={s.card__text__container}>
        <span className={s.card__text__undertitle}>
          Сказочное заморское яство
          <br />
        </span>
        <span className={s.card__text__title}>
          Нямушка
          <br />
        </span>
        <span className={s.card__text__subtitle}>
          с рыбой
          <br />
        </span>
        <div className={s.card__text__additional__wrapper}>
          <span className={s.card__text__additional}>
            <b>40</b> порций
            <br />
          </span>
          <span className={s.card__text__gift}><b>2</b> мыши в подарок</span>
        </div>
        <div className={s.card__weightPink}>
            <span className={s.card__weight__number}>2</span>
            <span className={s.card__weight__text}>кг</span>
        </div>
      </div>
        <span className={s.card__subCardText2}>Головы щучьи с чесноком да свежайшая сёмгушка</span>
    </div>
  );
};
