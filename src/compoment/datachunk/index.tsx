import React from 'react'
import'./index.scss'
interface IProps {title?: string;data?: number;}
export default function DataChunk(props: IProps) {
  const {title, data}=props
  return (
    <div className='data-con'>
        <div className='title'>{title}</div>
        <div className='data'>{data}</div>
        <span className='unit'></span>
    </div>
  )
}
