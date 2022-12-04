export default {
  npmClient: 'yarn',
  routes: [
    {path: '/', component: '@/pages/index'},
    {path: '/menu', component: '@/pages/Menu'},
    {path: '/purchase', component: '@/pages/Purchase'},
    {path: '/purchase/confirmOrder', component: '@/pages/ConfirmOrder'},
    {path: '/purchase/viewOrder', component: '@/pages/ViewOrder'},
    {path: '/purchase/viewConfirmation', component: '@/pages/ViewConfirmation'},
  ],
};
