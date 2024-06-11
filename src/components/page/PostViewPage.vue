<template>
  <div :class="wrapperClass">
    <div :class="containerClass">
      <ButtonUi
        title="뒤로 가기"
        @click="navigateToHome"
      />
      <div :class="postContainerClass">
        <p :class="titleTextClass">{{ post.title }}</p>
        <p :class="contentTextClass">{{ post.content }}</p>
      </div>

      <p :class="commentLabelClass">댓글</p>
      <CommentList :comments="post.comments" />

      <TextInputUi
        :height="40"
        v-model="comment"
      />
      <ButtonUi
        title="댓글 작성하기"
        @click="submitComment"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { css } from '@emotion/css';
import CommentList from '../list/CommentList.vue';
import TextInputUi from '../ui/TextInputUi.vue';
import ButtonUi from '../ui/ButtonUi.vue';

export default defineComponent({
  name: 'Post',
  components: {
    CommentList,
    TextInputUi,
    ButtonUi,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const postId = route.params.postId;

    // Sample data for demonstration purposes
    const data = [
      { id: 1, title: 'Post 1', content: 'Content 1', comments: [] },
      { id: 2, title: 'Post 2', content: 'Content 2', comments: [] },
    ];

    const post = data.find((item) => item.id == postId);
    const comment = ref('');

    const navigateToHome = () => {
      router.push('/');
    };

    const submitComment = () => {
      // Add comment logic here
      console.log('Comment submitted:', comment.value);
      router.push('/');
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

    const postContainerClass = css`
      padding: 8px 16px;
      border: 1px solid grey;
      border-radius: 8px;
    `;

    const titleTextClass = css`
      font-size: 28px;
      font-weight: 500;
    `;

    const contentTextClass = css`
      font-size: 28px;
      line-height: 32px;
      white-space: pre-wrap;
    `;

    const commentLabelClass = css`
      font-size: 16px;
      font-weight: 500;
    `;

    return {
      post,
      comment,
      navigateToHome,
      submitComment,
      wrapperClass,
      containerClass,
      postContainerClass,
      titleTextClass,
      contentTextClass,
      commentLabelClass,
    };
  },
});
</script>

<style scoped>
/* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
</style>
