<script setup lang='ts'>
const props = defineProps<{
    isOpen?: boolean
}>()
</script>
<template>
<div class="hamburger" :class="{'open': isOpen}">
<span class="hamburger__line one"></span>
<span class="hamburger__line two" ></span>
<span class="hamburger__line three"></span>
</div>
</template>
<style scoped lang='scss'>
.hamburger {
    
    position: relative;
    width: 18px;
    height: 12px;
    cursor: pointer;
    &:hover .hamburger__line {
            background-color: $icon-hover;
        }
    &:active .hamburger__line {
            background-color: $icon-click;
        }
    &__line {
        width: 100%;
        height: 2px;
        background-color: $tertiary;
        position: absolute;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: all 0.25s ease-in-out;
        

    }
}
.one {
    top: 0;
}
.two {
    top: 5px;
}
.three {
    bottom: 0;
}
.open .one {
transform: rotate(135deg);
top: 5px;
}
.open .two {
left: -60px;
opacity: 0;
}
.open .three {
    transform: rotate(-135deg);
    bottom: 5px;
}
</style>