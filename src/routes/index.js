import { createRouter, createWebHistory } from 'vue-router'

// 메인
import MainView from '@/components/MainView'
// 프로필
import AboutMe from '@/components/AboutMe/AboutMe'
import AboutMeView from '@/components/AboutMe/AboutMeView'
// 맛지도
import FoodMap from '@/components/FoodMap/FoodMap'
import FoodMapView from '@/components/FoodMap/FoodMapView'
// 연락처
import ContactMe from '@/components/ContactMe/ContactMe'
import ContactMeView from '@/components/ContactMe/ContactMeView'


// 라우터 설계
const routes = [
  { 
    path: '/', 
    name: "Home",
    meta: {
      tit : 'Main 노출'
    },
    component:MainView
  },
  { 
    path: '/AboutMe',
    name: "AboutMe",
    meta: {
      tit : 'AboutMe'
    },
    component:AboutMe
  },
  { 
    path: '/AboutMeView',
    name: "AboutMeView",
    meta: {
      tit : 'AboutMe 메인 노출'
    },
    component:AboutMeView
  },
  { 
    path: '/FoodMap',
    name: "FoodMap",
    meta: {
      tit : 'FoodMap'
    },
    component:FoodMap
  },
  { 
    path: '/FoodMapView',
    name: "FoodMapView",
    meta: {
      tit : 'FoodMapView 메인 노출'
    },
    component:FoodMapView
  },
  { 
    path: '/ContactMe',
    name: "ContactMe",
    meta: {
      tit : 'ContactMe'
    },
    component:ContactMe
  },
  { 
    path: '/ContactMeView',
    name: "ContactMeView",
    meta: {
      tit : 'ContactMeView 메인 노출'
    },
    component:ContactMeView
  }
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

//title 태그 변경
router.afterEach((to) => {
  document.title = to.meta.tit;
})

// 라우터 추출 (main.js에서 import)
export {router}