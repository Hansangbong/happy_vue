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
        title="글 작성하기"
        @click="navigateToHome"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { css } from '@emotion/css';
import TextInputUi from '../ui/TextInputUi.vue';
import ButtonUi from '../ui/ButtonUi.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    TextInputUi,
    ButtonUi,
  },
  setup() {
    const title = ref('');
    const content = ref('');

    const navigateToHome = () => {
      // 실제 라우팅 로직으로 교체
      console.log('Navigating to home');
    };

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
      navigateToHome,
      wrapperClass,
      containerClass,
    };
  },
});
</script>

<style scoped>
/* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
</style>
