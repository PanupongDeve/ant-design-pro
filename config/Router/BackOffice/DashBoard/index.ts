export const DashBoard = {
  path: '/dashboard',
  name: 'dashboard',
  icon: 'dashboard',
  routes: [
    {
      name: 'analysis',
      icon: 'smile',
      path: '/dashboard/analysis',
      component: './dashboard/analysis',
    },
    {
      name: 'monitor',
      icon: 'smile',
      path: '/dashboard/monitor',
      component: './dashboard/monitor',
    },
    {
      name: 'workplace',
      icon: 'smile',
      path: '/dashboard/workplace',
      component: './dashboard/workplace',
    },
    {
      name: 'home',
      icon: 'smile',
      path: '/dashboard/home',
      component: './dashboard/home',
    },
  ],
};
