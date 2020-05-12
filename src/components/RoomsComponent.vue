<template>
    <div class="rooms">
        <div class="rooms__item">
            <img src="../assets/icons/rooms/badroom.svg" alt="">
            <p>Bedroom</p>
        </div>
        <div class="rooms__item rooms__item--active">
            <img src="../assets/icons/rooms/kitchen.svg" alt="">
            <p>Kitchen</p>
        </div>
        <div class="rooms__item">
            <img src="../assets/icons/rooms/living.svg" alt="">
            <p>Living Room</p>
        </div>
        <div class="rooms__item">
            <img src="../assets/icons/rooms/bathroom.svg" alt="">
            <p>Bathroom</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RoomsComponent"
    }
</script>

<style lang="scss">
    @import "../assets/scss/colors";
    .rooms {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .rooms__item {
        height: 150px;
        width: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        box-shadow: 0 4px 36px rgba(0, 0, 0, 0.18);
        border-radius: 30px;
        margin-bottom: 30px;
        font-size: 19px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.09em;
        color: #A3A3A3;

        img {
            margin-bottom: 20px;
        }

        &:hover, &--active {
            cursor: pointer;
            color: $pink;
            box-shadow: 0px 4px 36px rgba(238, 119, 127, 0.31);
        }
    }
</style>