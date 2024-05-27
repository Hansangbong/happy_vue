<template>
    <div>
        <p class="Location">
            <span class="btn_nav bold">시설 관리</span>
            <span class="btn_nav bold"> 강의실</span>
        </p>
        <p class="conTitle">
            <span class="conNm">강의실</span>
            <span class="fr">
                <span>강의실 명 </span>
                <input type="text" class="lecure-name" />
                <button class="btn btn-light btn-sm" @click="$router.push('write')">강의실 신규등록</button>
                <button class="btn btn-secondary btn-sm">검색</button>
            </span>
        </p>
        <div>
            <b> 총건수 : 0 현재 페이지 번호 : 0 </b>
        </div>
        <div class="row"></div>
            <CardLecture v-for="(data) in dataList" :key="data.lecrm_id" :data="data"/>
    </div>
    <pagination v-bind="{currentPage, totalItems: total, itemsPerPage: 6}" @search="searchLecture($event)"/>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, reactive } from 'vue'; //하나만 쓸 때도 중괄호 써줘야 에러 안 남
import CardLecture from './CardLecture.vue';
import { axiosAction } from '.';
import { SamplePage5 } from '@/api/api';


const dataList = ref([]);  //배열이나 오브젝트만 가능
const dataList2 = reactive([]); // 다 담기 가능
const total = ref(0); // 목차 만들기
const currentPage = ref(0);


const searchLecture = async (cpage) => {
    cpage = cpage || 1;
    let param = new URLSearchParams();
    param.append('cpage', cpage);
    param.append('pagesize', 6);

    // axios.post('/adm/lectureRoomListjson.do', param).
    //     then((res) => { 
    //         dataList.value = res.data.listdata;
    //         total.value = res.data.listcnt;
    //         currentPage.value = res.data.cpage;
    //     });
    const lectureList = await axiosAction(SamplePage5.LectureRoomList, param);

    if (lectureList) {
            dataList.value = lectureList.listdata;
            total.value = lectureList.listcnt;
            currentPage.value = cpage;
    }
};

onMounted(() => { //onMounted
    searchLecture();
});
</script>

<style>
.lecure-name {
    height: 30px;
    border-radius: 5px;
}

.btn-sm {
    margin-left: 10px;
}
</style>
