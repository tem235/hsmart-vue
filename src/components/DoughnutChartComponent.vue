<template>
    <div class="c-wrap">
        <p class="c-wrap__title"></p>
        <div class="c">
            <DoughnutChart :width="200" :height="300" />
        </div>
    </div>
</template>

<script>
    import DoughnutChart from "./DoughnutChart";
    export default {
        name: "DoughnutChartComponent",
        components: {DoughnutChart}
    }
</script>

<style lang="scss">

</style>