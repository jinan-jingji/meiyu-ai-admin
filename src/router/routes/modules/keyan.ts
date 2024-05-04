import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const keyanRoute: AppRouteModule = {
  path: '/keyan',
  name: 'Keyan',
  component: LAYOUT,
  redirect: '/keyan/chanyeyuanqu',
  meta: {
    icon: 'simple-icons:test-tube',
    title: '可研报告',
  },
  children: [
    {
      path: 'chanyeyuanqu',
      name: 'KeyanChanyeYuanqu',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '产业园区',
      },
      children: [
        {
          path: 'list',
          name: 'KeyanShehuiShiye-Liebiao',
          component: () => import('@/views/keyan/table.vue'),
          meta: {
            title: '列表',
          },
        },
        {
          path: 'create',
          name: 'KeyanShehuiShiye-Xinjian',
          component: () => import('@/views/keyan/create.vue'),
          meta: {
            title: '新建',
          },
        },
        {
          path: 'management',
          name: 'KeyanShehuiShiye-Guanli',
          component: () => import('@/views/keyan/table.vue'),
          meta: {
            title: '管理',
          },
        },
      ],
    },
    {
      path: 'shehuishiye',
      name: 'KeyanShehuiShiye',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '社会事业',
      },
    },
    {
      path: 'daolu',
      name: 'KeyanDaolu',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '道路',
      },
    },
    {
      path: 'shangmaowuliu',
      name: 'KeyanShangmaoWuliu',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '商贸物流',
      },
    },
    {
      path: 'shengtaihuanjing',
      name: 'KeyanShengtaiHuanjing',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '生态和环境工程',
      },
    },
    {
      path: 'xinxingjichusheshi',
      name: 'KeyanXinxingJichuSheshi',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '新型基础设施',
      },
    },
    {
      path: 'guanxian',
      name: 'KeyanGuanxian',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '管线(地下管线/综合管廊)',
      },
    },
    {
      path: 'gongye',
      name: 'KeyanGongye',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '工业(生产制造)',
      },
    },
    {
      path: 'nongye',
      name: 'KeyanNongye',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '农业',
      },
    },
    {
      path: 'dianli',
      name: 'KeyanDianli',
      component: () => import('@/views/keyan/table.vue'),
      meta: {
        title: '电力(电网/充电/储能)',
      },
    },
  ],
};

export default keyanRoute;
