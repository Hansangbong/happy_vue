<template>
    <textarea
        :class="textareaClass"
        :style="{ height: height ? height + 'px' : 'auto' }"
        v-model="newText"
    />
</template>

<script>
import { ref, defineComponent } from 'vue';
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
        onChange: {
            type: Function,
            default: () => {}
        }
    },
    setup(props){
        const textareaClass = css`
        width: calc(100% - 32px);
        padding: 16px;
        font-size: 16px;
        line-height: 20px;
        `;




        const newText = ref('');
        
        const sendText = () => {
            return newText.value;
        }

        return {
            textareaClass,newText, sendText,
        };
    },
    

});

</script>


<style>
</style>