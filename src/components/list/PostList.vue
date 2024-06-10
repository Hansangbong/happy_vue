<template>
    <div :class="wrapperClass">
      <PostListItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @click="() => onClickItem(post)"
      />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { css } from '@emotion/css';
  import PostListItem from './PostListItem.vue'; // 경로를 실제 경로로 변경하세요
  
  export default defineComponent({
    name: 'PostList',
    props: {
      posts: {
        type: Array,
        required: true,
      },
      onClickItem: {
        type: Function,
        default: () => {},
      },
    },
    setup() {
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
        wrapperClass,
      };
    },
  });
  </script>
  
  <style>
  /* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
  </style>
  