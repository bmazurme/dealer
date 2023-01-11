import React from 'react';

export default function OauthButtons() {
  const oauthLinks = [
    {
      key: 'yandex',
      label: 'Войти с Яндекс ID',
      link: 'https://oauth.yandex.ru/authorize?response_type=code&client_id=c709762dfe3e447999beb343da0bee9f',
    },
  ];

  return (
    <div className="oauth">
      {oauthLinks.map(({ key, label, link }) => <a key={key} className="oauth__link" href={link}>{label}</a>)}
    </div>
  );
}
