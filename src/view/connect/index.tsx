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
      symbolSize: 50,
      roam: true,
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
          name: 'Node 1',
          x: 500,
          y: 300
        },
        {
          name: 'Node 2',
          x: 600,
          y: 300
        },
        {
          name: 'center',
          x: 550,
          y: 100
        },
        {
          name: 'Node 4',
          x: 450,
          y: 500
        },
        {
          name: 'Node 5',
          x: 520,
          y: 500
        },
        {
          name: 'Node 6',
          x: 580,
          y: 500
        },{
          name: 'Node 7',
          x: 650,
          y: 500
        }
      ],
      // links: [],
      links: [
        {
            source: 'center',
            target: 'Node 1'
          },
          {
            source: 'center',
            target: 'Node 2'
          },
          {
            source: 'Node 1',
            target: 'Node 5'
          },
          {
            source: 'Node 2',
            target: 'Node 6'
          },
          {
            source: 'Node 2',
            target: 'Node 7'
          },
          // {
          //   source: 'Node 2',
          //   target: 'Node 4'
          // },
          {
            source: 'Node 1',
            target: 'Node 4'
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
