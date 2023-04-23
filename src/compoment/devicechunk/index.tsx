import React from 'react'
import  './index.scss';
interface DeviveProps {id: number;temp: number;power:number}
export default function DeviceChunk(props: DeviveProps) {
  const {power,id,temp}=props
  return (
    <div className='dev-chu'>
      <img src={require('../../../public/img/device.svg').default} alt="" className="logo"/>
      <div className='dev-detail'>
        <div>id: {id}</div>
        <div>温度: {temp}</div>
        <div>功率: {power}W</div>
      </div>
    </div>
  )
}
