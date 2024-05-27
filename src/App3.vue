<template>
  <div>
    <h2> 관심있는 K-POP 가수?</h2>
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
  </div>
</template>


<script>
  import Idol from './HSB/idol';
  import CheckboxItem from './components/hsb_comp/CheckboxItem3.vue';

  export default {
    name: "App",
    components: { CheckboxItem },
    data() {
      return {
        idols : [
          new Idol(1,"BTS", true),
          new Idol(2,"Black Pink", false),
          new Idol(3,"EXO", false),
          new Idol(4,"ITZYS", true),
        ]
      }
    }
  }

</script>

<style>

</style>
