import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/dashboard/Dashboard.vue';
import TopRated from '../views/topRated/TopRated.vue';
import Login from '../views/login/Login.vue';
import BrowseSongs from '../views/browseSongs/BrowseSongs.vue';
import Settings from '../views/settings/Settings.vue';
import Register from '../views/register/Register.vue';
import { logout } from '../api/loginService';
import store from '../store';
import { NotificationType } from '../enums';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/top-rated',
    name: 'topRated',
    component: TopRated,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/browseSongs',
    name: 'BrowseSongs',
    component: BrowseSongs,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/play',
    beforeEnter: () => {
      window.open('https://open.spotify.com/');
    },
  },
  {
    path: '/settings',
    component: Settings,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/callback',
    beforeEnter: () => {
      store.dispatch('authenticationStore/login');
      router.push('dashboard').catch((err) => {
        console.log(err);
      });
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
