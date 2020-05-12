<template>
    <header class="header">
        <input class="header__search" type="text" placeholder="Search">
        <button class="header__btn"><img src="../assets/icons/header/gear.svg" alt=""></button>
        <button class="header__btn"><img src="../assets/icons/header/bell.svg" alt=""></button>
        <button class="header__btn"><img src="../assets/icons/header/user.svg" alt=""></button>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 25px;
    }

    .header__search {
        width: 175px;
        height: 35px;
        font-size: 15px;
        line-height: 18px;
        border: 2px solid #C2C2C2;
        box-sizing: border-box;
        border-radius: 30px;
        padding-left: 20px;
        margin-right: 55px;
    }

    .header__btn {
        background: transparent;
        border: none;
        margin-left: 18px;

        &:hover {
            cursor: pointer;
        }
    }
</style>