export const Profile = {
  path: '/profile',
  name: 'profile',
  icon: 'profile',
  routes: [
    {
      name: 'basic',
      icon: 'smile',
      path: '/profile/basic',
      component: './profile/basic',
    },
    {
      name: 'advanced',
      icon: 'smile',
      path: '/profile/advanced',
      component: './profile/advanced',
    },
  ],
};
