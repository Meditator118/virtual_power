import React from 'react'
import { Breadcrumb, Tabs} from 'antd';
import DataChunk from '../../compoment/datachunk'
import TocalChart from '../../compoment/totalchart'
import DemendChart from '../../compoment/demendchart'
import FreeLoad from '../../compoment/freeload'

import type { TabsProps} from 'antd';
import'./index.scss'
const total ={
	"numofdevice": 2,
	"softpower": 1100,
	"power": 2400
}
const historyData: TabsProps['items'] = [
  {
    key: '1',
    label: `总负荷`,
    children:<TocalChart ></TocalChart>
  },
  {
    key: '2',
    label: `可调负荷`,
    children:<FreeLoad ></FreeLoad>
  },
  {
    key: '3',
    label: `需求满足度`,
    children:<DemendChart ></DemendChart>
  },
];
const onChange = (key: string) => {
  console.log(key);
};


export default function Total() {


  return (
    <div>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>total</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className='data-panel'>
            <DataChunk title='设备数' data={total.numofdevice}></DataChunk>
            <DataChunk title='可调负荷' data={total.softpower} unit={'w'}></DataChunk>
            <DataChunk title='总负荷' data={total.power} unit={'w'}></DataChunk>
            <DataChunk title='需求满足度' data='80%'></DataChunk>
          </div>
          <div className='chart-sel'>
            <Tabs defaultActiveKey="1" items={historyData} onChange={onChange} centered={true} size="middle"/>;
          </div>
          
    </div>
  )
}
