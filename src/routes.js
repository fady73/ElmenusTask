/* eslint-disable max-len */
import React from 'react';
import { retry } from '../src/utils/helper';

import aclMatrix from './constant/aclMatrix';

const Home = React.lazy(() =>
  retry(() => import('../src/component/Home/Home'))
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/admin-panel',
    exact: true,
    name: 'admin',
    component:Home,
    access: [...aclMatrix.ADMIN_ACCESS]
  },
  {
    path: '/login',
    exact: true,
    name: 'login',
    component:()=><></>,
    access: [...aclMatrix.ALL_ACCESS]
  },
];

export default routes;
