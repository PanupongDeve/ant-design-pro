import { DashBoard } from './DashBoard';
import { Form } from './Form';

import { List } from './List';
import { Profile } from './Profile';
import { Result } from './Result';
import { Exception } from './Exception';
import { Account } from './Account';
import { Editor } from './Editor';

import { AppDashBoard } from './AppDashBoard';

const BackOffice = {
  path: '/',
  component: '../layouts/BasicLayout',
  Routes: ['src/pages/Authorized'],
  // authority: ['admin', 'user'],
  routes: [],
};

const REDIRECT_ROUTES: any = {
  path: '/',
  redirect: '/dashboard/home',
  // authority: ['admin', 'user'],
};

const PAGE_404 = {
  component: '404',
};

const EXAMPLE_COMPONENT = false;

if (EXAMPLE_COMPONENT) {
  BackOffice.routes.push(DashBoard);
  BackOffice.routes.push(Form);
  BackOffice.routes.push(List);
  BackOffice.routes.push(Profile);
  BackOffice.routes.push(Result);
  BackOffice.routes.push(Exception);
  BackOffice.routes.push(Account);
  BackOffice.routes.push(Editor);
}

BackOffice.routes.push(AppDashBoard);
BackOffice.routes.push(REDIRECT_ROUTES);
BackOffice.routes.push(PAGE_404);

export { BackOffice };
