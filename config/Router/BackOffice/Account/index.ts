export const Account = {
  name: 'account',
  icon: 'user',
  path: '/account',
  routes: [
    {
      name: 'center',
      icon: 'smile',
      path: '/account/center',
      component: './account/center',
    },
    {
      name: 'settings',
      icon: 'smile',
      path: '/account/settings',
      component: './account/settings',
    },
  ],
};
