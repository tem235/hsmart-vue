<template>
    <div class="c">
        <div class="parameter">
            <div class="parameter-left">
                <p class="parameter-left__name">{{name}}</p>
                <p class="parameter-left__value">{{value}}</p>
            </div>
            <div class="parameter-right">
                <div class="parameter-scale">
                    <div class="parameter-scale__top"></div>
                    <div class="parameter-scale__bottom" :style="{background: color}">
                        <img :src="img" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RoomParameter",
        props:{
            name:String,
            value:String,
            img:String,
            color:String,

    },
    }
</script>

<style lang="scss">
    .parameter {
        display: flex;
    }

    .parameter-left{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
    }

    .parameter-left__name {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.09em;
        color: rgba(29, 35, 67, 0.63);
        margin-bottom: 15px;
        text-align: start;
    }

    .parameter-left__value {
        font-size: 36px;
        line-height: 43px;
        letter-spacing: 0.03em;
        color: rgba(29, 35, 67, 0.75);

    }

    .parameter-right {
        display: flex;
        justify-content: flex-end;
        flex: 1;
    }

    .parameter-scale {
        position: relative;
        width: 75px;
        height: 175px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px -6px 60px rgba(29, 35, 67, 0.14);
        border-radius: 25px;
        overflow: hidden;

        img {
            position: absolute;
            bottom: 20px;
            left: auto;
            right: auto;
            z-index: 3;
        }
    }

    .parameter-scale__top {
        height: 30%;

    }

    .parameter-scale__bottom {
        height: 70%;


    }

</style>