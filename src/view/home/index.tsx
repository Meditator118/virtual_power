import React from 'react';
import {  UserOutlined,AreaChartOutlined,ThunderboltOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import'./index.scss'
import { Outlet ,useNavigate} from 'react-router-dom';

const { Header,  Sider } = Layout;

const totalData: MenuProps['items']=[{
  key: `sub1`,
  icon: React.createElement(AreaChartOutlined),
  label: `负荷概览`,
  children:[
    {
      key: '/total',
      label: '实时数据',
    }
  ]
},{
  key: `sub2`,
  icon: React.createElement(UserOutlined),
  label: `用户设备`,
  children:[
    {
      key: '/device',
      label: '设备状态',
    },
    {
      key: '/connect',
      label: '连接拓扑',
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


const Home: React.FC = () => {
  const navigate=useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const trans: MenuProps['onClick'] = (e) => {
    navigate('/home'+e.keyPath[0])
  };
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
            items={totalData}
            onClick={trans}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px',height:'100vh'}}>
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;