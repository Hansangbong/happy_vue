<template>
    <button :class="buttonClass" @click="onClick">{{ title  }}</button>
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
            default: '디폴트버튼'
         },
         onClick: {
             type: Function,
            required: false,
        },
     },
    setup() {
      
        const buttonText = ref('Click me');

        return { buttonText,buttonClass };
    }

}

</script>

<style>
</style>