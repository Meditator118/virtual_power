import React from 'react'
import DeviceChunk from '../../compoment/devicechunk'
import  './index.scss';
import { Button } from 'antd';
export default function Device1() {
  const [power,setPower]=React.useState(6600)
  function adjustPower() {
    let temp=deviceList.slice()
    deviceList.forEach((device) => device.power-=100)
    setdeviceList((cur)=>cur=temp)
    setPower((cur)=>cur-600)
  }
  const [deviceList,setdeviceList]=React.useState([
    {
    id:1,
    temp:22,
    power:1200
  },
  {
    id:2,
    temp:23,
    power:1400
  },
  {
    id:3,
    temp:26,
    power:1800
  },
  {
    id:4,
    temp:24,
    power:1000
  },
  {
    id:5,
    temp:23,
    power:1200
  },
])
 
  return (
    <>
    <div className='total-power'>
      <div className='total-power-title'>总功率:<span className='power'>{power}</span>W</div>
      <Button type="primary" size='middle' onClick={adjustPower}>
      一键调峰
      </Button>
    </div>
    <div className='dev-con'>
      {deviceList.map((device,key)=><DeviceChunk key={key} temp={device.temp}
      id={device.id} power={device.power}
      ></DeviceChunk>)}
    </div>
    </>
  )
}
