import React from 'react'
import * as echarts from 'echarts/core';
import  './index.scss';

import { GridComponent, GridComponentOption } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;


export default function DemendChart() {
    React.useEffect(() => {
        function initChart(){
            var chartDom = document.getElementById('dchart')!;
            var myChart = echarts.init(chartDom);
            var option: EChartsOption;
            option = {
              title: {
                subtext: '满足度'
              },
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
                },
                yAxis: {
                  type: 'value',
                axisLabel: {
                formatter: '{value} %'
                  },
                },
                series: [
                  {
                    data: [95,80,85,93,95,94,98,85,87,88,80,85,93,95,94,98,98,85,87,88,],
                    type: 'line',
                    areaStyle: {}
                  }
                ]
              };
          option && myChart.setOption(option);
          
          }
        initChart()
      },[])
  return (
    <div id='dchart'></div>
  )
}
