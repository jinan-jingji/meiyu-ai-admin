// src/views/BasicExample/tableData.ts
export function getBasicColumns() {
  return [
    { title: '姓名', dataIndex: 'name' },
    { title: '年龄', dataIndex: 'age' },
    { title: '职位', dataIndex: 'job' },
  ];
}

export function getBasicData() {
  return [
    { name: '张三', age: 30, job: '工程师' },
    { name: '李四', age: 24, job: '设计师' },
    { name: '王五', age: 28, job: '产品经理' },
  ];
}
