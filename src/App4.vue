<template>
    안녕<br/>
    <ButtonUi v-model="x" /> <br/>
    <TextInputUi />
    
</template>


<script>
import ButtonUi from './components/ui/ButtonUi.vue';
import TextInputUi from './components/ui/TextInputUi.vue';
import { ref } from 'vue';
  
export default {

    setup(){
        const x = ref(10);

        return { x };
    },
    components: {
        ButtonUi, TextInputUi
    }
}
  </script>
  
  <style>
  
  </style>
  