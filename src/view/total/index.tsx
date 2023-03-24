import React from 'react'
import { Breadcrumb, Tabs} from 'antd';
import DataChunk from '../../compoment/datachunk'
import type { TabsProps} from 'antd';
import'./index.scss'
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
  MarkAreaComponent,
  MarkAreaComponentOption
} from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  MarkAreaComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | VisualMapComponentOption
  | MarkAreaComponentOption
  | LineSeriesOption
>;

const total ={
	"numofdevice": 2,
	"softpower": 1100,
	"power": 2400
}
const historyData: TabsProps['items'] = [
  {
    key: '1',
    label: `总负荷`,
    children:<div id='chart'></div>
  },
  {
    key: '2',
    label: `可调负荷`,
    children:<div id='chart'></div>
  },
  {
    key: '3',
    label: `需求满足度`,
    children:<div id='chart'></div>
  },
];
const onChange = (key: string) => {
  console.log(key);
};
export default function Total() {
  React.useEffect(() => {
    initChart()
  },[])
  function initChart(){
  let chartDom = document.getElementById('chart')!;
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;
  option = {
    title: {
      subtext: '功率'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // prettier-ignore
      data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} W'
      },
      axisPointer: {
        snap: true
      }
    },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 6,
          color: 'green'
        },
        {
          gt: 6,
          lte: 8,
          color: 'red'
        },
        {
          gt: 8,
          lte: 14,
          color: 'green'
        },
        {
          gt: 14,
          lte: 17,
          color: 'red'
        },
        {
          gt: 17,
          color: 'green'
        }
      ]
    },
    series: [
      {
        name: 'Electricity',
        type: 'line',
        smooth: true,
        // prettier-ignore
        data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        markArea: {
          itemStyle: {
            color: 'rgba(255, 173, 177, 0.4)'
          },
          data: [
            [
              {
                name: 'Morning Peak',
                xAxis: '07:30'
              },
              {
                xAxis: '10:00'
              }
            ],
            [
              {
                name: 'Evening Peak',
                xAxis: '17:30'
              },
              {
                xAxis: '21:15'
              }
            ]
          ]
        }
      }
    ]
  };
  
  option && myChart.setOption(option);
  
  }
  return (
    <div>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className='data-panel'>
            <DataChunk title='设备数' data={total.numofdevice}></DataChunk>
            <DataChunk title='可调负荷' data={total.softpower}></DataChunk>
            <DataChunk title='总负荷' data={total.power}></DataChunk>
            <DataChunk title='需求满足度' data='80%'></DataChunk>
          </div>
          <div className='chart-sel'>
            <Tabs defaultActiveKey="1" items={historyData} onChange={onChange} centered={true} size="large"/>;
          </div>
    </div>
  )
}
