/* eslint-disable no-trailing-spaces */
import React from 'react';

export default function Privacy() {
  return (
    <section className="page">
      <div className="page__content">
        <h5 className="title title_h5">Права и обязанности сторон</h5>

        <p className="text">
          <span className="text__paragraph">Пользователь имеет право:</span>
          <span className="text__paragraph">- осуществлять поиск информации на сайте</span>
          <span className="text__paragraph">- получать информацию на сайте</span>
          <span className="text__paragraph">- использовать информацию сайта в личных некоммерческих целях</span>
          <span className="text__paragraph">Администрация имеет право:</span>
          <span className="text__paragraph">- по своему усмотрению и необходимости создавать, изменять, отменять правила</span>
          <span className="text__paragraph">- ограничивать доступ к любой информации на сайте</span>
          <span className="text__paragraph">Пользователь обязуется:</span>
          <span className="text__paragraph">- не нарушать работоспособность сайта</span>
          <span className="text__paragraph">
            - не использовать скрипты (программы) для автоматизированного сбора информации
            и/или взаимодействия с Сайтом и его Сервисами
          </span>
          <span className="text__paragraph">Администрация обязуется:</span>
          <span className="text__paragraph">
            - поддерживать работоспособность сайта за исключением случаев, когда это невозможно
            по независящим от Администрации причинам.
          </span>
        </p>

        <h5 className="title title_h5">Ответственность сторон</h5>
        <p className="text">
          <span className="text__paragraph">
            - администрация не несет никакой ответственности за
            услуги, предоставляемые третьими лицами
          </span>
          <span className="text__paragraph">
            - в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное 
            положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность 
            информации, размещённой Пользователем, а также бесперебойную работу 
            информационного ресурса
          </span>
        </p>

        <h5 className="title title_h5">Условия действия Соглашения</h5>

        <p className="text">
          <span className="text__paragraph">
            Данное Соглашение вступает в силу при любом использовании данного сайта.
          </span>
          <span className="text__paragraph">
            Соглашение перестает действовать при появлении его новой версии.
          </span>
          <span className="text__paragraph">
            Администрация оставляет за собой право в одностороннем порядке
            изменять данное соглашение по своему усмотрению.
          </span>
          <span className="text__paragraph">
            Администрация не оповещает пользователей об изменении в Соглашении.
          </span>
        </p>
      </div>
    </section>
  );
}
