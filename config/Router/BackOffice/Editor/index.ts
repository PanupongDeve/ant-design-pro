export const Editor = {
  name: 'editor',
  icon: 'highlight',
  path: '/editor',
  routes: [
    {
      name: 'flow',
      icon: 'smile',
      path: '/editor/flow',
      component: './editor/flow',
    },
    {
      name: 'mind',
      icon: 'smile',
      path: '/editor/mind',
      component: './editor/mind',
    },
    {
      name: 'koni',
      icon: 'smile',
      path: '/editor/koni',
      component: './editor/koni',
    },
  ],
};
