<template>
  <PageWrapper title="文件上传与姓名输入">
    <Alert message="带有表单校验的上传" />
    <BasicForm @register="registerValiate" class="my-5" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  // import { BasicUpload } from '@/components/Upload';
  import { useMessage } from '@/hooks/web/useMessage';
  import { BasicForm, FormSchema, useForm } from '@/components/Form';
  import { PageWrapper } from '@/components/Page';
  import { Alert } from 'ant-design-vue';
  import { uploadApi } from '@/api/sys/upload';

  const schemasValiate: FormSchema[] = [
    {
      field: 'name',
      component: 'Input',
      label: '姓名',
      rules: [{ required: true, message: '请输入姓名' }],
    },
    {
      field: 'field1',
      component: 'Upload',
      label: '上传文件',
      rules: [{ required: true, message: '请选择上传文件' }],
      componentProps: {
        api: uploadApi,
        maxSize: 2,
        maxNumber: 1,
        accept: ['image/*', '.pdf', '.doc', '.docx', '.xls', '.xlsx'], // 这里可以根据实际需要调整文件类型
      },
    },
  ];

  const { createMessage } = useMessage();

  const [registerValiate, { getFieldsValue: getFieldsValueValiate, validate }] = useForm({
    labelWidth: 160,
    schemas: schemasValiate,
    actionColOptions: {
      span: 18,
    },
    submitFunc: () => {
      return new Promise((resolve) => {
        validate()
          .then(() => {
            resolve();
            console.log(getFieldsValueValiate());
            createMessage.success('表单提交成功，请查看控制台');
          })
          .catch(() => {
            createMessage.error('请填写所有必填项');
          });
      });
    },
  });
</script>
