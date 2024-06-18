<template>
  <div :class="wrapperClass">
    <h2>새 글 작성하기</h2>
    <div :class="containerClass">
      <p>제목</p>
      <TextInputUi
        :height="20"
        :title="propsTitle"
        :content="propsContent"
        ref="title"
      />
      <p>내용</p>
      <TextInputUi
        :height="20"
        ref="content"
      />
      <ButtonUi
        :title="save"
        @click="saveText"
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
import axios from 'axios';
import emitter from '@/eventBus.js';

export default defineComponent({
  name: 'PostWritePage',
  components: {
    TextInputUi,
    ButtonUi,
  },
  setup() {
    const router = useRouter(); //  uRL 이동용

    const goHome = () => {
      
      router.push('/board');
    }

    //let emitter = mitt();



    
    const save = ref('저장');
    const cancle = ref('취소');

    let propsTitle = ref('');
    let propsContent = ref('');
    
    const title = ref(null);
    const content = ref(null);

    const saveText = () => {

      const newTitle = title.value.sendText();
      const newContent = content.value.sendText();
      console.log("새로 입력된 제목입니다: ", newTitle);
      console.log("새로 입력된 내용입니다: ", newContent);

      let param = new URLSearchParams();
      param.append('title', newTitle);
      param.append('content', newContent);
      axios.post('/test/write',param).then((res) => {
        console.log('쓰기에 성공했습니다. : ', res.mesg);
        goHome();
      });
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
      saveText,
      propsTitle,
      propsContent
    };
  },
  mounted() {
    emitter.on('test', data => {
      console.log("에미터로 받아온 데이터입니다 :", data);
       propsTitle.value = ref(data.title);
       propsContent.value = ref(data.content);
     })
  },
  unmounted() {
    emitter.off('test', data => {
      console.log("에미터 해제");
    });
  },
});
</script>

<style scoped>
/* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
</style>
