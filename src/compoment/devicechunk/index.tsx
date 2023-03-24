import React from 'react'
import  './index.scss';
export default function DeviceChunk() {
  // const {power,id,temp}=props
  return (
    <div className='dev-chu'>
      <img src={require('../../../public/img/device.svg').default} alt="" className="logo"/>
      <div className='dev-detail'>
        <div>id: 1</div>
        <div>温度: 21</div>
        <div>功率: 1000w</div>
      </div>
    </div>
  )
}
