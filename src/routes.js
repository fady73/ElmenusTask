/* eslint-disable max-len */
import React from 'react';
import Login from './component/Login/Login';
import AdminPanel from './component/AdminPanel/AdminPanel';

import aclMatrix from './constant/aclMatrix';


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/admin-panel',
    exact: true,
    name: 'admin',
    component:()=><AdminPanel/>,
    access: [...aclMatrix.ADMIN_ACCESS]
  },
  {
    path: '/login',
    exact: true,
    name: 'login',
    component:()=><Login/>,
    access: [...aclMatrix.ALL_ACCESS]
  },
];

export default routes;
