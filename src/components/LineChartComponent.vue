<template>
    <div class="c-wrap">
        <p class="c-wrap__title"></p>
        <div class="c">
            <line-chart :width="500" :height="350"/>
        </div>
    </div>
</template>

<script>
    import LineChart from "./LineChart";
    export default {
        name: "LineChartComponent",
        components: {LineChart},
    }
</script>

<style lang="scss">
</style>