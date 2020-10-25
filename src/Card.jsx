import React from "react";
// import cardBlue from './img/card_blue.jpg'
import cat from "./img/cat.png";
import s from "./Card.module.css";

export const Card = () => {
  return (
    <div className={s.card}>
      <img src={cat} alt="" className={s.card__img} />
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
          с фуа-гра
          <br />
        </span>
        <div className={s.card__text__additional__wrapper}>
          <span className={s.card__text__additional}>
            <b>10</b> порций
            <br />
          </span>
          <span className={s.card__text__gift}>мышь в подарок</span>
        </div>
        <div className={s.card__weight}>
            <span className={s.card__weight__number}>0,5</span>
            <span className={s.card__weight__text}>кг</span>
        </div>
      </div>
    </div>
  );
};
