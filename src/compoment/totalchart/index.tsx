import React from 'react'
import * as echarts from 'echarts/core';
import  './index.scss';
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

export default function TocalChart() {
    React.useEffect(() => {
        function initChart(){
          let chartDom = document.getElementById('tchart')!;
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
                formatter: '{value}W'
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
                data: [320, 320, 280, 290, 280, 350, 550, 500, 400, 390, 380, 390, 400, 440, 600, 900, 800, 700, 600, 400],
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
        initChart()
      },[])
  return (
    <div id='tchart' ></div>
  )
}
