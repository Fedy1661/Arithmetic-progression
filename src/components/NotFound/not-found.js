import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const NotFound = () => {
  const [timer, setTimer] = useState(3)
  setInterval(() => { setTimer(timer - 1) }, 1000)
  return (
    <>
      {!timer && <Redirect to='/' />}
      <div className="not-found title">
        Страница не найдена.
        <br></br>
        <br></br>
        Вы будете перенаправлены на главную через <b>{timer}</b> сек.
      </div>
    </>
  )
}

export default NotFound;