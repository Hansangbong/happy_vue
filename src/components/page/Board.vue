<template>
    <div style="text-align: center;">
        <h1>게시판입니다</h1>
    </div>

    <div>
        <PostList  :posts="posts"/>
    </div>
    <div style="margin-left: 15px;">
        <ButtonUi :title="title" @click="goWrite"/>
    </div>


</template>

<script>
import { ref } from 'vue';
import PostList from '../list/PostList.vue';
import ButtonUi from '../ui/ButtonUi.vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';




export default {
    name: "Board",
    setup() {
        const posts = ref(
            [{ "title": "제목입니다", "id":1 }, { "title": "두 번째제목", "id":2 }, { "title": "테스트입니다" , "id":3},
                { "title": "TEST", "id":4 }, { "title": "오늘의 날씨" , "id":5}]
        );

        const requestAPI = () => {
            //const url = "https://todosvc.bmaster.kro.kr/todolist/gdhong"; //프록시에 주조 설정
            const url = "/api/todolist/gdhong"; // 프록시에 설정된 주소의 뒤에 붙여서 요청됨
            axios.get(url).then((response) => {
                console.log("# 응답객체 : ", response);
            });
        };





        const title = ref("새 글");
        const route = useRoute(); // url을 통해 파라미터의 값을 넘겨 줄 때 사용
        const router = useRouter(); //  uRL 이동
        const goWrite = () => {
            router.push('/post-wirte');
        }
        

        
        return {
            posts, title, router, route, goWrite, requestAPI,
        }
    },
    components: {
        PostList,ButtonUi
    },
    mounted() {
        this.requestAPI();
        console.log("마운티드발동, API 호출");
    }
}
</script>

<style scoped>

</style>
