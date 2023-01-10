import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Urls } from '../../utils/constants';

export default function Oauth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code: string = searchParams.get('code')!;
  const [token, setToken] = useState('');

  // @ts-ignore
  useEffect(() => {
    const myHeaders = new Headers();
    const formdata = new FormData();
    formdata.append('grant_type', 'authorization_code');
    formdata.append('client_id', 'c709762dfe3e447999beb343da0bee9f');
    formdata.append('client_secret', 'c1ff76a0170e4f49b9572665a233d901');
    formdata.append('code', code);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    // @ts-ignore
    fetch('https://oauth.yandex.ru/token', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setToken(JSON.parse(result).access_token);
      })
      .catch((error) => console.log('error', error));
  }, [code]);

  useEffect(() => {
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({ token });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      // @ts-ignore
      fetch('/api/oauth', requestOptions)
        .then((response) => response.text())
        .then((result: unknown) => {
          if (JSON.parse(result as string).message === 'Успешная авторизация') {
            navigate(Urls.MAIN.INDEX);
          }
        })
        .catch((error) => console.log('error', error));
    }
  }, [token]);

  return (
    <section className="page">
      <div className="page__content">
        {code}
        -
        {token}
      </div>
    </section>
  );
}
