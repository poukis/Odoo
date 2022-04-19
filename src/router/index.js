import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue' 
// Importatiion du register1View
import Register1View from '../views/Register1View'

// Importation du accountView
import AccountView from '../views/AccountView'

// Importation de connexionView
import ConnexionView from '../views/ConnexionView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Register1View
  },
  // Ajout de la route liée au registers View
  {
    path: '/inscription/etape-1',
    name: 'inscription1',
    component: Register1View
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  // Ajout de la route liée à la connexion
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter(
{
      mode: 'history',
      routes
})

export default router
