import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/dashboard/Dashboard.vue';
import TopRated from '../views/topRated/TopRated.vue';
import Login from '../views/login/Login.vue';
import { logout } from '../api/loginService';
import store from '../store';
import { NotificationType } from '../enums/NotificationTypeEnum';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: isAuthenticated,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/toprated',
    name: 'toprated',
    component: TopRated,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      logout('authentication/logout');
      next();
    },
  },
  {
    path: '/',
    redirect: '/login',
  },
];

function isAuthenticated(to, from, next) {
  if (!store.state.authenticationStore.isLogged) {
    store.dispatch('notificationStore/showNotification', {
      message: 'You need to log in first',
      type: NotificationType.WARNING,
    });
    router.push('login').catch((err) => {
      console.log(err);
    });
    return;
  }
  next();
  return;
}

const router = new VueRouter({
  routes,
});

export default router;
