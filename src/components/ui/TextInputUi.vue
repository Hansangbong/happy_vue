<template>
    <textarea
        :class="textareaClass"
        :style="{ height: height ? height + 'px' : 'auto' }"
        v-model="newText"
    />
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue';
import { css } from "@emotion/css";

export default defineComponent({
    name: 'TextInputUI',
    props: {
        height: {
            type: Number,
            default: null,
        },
        title:{
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    },
    setup(props){
       
        const newText = ref(''); //const 타입이지만 value 속성은 변경이 가능함

        if (props.title != '') {
            newText.value = props.title;
        } 
        else if (props.content != '') {
            newText.value = props.content;
        }
        




        

        
        
        const sendText = () => {
            return newText.value;
        }

        const clearText = () => {
            newText.value = '';
            blur();
        }





         const textareaClass = css`
        width: calc(100% - 32px);
        padding: 16px;
        font-size: 16px;
        line-height: 20px;
        `;

        return {
            textareaClass,newText, sendText, clearText
        };
    },
});

</script>


<style>
</style>