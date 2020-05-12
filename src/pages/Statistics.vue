<template>
    <div class="page">
        <h1 class="page_title">Statistics</h1>
        <div class="page-row">
            <LineChartComponent/>
            <LineChartComponent/>
        </div>
        <div class="page-row">
            <LineChartComponent/>
            <DoughnutChartComponent/>
        </div>
    </div>
</template>

<script>
    import LineChartComponent from "../components/LineChartComponent";
    import DoughnutChartComponent from "../components/DoughnutChartComponent";

    export default {
        name: "Statistics",
        components: {DoughnutChartComponent, LineChartComponent}
    }
</script>

<style scoped>

</style>