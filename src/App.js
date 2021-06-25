import React from 'react';
import arrow from './images/icon-arrow.svg'

function App() {
  return (
    <>
      <div className='main-container'>
        <div className='content'>
          <h1>IP Address Tracker</h1>
          <div className='input-container'>
            <input placeholder='Enter any IP Address'></input>
            <div className='button'>
              <img src={arrow} alt='' className='arrow'/>
            </div>
          </div>
          <div className='info-container'>
            <div className='info-container--row'>
              <p className='small-content'>Ip Address</p>
              <p className='big-content'>Big Content</p>
            </div>
            <div className='info-container--row'>
              <p className='small-content'>Location</p>
              <p className='big-content'>Big Content</p>
            </div>
            <div className='info-container--row'>
              <p className='small-content'>Timezone</p>
              <p className='big-content'>Big Content</p>
            </div>
            <div className='info-container--row'>
              <p className='small-content'>ISP</p>
              <p className='big-content'>Big Content</p>
            </div>
          </div>
        </div>
        <div className='background'>
          
        </div>
        <div className='map'>

        </div>

      </div>
    </>
  );
}

export default App;
