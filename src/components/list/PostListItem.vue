<template>
    <div :class="wrapperClass" @click="onClick">
      <p :class="titleTextClass">{{ post.title }}</p>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { css } from '@emotion/css';
  
  export default defineComponent({
    name: 'PostListItem',
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
  
      const titleTextClass = css`
        font-size: 20px;
        font-weight: 500;
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