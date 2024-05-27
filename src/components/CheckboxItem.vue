<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{ id }} - {{ name }}
    </li>
</template>

<script>
    export default {
        name: "CheckboxItem",
        props: {
            id: [Number, String], // 두 타입 중 아무거나 사용 가능
            name: String,
            checked: {
                type: Boolean,
                required: false, //필수 입력 속성이 아니게 설정
                default: false  //입력 값이 없으면 false로 자동 설정 됨
            }
        }
    }
</script>