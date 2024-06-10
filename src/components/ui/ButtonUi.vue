<template>
    <button :class="buttonClass" @click="onClick">{{ title || "버튼"  }}</button>
</template>

<script>
import { ref } from 'vue';
import { css } from '@emotion/css';

const buttonClass = css`
      padding: 8px 16px;
      font-size: 16px;
      border-width: 1px;
      border-radius: 8px;
      cursor: pointer;
    `;

export default {
  
     name: 'ButtonUi',
     props: {
        title: {
            type: String,
            default: ''
        },
        onClick: {
            type: Function,
            default: () => {}
        }
     },
     components:{
        
     },

    setup(){
        const buttonText = ref('Click me');

        return { buttonText };
    }

}

</script>

<style>
</style>