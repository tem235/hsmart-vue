<template>
    <div class="shortcuts">
        <p class="shortcuts__title">Shortcuts</p>
        <div class="shortcuts__btn shortcuts__btn--pink">
            <img src="../assets/icons/wi-fi.svg" alt="">
            <p>WI-FI</p>
        </div>
        <div class="shortcuts__btn shortcuts__btn--blue">
            <img src="../assets/icons/music.svg" alt="">
            <p>Music</p>
        </div>
        <div class="shortcuts__btn shortcuts__btn--dark">
            <img src="../assets/icons/intercom.svg" alt="">
            <p>Intercom</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Shortcuts"
    }
</script>

<style lang="scss">
    @import "../assets/scss/colors";
    .shortcuts {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .shortcuts__title {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.09em;
        color: #717489;
        margin-bottom: 20px;
    }

    .shortcuts__btn {
        width: 140px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        margin-bottom: 15px;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.09em;
        color: #FFFFFF;

        img {
            margin-right: 22px;
        }

        &:hover {
            cursor: pointer;
        }
    }

    .shortcuts__btn--pink {
        background: $pink;
    }

    .shortcuts__btn--blue {
        background: $blue;
    }

    .shortcuts__btn--dark {
        background: $dark-blue;
    }
</style>