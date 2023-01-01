import React from 'react';

import { Urls } from '../../../utils/routers';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2022 dealer</p>
        <p className="footer__text">
          Этот сайт защищен reCAPTCHA и Google
          <a className="footer__link" href={Urls.MAIN.PRIVACY}>Политика конфиденциальности</a>
          <a className="footer__link" href={Urls.MAIN.PRIVATE}>Условия использования</a>
        </p>
      </div>
    </div>
  );
}
