import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Oauth() {
  const [searchParams] = useSearchParams();
  // const params = useParams();
  // console.log(params, searchParams.get('code'));
  const code: string = searchParams.get('code')!;
  const [token, setToken] = useState('');

  // @ts-ignore
  useEffect(() => {
    const myHeaders = new Headers();
    //  myHeaders.append('Cookie', 'yandexuid=760862031673339314');
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
        // console.log('result ->', result);
        // @ts-ignore

        // console.log('>', JSON.parse(result).access_token);
        // @ts-ignore
        setToken(JSON.parse(result).access_token);
      })
      .catch((error) => console.log('error', error));
  }, [code]);

  useEffect(() => {
    if (token) {
      // const myHeaders = new Headers();
      // eslint-disable-next-line max-len
      // myHeaders.append('Authorization', 'OAuth y0_AgAAAAABpMU3AAj7yAAAAADZXLmYDUWtKfsPQ1WfwGcs_68JW802sBI');
      // myHeaders.append('Cookie', 'yandexuid=760862031673339314');
      // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');

      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'text/plain',
          // Cookie: 'yandexuid=760862031673339314',
          Authorization: 'OAuth y0_AgAAAAABpMU3AAj7yAAAAADZXLmYDUWtKfsPQ1WfwGcs_68JW802sBI',
        },
        redirect: 'follow',
      };

      // @ts-ignore
      fetch('https://login.yandex.ru/info', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
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
