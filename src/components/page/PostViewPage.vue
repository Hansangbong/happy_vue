<template>
  <div :class="wrapperClass">
    <div :class="containerClass">
      <ButtonUi
        title="뒤로 가기"
        @click="navigateToHome"
      />
      <div :class="postContainerClass">
        <p :class="titleTextClass">{{ data.title }}</p>
        <p :class="contentTextClass">{{ data.content }}</p>
      </div>
      <span style="display: flex; justify-content: flex-end;">
        <ButtonUi title="게시글 수정" :onClick="goUpdate" style="margin-right: 10px;"/>
        <ButtonUi title="게시글 삭제" :onClick="deleteAPI"/>
      </span>


      <br/><br/><br/>
      <p :class="commentLabelClass">댓글</p>      <!-- 댓글 출력 부분-->
      <hr>
      <CommentList :comments="comment" :cmtIds="cmtId" @uptodateSuccess="detailAPI"/>

      <TextInputUi
        :height="40"
        ref="childCMT"
      />
      <ButtonUi
        title="댓글 저장"
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
import posts from '@/components/list/posts.json';
import axios from 'axios';

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
    const postId = route.params.id;





    
    const data = ref([]); // 게시글의 제목과 내용을 받을 변수
    const comment = ref([]); // 게시글의 댓글을 받을 변수
    const cmtId = ref([]); // 게시글의 댓글의 아이디를 받을 변수
    //const post = posts.find((item) => item.id == postId);  //조건에 맞는 json 객체를 찾아서 초기화.

    const detailAPI = () => {       //게시글 클릭 시 글 내용 보기
      let params = new URLSearchParams();
      params.append('id', postId);
      axios.post('/test/detail', params).then((res) => {
        data.value = res.data[0];
        comment.value = JSON.parse(data.value.comment);
        cmtId.value = JSON.parse(data.value.cmtid);
       
      });
    }

    const deleteAPI = () => {   //게시글 삭제 기능
      let params = new URLSearchParams();
      params.append('id', postId);
      axios.post('/test/delete', params).then((res) => {
        navigateToHome();
      })
    }

    const goUpdate = () => {             //PostWritePage 로 이동
      router.push({
        path: `/post-edit/${postId}`,
        state: { title: data.value.title, content:data.value.content},
      });
    }

    



    




    const childCMT = ref([]);  // 댓글이 입력되는 TextInputUI 컴포넌트를 참조하기 위한 변수

    const submitComment = () => {//댓글 저장 버튼 실행
       let params = new URLSearchParams();
       const comt = childCMT.value.sendText();
       params.append('comment', comt);
       params.append('id', postId);
       axios.post('/test/comment_insert', params).then((res => {
         detailAPI();
         childCMT.value.clearText();
       }))
    };







    const navigateToHome = () => { //뒤로가기 버튼 실행
        router.push('/board');
    };








    //CSS 클래스 선언
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
      comment,
      navigateToHome,
      submitComment,
      wrapperClass,
      containerClass,
      postContainerClass,
      titleTextClass,
      contentTextClass,
      commentLabelClass,
      posts,
      detailAPI,
      data,
      deleteAPI,
      goUpdate,
      childCMT,
      cmtId
    };
  },
  mounted() {
    this.detailAPI();

  },
});
</script>

<style scoped>
/* 필요에 따라 글로벌 스타일을 추가할 수 있습니다 */
</style>
