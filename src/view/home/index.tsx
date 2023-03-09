import React from 'react';
import { DownloadOutlined, NotificationOutlined, UserOutlined,AreaChartOutlined,ThunderboltOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DataChunk from '../../compoment/datachunk'
import'./index.scss'

const { Header,  Sider } = Layout;

// const items1: MenuProps['items'] = [{
//   label: '我的消息',
//   key: 'mail',
//   icon: <NotificationOutlined />,
// },
// {
//   label: '导出数据',
//   key: 'app',
//   icon: <DownloadOutlined />,
// },
// ]


const items3: MenuProps['items']=[{
  key: `sub1`,
  icon: React.createElement(AreaChartOutlined),
  label: `负荷概览`,
  children:[
    {
      key: 11,
      label: '实时数据',
    },{
      key: 12,
      label: '历史数据',
    }
  ]
},{
  key: `sub2`,
  icon: React.createElement(UserOutlined),
  label: `用户设备`,
  children:[
    {
      key: 21,
      label: '设备状态',
    }
  ]
},
{
  key: `sub3`,
  icon: React.createElement(ThunderboltOutlined),
  label: `源网需求`,
  children:[
    {
      key: 31,
      label: '电网需求',
    },{
      key: 32,
      label: '源端响应',
    }
  ]
}]
const total ={
	"numofdevice": 2,
	"softpower": 1100,
	"power": 2400
}
const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        {/* <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} /> */}
        
        
        <img src={require('../../../public/img/device.svg').default} alt="" className="logo"/>
    

        <div>
        
        <span>管理员</span>
        </div>

        <div>
        
        <span>导出数据</span>
        </div>

        <div>
        
        <span>消息</span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items3}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px',height:'100vh'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className='data-panel'>
            <DataChunk title='设备数' data={total.numofdevice}></DataChunk>
            <DataChunk title='可调负荷' data={total.softpower}></DataChunk>
            <DataChunk title='总负荷' data={total.power}></DataChunk>
          </div>
          {/* <Content
          const total ={
            "numofdevice": 2,
            "softpower": 1100,
            "power": 2400
          }
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content> */}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;