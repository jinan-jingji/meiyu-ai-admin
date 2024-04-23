import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
// import { t } from '@/hooks/web/useI18n';

const testRoute: AppRouteModule = {
  path: '/test',
  name: 'Test',
  component: LAYOUT,
  redirect: '/test/index',
  meta: {
    icon: 'simple-icons:test-tube',
    title: '测试', // 确保已在i18n的对应文件中添加此键的翻译
  },
  children: [
    {
      path: 'index',
      name: 'TestPage',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '测试页面',
      },
    },
  ],
};

export default testRoute;
