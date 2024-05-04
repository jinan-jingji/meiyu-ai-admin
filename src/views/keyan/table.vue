<template>
  <div class="p-4">
    <BasicTable
      title="基础示例"
      :columns="columns"
      :dataSource="data"
      :pagination="{ pageSize: 10 }"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { BasicTable } from '@/components/Table';

  // 直接定义 getBasicColumns 和 getBasicData 函数，而不是导出它们
  const getBasicColumns = () => {
    return [
      { title: '姓名', dataIndex: 'name' },
      { title: '年龄', dataIndex: 'age' },
      { title: '职位', dataIndex: 'job' },
    ];
  };

  const getBasicData = () => {
    return [
      { name: '张三', age: 30, job: '工程师' },
      { name: '李四', age: 24, job: '设计师' },
      { name: '王五', age: 28, job: '产品经理' },
    ];
  };

  // 使用 ref 创建响应式引用
  const columns = ref(getBasicColumns());
  const data = ref(getBasicData());
</script>
