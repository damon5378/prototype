import React from "react";
// import cardBlue from './img/card_blue.jpg'
import cardPink from "./img/card_pink.png";
import s from "./CardFuagra.module.css";

export const CardChicken = () => {
  return (
    <div className={s.cardChicken}>
      <img src={cardPink} alt="" className={s.card__img} />
      <div className={s.card__text__containerChicken}>
        <div className={s.addClass}>
        <span className={s.card__text__undertitle}>
          Сказочное заморское яство
          <br />
        </span>
        </div>
        <span className={s.card__text__title}>
          Нямушка
          <br />
        </span>
        <span className={s.card__text__subtitle}>
          с курой
          <br />
        </span>
        <div className={s.card__text__additional__wrapperChicken}>
          <span className={s.card__text__additional}>
            <b>100</b> порций
            <br />
          </span>
          <span className={s.card__text__gift}><b>5</b> мышей в подарок</span><br/>
          <span className={s.card__text__consumer}>заказчик доволен</span>
        </div>
        <div className={s.card__weightBlur}>
            <span className={s.card__weight__number}>5</span>
            <span className={s.card__weight__text}>кг</span>
        </div>
      </div>
        <span className={s.card__subCardText3}>Печалька, с курой закончился.</span>
    </div>
  );
};
