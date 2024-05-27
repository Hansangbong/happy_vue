<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{ idol.name }} 83
    </li>
</template>

<script>
    import Idol from '../../HSB/idol';
    export default {
        name: "CheckboxItem",
        props: {
            idol: Idol,
          
        },
    }
</script>