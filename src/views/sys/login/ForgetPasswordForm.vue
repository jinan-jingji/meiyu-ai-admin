<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
      <FormItem name="email" class="enter-x">
        <Input size="large" v-model:value="formData.email" :placeholder="t('sys.login.email')" />
      </FormItem>

      <FormItem class="enter-x">
        <Button type="primary" size="large" block @click="handleReset" :loading="loading">
          发送
        </Button>
        <Button size="large" block class="mt-4" @click="handleBackLogin">
          {{ t('sys.login.backSignIn') }}
        </Button>
      </FormItem>
    </Form>
  </template>
</template>
<script lang="ts" setup>
  import { reactive, ref, computed, unref } from 'vue';
  import LoginFormTitle from './LoginFormTitle.vue';
  import { Form, Input, Button } from 'ant-design-vue';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useLoginState, useFormRules, LoginStateEnum } from './useLogin';
  import { passwordResetApi } from '@/api/sys/user';

  const FormItem = Form.Item;
  const { t } = useI18n();
  const { handleBackLogin, getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();

  const formRef = ref();
  const loading = ref(false);

  const formData = reactive({
    email: '',
  });

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD);

  async function handleReset() {
    const form = unref(formRef);
    if (!form) return;

    try {
      loading.value = true;
      const result = await passwordResetApi({
        email: formData.email,
      });

      if (result.info) {
        console.log('handleReset -> result', result);
        alert('已发送，请检查您的邮箱');
        handleBackLogin(); // 可以选择跳转到登录界面
      }
    } catch (error) {
      console.error('handleReset -> error', error);
      alert('密码重置失败');
    } finally {
      loading.value = false;
    }
  }
</script>
