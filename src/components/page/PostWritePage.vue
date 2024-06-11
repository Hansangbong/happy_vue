<template>
  <div :class="wrapperClass">
    <div :class="containerClass">
      <TextInputUi
        :height="20"
        v-model="title"
      />
      <TextInputUi
        :height="20"
        v-model="content"
      />
      <ButtonUi
        :title="save"
      />
      <ButtonUi
        :title="cancle"
        @click="goHome"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { css } from '@emotion/css';
import TextInputUi from '../ui/TextInputUi.vue';
import ButtonUi from '../ui/ButtonUi.vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'PostWritePage',
  components: {
    TextInputUi,
    ButtonUi,
  },
  setup() {
    const title = ref('BUTTON');
    const content = ref('');
    const save = ref('저장');
    const cancle = ref('취소');
    const router = useRouter(); //  uRL 이동

    const goHome = () => {
      router.push('/');
    }

    const wrapperClass = css`
      padding: 16px;
      width: calc(100% - 32px);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `;

    const containerClass = css`
      width: 100%;
      max-width: 720px;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    `;

    return {
      title,
      content,
      save,
      cancle,
      wrapperClass,
      containerClass,
      goHome,
      router,
    };
  },
});
</script>

<style scoped>
/* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
</style>
