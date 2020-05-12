<template>
    <div class="c">
        <p class="c__title">Outdoor Temperature</p>

        <div class="outdoor-temperature">
            <p>+21.3°C</p>
            <img src="../assets/icons/temp.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Temperature"
    }
</script>

<style lang="scss">
    .outdoor-temperature {
        display: flex;
        align-items: center;
        font-size: 40px;
        line-height: 48px;
        color: #565A72;

        p {
            margin-right: 40px;
        }
    }
</style>