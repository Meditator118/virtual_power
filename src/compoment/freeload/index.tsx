import React from 'react'
import  './index.scss';

import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

export default function FreeLoad() {
    React.useEffect(() => {
        function initChart(){
          let chartDom = document.getElementById('fchart')!;
          let myChart = echarts.init(chartDom);
          let option: EChartsOption;
          
          option = {
            xAxis: {
              type: 'category',
              data: ['00:00', '01:14', '02:30', '03:44', '04:00', '06:14', '07:30', '08:44', '10:00', '11:14', '12:30', '13:44', '14:00', '16:14', '17:30', '18:44', '20:00', '21:14', '22:30', '23:44']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value} W'
                  },
            },
            series: [
              {
                data: [180, 140, 160, 170, 200, 340, 300, 300, 290, 280, 290, 310, 320, 350, 340, 200, 300, 340, 320,300],
                type: 'line',
                smooth: true
              }
            ]
          };
          
          option && myChart.setOption(option);
          
          }
        initChart()
      },[])
  return (
    <div id='fchart'></div>
  )
}



