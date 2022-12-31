/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Delivery() {
  return (
    <section className="page">
      <div className="page__content">
        <h5 className="title title_h5">Мы доставляем ваши заказы по всей России</h5>
        <p className="text">
          <span className="text__paragraph">
            Мы отправим посылку в день заказа (если заказ сделан до 18 ч. 30 мин. по Москве) 
            компанией СДЭК до ближайшего к вам пункта выдачи заказов (ПВЗ). Заказ будет «идти» 
            к вам от 1 до 9 дней, в зависимости от удаленности от нашего склада и условий СДЭКа. 
            Минимальная сумма заказа для доставки во все регионы России - 1000 руб.
          </span>
          <span className="text__paragraph">
            Для г. Москвы и Московской области (срок доставки 1-3 рабочих дня):
          </span>
          <span className="text__paragraph">
            При заказе от 2 500 руб. — доставка до ближайшего к вам пункта выдачи 
            заказов (ПВЗ) бесплатная.
          </span>
          <span className="text__paragraph">
            При заказе до 2 500 руб. — стоимость доставки до ближайшего к вам пункта 
            выдачи заказов (ПВЗ) СДЭК – 300 руб.
          </span>
        </p>
        <h5 className="title title_h5">Самовывоз в г. Москве</h5>
        <p className="text">
          <span className="text__paragraph">
            Осуществляется с адреса: г. Москва, ст. м. ... , д. 11 
            (вторник-воскресенье 10:00-21:00). Укажите этот способ доставки в 
            комментарии к заказу и ожидайте SMS-уведомления. После поступления SMS 
            на указанный при заказе номер – можете забирать свой заказ.
          </span>
        </p>
        <h5 className="title title_h5">Условия доставки по России</h5>
        <p className="text">
          <span className="text__paragraph">
            При заказе от 3 500 руб. — доставка до ближайшего к вам пункта выдачи 
            заказов (ПВЗ) бесплатная.
          </span>
          <span className="text__paragraph">
            При заказе до 3 500 руб. — стоимость доставки до ближайшего к вам 
            пункта выдачи заказов (ПВЗ) СДЭК – 450 руб.
          </span>
        </p>
        <h5 className="title title_h5">Курьерская доставка</h5>
        <p className="text">
          <span className="text__paragraph">
            Точную цену доставки до вашего города можно уточнить у нас.
          </span>
        </p>
        <h5 className="title title_h5">Важно!</h5>
        <p className="text">
          <span className="text__paragraph">
            Отправка заказа осуществляется только после 100% предоплаты.
          </span>
          <span className="text__paragraph">
            Условия и стоимость доставки в некоторые отдаленные города 
            и населенные пункты рассчитываются индивидуально.
          </span>
          <span className="text__paragraph">
            Если Вы не нашли подходящий для вас способ доставки или у вас 
            есть вопросы и предложения по доставке Вам заказа, то позвоните 
            или напишите нам. Мы уверены, что решим Ваш вопрос!
          </span>
        </p>
      </div>
    </section>
  );
}
