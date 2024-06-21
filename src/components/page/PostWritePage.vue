<template>
  <div :class="wrapperClass">
    <h2>새 글 작성하기</h2>
    <div :class="containerClass">
      <p>제목</p>
      <TextInputUi
        :height="21"
        :title="propsTitle"
        ref="title"
      />
      <p>내용</p>
      <TextInputUi
        :height="22"
        :content="propsContent"
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
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
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
  props: {
    title: { type: String, default: '없음1' },
    content: { type: String, default: '없음2' }
  },
  setup(props) { //state를 props로 받는 방법은 모르겠음
    const title = ref(null);
    const content = ref(null);
    


    const goHome = () => {      
      router.push('/board');
    }
    
    

    


    //TextInputUi 컴포넌트에 전달할 props 가공 
    const route = useRoute(); // routes params 받기용
    const router = useRouter(); //  uRL 이동용
    const state = route.params.id ? history.state : {}; //params는 내가 보낸 것도 아닌데 id가 왜 들어있는걸까
    const propsTitle = ref(state.title);
    const propsContent = ref(state.content);

 






    const save = ref('저장');
    const cancle = ref('취소');

    const saveText = () => {  //작성한 글을 저장하는 기능
      const newTitle = title.value.sendText();
      const newContent = content.value.sendText();
      let param = new URLSearchParams();
      param.append('title', newTitle);
      param.append('content', newContent);
      param.append('id', route.params.id); //신규 글 작성이면 id값이 undefined로 대입 됨
      const path = route.params.id ? '/test/update' : '/test/write';
      axios.post(path,param).then((res) => {
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
      route,
      router,
      saveText,
      propsTitle,
      propsContent,
    };
    
  },
});
</script>

<style scoped>
/* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
</style>
