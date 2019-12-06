import FrontLayout from '@/frontLayout'
const frontRouter = {
  path:'/',
  redirect:'/blog',
  component:FrontLayout,
  children:[
  {
    path:'blog',
    component: ()=>import('@/views/index/index')
  },
    {
      path:'/blog/article',
      component: ()=>import('@/views/essay/index')
    },
    {
      path:'/blog/article/:id(\\d+)',
      component:()=>import('@/views/essay/detail')
    }
]
}
export  default frontRouter;
