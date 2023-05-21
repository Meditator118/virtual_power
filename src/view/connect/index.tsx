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
        initconChart(1)
    },[])
 
function initconChart(treeType:number) {
let chartDom = document.getElementById('con-chart')!;
let myChart = echarts.init(chartDom);
let option: EChartsOption;
let map={
    'CCO':6000,
    'PCO':600,
    'STA':60,
    '柔性负荷':60,
}
let c2p_nodeList=[]
let c2p_linkList=[]
if(treeType===1){
  for (let index = 0; index <11; index++) {
    let tempname:'CCO'|'PCO'
    let tempy
    let tempindex=index
    let symbolSize
    let fontSize
    let color
    if(index===0){
        tempname='CCO'
        tempy=0
        symbolSize=100
        fontSize=50
        color='#283b42'
    }else{
        tempname='PCO'
        tempindex-=1
        c2p_linkList.push({
            source: '0',
            target: index.toString()
          })
        tempy=3600
        symbolSize=60
        fontSize=20
        color='#1d6a96'
    }
    c2p_nodeList.push({
        id: index.toString(),
        name: tempname,
        x: (2*tempindex+1)*map[tempname],
        symbolSize,
        y:tempy,
        fontSize,
        itemStyle: {
            color,
        },
    })
}

}else{
  for (let index = 0; index < 21; index++) {
    let tempname:'PCO'|'STA'|'柔性负荷'
    let tempy
    let tempindex=index
    let symbolSize
    let fontSize
    let color
    if(index===0){
      tempname='PCO'
      tempy=600
      symbolSize=100
      fontSize=20
      color='#1d6a96'
    }else if(index<11) {
      tempname='STA'
      tempy=900
      tempindex-=1
      c2p_linkList.push({
          source: '0',
          target: index.toString()
        })
      symbolSize=60
      fontSize=10
      color='#85b8cb'
    }else{
      tempname='柔性负荷'
        tempy=1200
        tempindex-=10
        c2p_linkList.push({
            source: tempindex,
            target: index.toString()
        })
        tempindex--
        symbolSize=60
        fontSize=10
        color='#d1dddb'
    }
    c2p_nodeList.push({
      id: index.toString(),
      name: tempname,
      x: (2*tempindex+1)*map[tempname],
      symbolSize,
      y:tempy,
      fontSize,
      itemStyle: {
          color,
      },
    })
    
  }
}

option = {
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      roam: true,
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      layout: 'none',
      data:c2p_nodeList,
      links: c2p_linkList,
      label: {
        show: true,
        formatter: '{b}'
      },
      labelLayout: {
        hideOverlap: true
      },
      scaleLimit: {
        min: 1,
        max: 12
      },
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ]
};

option && myChart.setOption(option);
myChart.on('click', function (point) {
   if(point.dataIndex!==0){
    initconChart(2)
   }else{
    initconChart(1)
   }
});
    }
  return (
    <div className='connect-view'>
        <div id='con-chart'></div>
    </div>
  )
}
