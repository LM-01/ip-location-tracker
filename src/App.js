import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import arrow from './images/icon-arrow.svg'
import axios from 'axios'
const {REACT_APP_IP_API} = process.env;

function App() {
  const [ipSearch, setIpSearch] = useState('');
  const [location, setLocation] = useState([51.505, -0.09])
  const [mapCenter, setMapCenter] = useState([51.515, -0.09])
  const [data, setData] = useState({})
  const [numKeys, setNumKeys] = useState(0)
  // console.log(REACT_APP_IP_API)

  useEffect(()=> {
    console.log(data)
    const num = Object.keys(data).length
    setNumKeys(num)
  },[data])

  function getApiInfo(){

    const baseUrl = 'https://geo.ipify.org/api/v1'
    axios.get(baseUrl,{
      params: {
        apiKey:REACT_APP_IP_API,
        ipAddress:ipSearch
      }
    })
    .then(res => {
      console.log(res.data)
      const {lat, lng, city, country, timezone} = res.data.location
      const {ip, isp} = res.data
      const dataObj = {
        ip,
        isp,
        location: city+', '+country,
        timezone
      }
      setData({...data, ...dataObj})
      // console.log(dataObj)

      setLocation([lat, lng])
      setMapCenter([lat, lng])
    })
    .catch(error => console.log(error))
  }

  const handleIpChange = (e) => {
    setIpSearch(e.target.value)
  }



  return (
    <>
      <div className='main-container'>
        <div className='content'>
          <h1>IP Address Tracker</h1>
          <div className='input-container'>
            <input placeholder='Enter any IP Address' value={ipSearch} onChange={handleIpChange}></input>
            <div className='button' onClick={getApiInfo}>
              <img src={arrow} alt='' className='arrow'/>
            </div>
          </div>
          <div className='info-container'>
            <div className='info-container--row'>
              <p className='small-content'>Ip Address</p>
              <p className='big-content'>{numKeys > 0 ? data.ip : '-'}</p>
            </div>
            <div className='info-container--row'>
              <p className='small-content'>Location</p>
              <p className='big-content'>{numKeys > 0 ? data.location : '-'}</p>
            </div>
            <div className='info-container--row'>
              <p className='small-content'>Timezone</p>
              <p className='big-content'>{numKeys > 0 ? data.timezone : '-'}</p>
            </div>
            <div className='info-container--row'>
              <p className='small-content'>ISP</p>
              <p className='big-content'>{numKeys > 0 ? data.isp : '-'}</p>
            </div>
          </div>
        </div>
        <div className='background'>
          
        </div>
        <div className='map'>

        <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={true}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}> 
            {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
        </Marker>
        </MapContainer>

        </div>

      </div>
    </>
  );
}

export default App;
