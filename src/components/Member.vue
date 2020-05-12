<template>
    <div class="member">
        <div class="member-top member-top--pink">
            <img class="member-top__img" src="../assets/icons/user-white-big.svg" alt="">
            <p class="member-top__name">Annie Gulberg</p>
            <p class="member-top__owner">Owner</p>
        </div>
        <div class="member-bottom">
            <p class="member-bottom__status">Status: At home</p>
            <p class="member-bottom__room">Bedroom 1</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Member"
    }
</script>

<style lang="scss">
    @import "../assets/scss/colors";

    .member {
        height: 315px;
        width: 250px;
        border-radius: 40px;
        overflow: hidden;
        margin: 0 45px 35px 0;
        box-shadow: 0 4px 27px rgba(0, 0, 0, 0.1);
    }

    .member-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 210px;
        color: #FFFFFF;

        &--pink{
            background: $pink;
        }
    }

    .member-top__img {
        margin-bottom: 20px;
    }

    .member-top__name {
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.09em;
        margin-bottom: 10px;
    }

    .member-top__owner{
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.09em;
    }

    .member-bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 105px;
        padding: 25px;
        background: #FFF5F5;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.09em;
        color: rgba(29, 35, 67, 0.75);
    }

    .member-bottom__status {
        margin-bottom: 15px;
    }
</style>