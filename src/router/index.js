import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeList from '../views/RecipeList'
import RecipeDisplay from '../views/RecipeDisplay'
import RecipeAddForm from '../views/RecipeAddForm'
import RecipeEditForm from '../views/RecipeEditForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RecipeList',
    component: RecipeList
  },
  {
    path: '/display/:id',
    name: 'RecipeDisplay',
    component: RecipeDisplay
  },
  {
    path: '/add',
    name: 'RecipeAddForm',
    component: RecipeAddForm
  },
  {
    path: '/edit/:id',
    name: 'RecipeEditForm',
    component: RecipeEditForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
