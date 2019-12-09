export const Result = {
  name: 'result',
  icon: 'check-circle-o',
  path: '/result',
  routes: [
    {
      name: 'success',
      icon: 'smile',
      path: '/result/success',
      component: './result/success',
    },
    {
      name: 'fail',
      icon: 'smile',
      path: '/result/fail',
      component: './result/fail',
    },
  ],
};
