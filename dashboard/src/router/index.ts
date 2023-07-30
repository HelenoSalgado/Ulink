import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/modules/home/HomeView.vue';
import LoginView from '@/modules/login/LoginView.vue';
import RegisterView from '@/modules/register/RegisterView.vue';
import DashboardView from '@/modules/dashboard/DashboardView.vue';
import { useAuth } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entrar',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        auth: true,
      },
      children: [
        {
          path: '',
          component: () => import('@/modules/dashboard/views/DashboardGeneralView.vue'),
        },
        {
          path: 'encurta-link',
          name: 'encurta link',
          component: () => import('@/modules/dashboard/views/ShortenLinkView.vue'),
        },
        {
          path: 'perfil',
          name: 'perfil',
          component: () => import('@/modules/dashboard/views/ProfileView.vue'),
        },
        {
          path: 'all-links',
          name: 'all links',
          component: () => import('@/modules/dashboard/views/AllLinksView.vue'),
        },
        {
          path: 'edit-link/:id',
          name: 'edit',
          component: () => import('@/modules/dashboard/views/EditLinkView.vue'),
        },
      ],
    },
  ],
});

router.beforeEach(async(to, from, next) => {

  if(to.meta?.auth){
    const auth = useAuth();
    if(auth.token){
       const isAuthenticated = await auth.checkToken();
       if(isAuthenticated) next();
       else
       next({ name: 'login' });
    }
  }else{
    next();
  }
   
})

export default router
