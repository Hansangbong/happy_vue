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
import { reactive, ref } from 'vue';
import PostList from '../list/PostList.vue';
import ButtonUi from '../ui/ButtonUi.vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';




export default {
    name: "Board",
    setup() {
        const posts = ref([]);
        const posts2 = reactive('');

        const requestAPI = () => {
            let param = new URLSearchParams();
            axios.get('/test', param).then((res) => {
                console.log("성공햇습니다!");
                posts.value = res.data;
            })
        };





        const title = ref("새 글");
        const route = useRoute(); // url을 통해 파라미터의 값을 넘겨 줄 때 사용
        const router = useRouter(); //  uRL 이동
        const goWrite = () => {
            router.push('/post-wirte');
        }
        

        
        return {
            posts, title, router, route, goWrite, requestAPI,posts2,
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
