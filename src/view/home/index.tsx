import React from 'react';
import {  SmileOutlined,UserOutlined,AreaChartOutlined,ThunderboltOutlined,EyeTwoTone,EyeInvisibleOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme,Modal,Input,message,Button,notification} from 'antd';
import'./index.scss'
import { Outlet ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Qs from 'qs'
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
}]
// let temp=
// {
//   key: `sub3`,
//   icon: React.createElement(ThunderboltOutlined),
//   label: `源网需求`,
//   children:[
//     {
//       key: 31,
//       label: '电网需求',
//     },{
//       key: 32,
//       label: '源端响应',
//     }
//   ]
// }

const Home: React.FC = () => {
  const navigate=useNavigate()
  // const [messageApi, contextHolder] = message.useMessage();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const trans: MenuProps['onClick'] = (e) => {
    navigate('/home'+e.keyPath[0])
  };
  const [user,setUser]=React.useState(false)
  const [err,seterr]=React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  let userDetail= {
    name: "",
    password: ""
}
  function setpass(e:any){
    userDetail.password=e.target.value
  }
  function setname(e:any){
    userDetail.name=e.target.value
  }
  const showModal = () => {
    setIsModalOpen(true);
  };  
  const handleOk = async () => {
    console.log(userDetail);
    seterr(true)
    let res=await axios({
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      url: 'http://localhost:3000/loginIn',
      data: Qs.stringify(userDetail)
  })
    console.log(res);
    
    if(res.data!==''){
      // messageApi.open({
      //   type: 'success',
      //   content: '登录成功',
      // });
      seterr(false)
      setIsModalOpen(false);
      setUser(true)
      openNotification()
      
    }else{
      console.log(123);
      
      seterr(true)
      // console.log('1234');
      // setIsModalOpen(false);
      // setUser(true)
      // openNotification()
      // messageApi.open({
      //   type: 'error',
      //   content: '登录失败',
      // });
    }
    
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <Header className="header">
        {/* <img src="../../../public/img/device.svg" alt="" /> */}
      <img src={require('../../../public/img/logo.png')} alt="" className="logo"/>
        <span className='pro-name'>万荷互联</span>
        {/* <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} /> */}
        {/* <img src={require('../../../public/img/logo.jpg').default} alt="" className="logo"/> */}
        <div onClick={showModal}><span>{user?'管理员':'登录'}</span></div>
        <div><span>导出数据</span></div>
        <div><span>消息</span></div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }} className="sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={totalData}
            onClick={trans}
          />
        </Sider>
        <Layout style={{ padding: '4vh 4vw',height:'90vh'}}>
          <Outlet/>
        </Layout>
        <Modal title="登录" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered={true} width={300} okText={'登录'} cancelText={'取消'}>
          <Input placeholder="请输入用户名" prefix={<UserOutlined />} className='input' onChange={setname}/>
          <Input.Password
          placeholder="请输入密码"
          className='input' 
          onChange={setpass}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <div className={err?'tips-show':'tips'} >用户名或密码输入错误</div>
          </Modal>
      </Layout>
    </Layout>
  )
}
export default Home;