import React from 'react'
import'./index.scss'
interface IProps {title?: string;data?: number|string;unit?:string|boolean}
export default function DataChunk(props: IProps) {
  const {title, data,unit}=props
  return (
    <div className='data-con'>
        <div className='title'>{title}</div>
        <div className='data'>{data}</div>
        <span className='unit'>{unit}</span>
    </div>
  )
}
