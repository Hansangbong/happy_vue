<template>
    <div :class="wrapperClass">
      <CommentListItem
        v-for="post in comments"
        :key="post.id"
        :post="post"
      />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { css } from '@emotion/css';
  import CommentListItem from './CommentListItem.vue'; // 경로를 실제 경로로 변경하세요
  
  export default defineComponent({
    name: 'CommentList',
    props: {
      comments: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
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
      console.log("뷰에서받은 props입니다 : ",props.comments);
      return {
        wrapperClass,
      };
    },
    components:{CommentListItem},
  });
  </script>
  
  <style>
  /* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
  </style>
  