<template>
    <textarea
        :class="textareaClass"
        :style="{ height: height ? height + 'px' : 'auto' }"
        :value="value"
        @input="onChange"
    />
</template>

<script>
import { defineComponent } from 'vue';
import { css } from "@emotion/css";

export default defineComponent({
    name: 'TextInputUI',
    props: {
        height: {
            type: Number,
            default: null,
        },
        value:{
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

        return {
            textareaClass,
        };
    },
    

});

</script>


<style>
</style>