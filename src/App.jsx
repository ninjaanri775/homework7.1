import React, { useState } from 'react';
import './App.css'

function App() {
  const [rate, setrate] = useState(null);
  const [submitted, setSubmitted] = useState(false); 

  const rateus = (value) => {
    setrate(value);
  };

 
  const submit2 = () => {
    if (rate) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className='container2'>
        <img className='onlinepayment' src="/assets/Online payment_Two Color(1)@2x.png" alt="" />
        <h3 className='selected'>You selected {rate} out of 5</h3>
        <h2 className='thank'>Thank You!</h2>
        <h3 className="appreciate">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</h3>

      </div>
    );
  }

  return (
    <div className='container'>
      <div className="circle"><img src="/assets/Path.png" alt="" /></div>
      <h1 className='howdidwedo'>How did we do?</h1>
      <div className="text">
              <h3 className='letus'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</h3>
      </div>

      <div className='buttons'>
        <button className={`rates ${rate === 1 ? 'active' : ''}`} onClick={() => rateus(1)}>1</button>
        <button className={`rates ${rate === 2 ? 'active' : ''}`} onClick={() => rateus(2)}>2</button>
        <button className={`rates ${rate === 3 ? 'active' : ''}`} onClick={() => rateus(3)}>3</button>
        <button className={`rates ${rate === 4 ? 'active' : ''}`} onClick={() => rateus(4)}>4</button>
        <button className={`rates ${rate === 5 ? 'active' : ''}`} onClick={() => rateus(5)}>5</button>
      </div>
      <button className='submitter' onClick={submit2} disabled={!rate}>
        SUBMIT
      </button>
    </div>
  );
}

export default App;
