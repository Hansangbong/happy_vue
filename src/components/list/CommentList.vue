<template>
    <div :class="wrapperClass"> <!--댓글 수 많큼 반복하며 댓글 컴포넌트를 그려주기  -->
      <CommentListItem   
        v-for="(post, index) in comments"
        :key="index"
        :post="post"
        :postId="cmtIds[index]"
        @deleteSuccess="receiveSuccess"
      />
      
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { css } from '@emotion/css';
  import CommentListItem from './CommentListItem.vue';
  
  export default defineComponent({
    name: 'CommentList',
    props: {
      comments: {
        type: Array,
        required: true,
      },
      cmtIds: {
        type: Array,
        required: true,
      }
    },
    setup(props,context) {
      //console.log("props: ", props.cmtIds) 배열이라서 그런가 콘솔로 내용이 확인이 안됨;;

      const receiveSuccess = () => {
        context.emit('uptodateSuccess');
      }



      
      const wrapperClass = css`
        width: calc(100% - 32px);
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      `;

      

      return {
        wrapperClass,receiveSuccess
      };
    },
    components:{CommentListItem},
  });
  </script>
  
  <style>
  /* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
  </style>
  