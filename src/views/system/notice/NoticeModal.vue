<template>
    <div>
        <teleport to="body">
            <div class="backdrop">
                <div class="container" style="width: 500px">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="conTitle">
                                    <span>상세정보</span>
                                </p>
                            </div>
                            <div class="modal-body">
                                <div class="input-group mb-3" >
                                    <span class="input-group-text">제목</span>
                                    <p v-show="false">{{ noticeData= this.selInfo }}</p>
                                    <input type="text" class="form-control" v-model="noticeData.notice_tit"   /> 
                                    <!-- v-model 디렉션으로 연결되었기 때문에 value 속성으로 직접 값으 변경할 수 없다. 초기값은 data에서 수정해야한다 -->
                                    {{ console.log("노틱스데이터를 봅시다:  ",noticeData) }}
                                    
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">로그인 아이디</span>
                                    <input type="text" class="form-control" disabled v-model="this.userInfo.loginId"/>
                                </div>
                                <div class="input-group mb-3" v-show="detailProps">
                                    <span class="input-group-text">작성자</span>
                                    <input type="text" class="form-control" disabled v-model="selInfo.name"/>
                                </div>
                                <div class="input-group mb-3" style="min-height: 200px">
                                    <span class="input-group-text">내용</span>
                                    <textarea style="resize: none" class="form-control" v-model="selInfo.notice_con"/>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" @click="insertNoticeDetail">등록</button>
                                <button type="button" class="btn btn-info">수정</button>
                                <button type="button" class="btn btn-info">삭제</button>
                                <button type="button" class="btn btn-light" @click="$emit('closeModal', false)">
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['functionProps', 'selInfo'],
    data() {
        return {
            noticeData: {}
            
        };
    },
    computed: {
        userInfo() {
            return this.$store.getters.getLoginInfo;
        },
    },
    methods: {
        insertNoticeDetail() {
            let param = new URLSearchParams();
            param.append('loginId', this.userInfo.loginId);
            param.append('notice_tit', this.noticeData.notice_tit);  //this.를 붙여줘야 접근이 된다...이유가 뭘까
            param.append('notice_con', this.noticeData.notice_con);

            axios.post('/notice/noticeSave.do', param).then((res) => {
                if (res.data.result === 'sucess') {
                    alert(res.data.msg);
                    this.$emit('closeModal', false);
                    this.getNoticeList();  //props로 전달받은 함수
                }
            });
        },
        deleteNoticeDetail() {
            let param = new URLSearchParams();
            param.append('notice_id', this.detailProps);
            axios.post('/notice/noticeDelete.do', param).then((res) => {
                if (res.data.success == true) {
                    alert(res.data.msg);
                    this.$emit('closeModal', false);
                    this.functionProps(this.emitProps);
                } else {
                    alert(res.data.msg);
                }
            });
        },
    }
};
</script>

<style>
.backdrop {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
}
.container {
    background: white;
    padding: 1.5rem;
    height: 70%;
}
</style>