export default {
  npmClient: 'yarn',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/purchase', component: '@/pages/Purchase' },
    { path: '/purchase/paymentEntry', component: '@/pages/PaymentEntry' },
    { path: '/purchase/shippingEntry', component: '@/pages/ShippingEntry' },
    { path: '/purchase/viewOrder', component: '@/pages/ViewOrder' },
    { path: '/purchase/viewConfirmation', component: '@/pages/ViewConfirmation' },
  ],
};
