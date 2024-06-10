<template>
    <div :class="wrapperClass" @click="onClick">
      <p :class="CommentTextClass">{{ post.comment }}</p>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { css } from '@emotion/css';
  
  export default defineComponent({
    name: 'CommentListItem',
    props: {
      post: {
        type: Object,
        required: true,
      },
      onClick: {
        type: Function,
        default: () => {},
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
        border: 1px solid grey;
        border-radius: 8px;
        cursor: pointer;
        background: white;
  
        &:hover {
          background: lightgrey;
        }
      `;
  
      const ContextTextClass = css`
        font-size: 16px;
        white-space: pre-wrap;
      `;
  
      return {
        wrapperClass,
        titleTextClass,
      };
    },
  });
  </script>
  
  <style>
  /* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
  </style>