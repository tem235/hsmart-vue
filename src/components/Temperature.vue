<template>
    <div class="c">
        <p class="c__title">Temperature</p>

        <div class="temperature-scale">
            <div class="temperature-scale__top">
                <img src="../assets/icons/temperature.svg" alt="">
            </div>
            <div class="temperature-scale__bottom">
                <p>+23°C</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Temperature"
    }
</script>

<style lang="scss">
    @import "../assets/scss/colors";

    .temperature-scale {
        width: 85px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 0px -6px 60px rgba(29, 35, 67, 0.14);
    }

    .temperature-scale__top {
        height: 40%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
    }

    .temperature-scale__bottom {
        height: 60%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $pink;
        color: #FFFFFF;
        font-size: 20px;
        line-height: 24px;
    }

</style>