import React from 'react'
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption
} from 'echarts/components';
import { GraphChart, GraphSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import './index.scss'

echarts.use([TitleComponent, TooltipComponent, GraphChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TitleComponentOption | TooltipComponentOption | GraphSeriesOption
>;
export default function Connect() {
    React.useEffect(() =>{
        initconChart()
    },[])
    function initconChart() {
let chartDom = document.getElementById('con-chart')!;
let myChart = echarts.init(chartDom);
let option: EChartsOption;

option = {
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 70,
      roam: false,
      label: {
        show: true
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20
      },
      data: [
        {
          name: '尾端模块1',
          x: 500,
          y: 300,
          itemStyle: {
            color: '#85b8cb'
          },
        },
        {
          name: '尾端模块2',
          x: 600,
          y: 300,
          itemStyle: {
            color: '#85b8cb'
          },
        },
        {
          name: '控制中心',
          x: 550,
          y: 100,
          itemStyle: {
            color: '#1d6a96'
          },
        },
        {
          name: '空调1',
          x: 430,
          y: 500,
          itemStyle: {
            color: '#d1dddb'
          },
        },
        {
          name: '空调2',
          x: 510,
          y: 500,
          itemStyle: {
            color: '#d1dddb'
          },
        },
        {
          name: '空调3',
          x: 590,
          y: 500,
          itemStyle: {
            color: '#d1dddb'
          },
        },{
          name: '空调4',
          x: 670,
          y: 500,
          itemStyle: {
            color: '#d1dddb'
          },
        }
      ],
      // links: [],
      links: [
        {
            source: '控制中心',
            target: '尾端模块1'
          },
          {
            source: '控制中心',
            target: '尾端模块2'
          },
          {
            source: '尾端模块1',
            target: '空调1'
          },
          {
            source: '尾端模块2',
            target: '空调3'
          },
          {
            source: '尾端模块2',
            target: '空调4'
          },
          {
            source: '尾端模块1',
            target: '空调2'
          }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ]
};

option && myChart.setOption(option);
    }
  return (
    <div className='connect-view'>
        <div id='con-chart'></div>
    </div>
  )
}
