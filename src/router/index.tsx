import { Navigate } from 'react-router-dom'
import  Home  from '../view/home'
import Total from '../view/total'
import Device1 from '../view/device'
import Connect from '../view/connect'




const indexRouter=[
    {
        path:'/home',
        element:<Home/>,
        children:[
            {
                path:'total',
                element:<Total/>
            },
            {
                path:'device',
                element:<Device1/>
            },
            {
                path:'connect',
                element:<Connect/>
            }
        ]
    },
   
    {
        path:'/',
        element:<Navigate to="/home/total"/>
    }
]
export default indexRouter
