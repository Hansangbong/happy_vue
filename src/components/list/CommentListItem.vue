<template>
    <div :class="wrapperClass">
      <p :class="ContextTextClass">{{ post.c }}</p>
      <button :class="buttonClass" @click="deleteCMT">삭제</button>    
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { css } from '@emotion/css';
  import ButtonUi from '../ui/ButtonUi.vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'CommentListItem',
    props: {
      post: { //post.c는 댓글
        type: Object,
        required: true,
      },
      postId: {
        type: Object,
        required: true,
      }
    },
    components: {
      ButtonUi
    },
    setup(props, context) {


      
      const cmtId = ref('');
      cmtId.value = props.postId.i;  //댓글의 고유 id 저장

      const deleteCMT = () => {
        let params = new URLSearchParams();
        params.append('comment_id', cmtId.value);
        axios.post('/test/deleteCMT', params).then((res) => {
          console.log('삭제됐습니다');
          context.emit('deleteSuccess');
        })
      }

    




















      const wrapperClass = css`
        width: calc(100% - 32px);
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border: 1px solid grey;
        border-radius: 8px;
        background: white;
        position: relative;
  
        &:hover {
          background: lightgrey;
        }
      `;
  
      const ContextTextClass = css`
        font-size: 16px;
        white-space: pre-wrap;
      `;

      const buttonClass = css`
      position: absolute;
      bottom: 9px;
      right: 9px;`;

      return {
        wrapperClass,
        ContextTextClass,
        buttonClass,
        cmtId,
        deleteCMT
      };
    },
  });
  </script>
  
  <style>
  /* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
  </style>