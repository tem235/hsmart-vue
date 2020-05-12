<template>
    <div class="page">
        <h1 class="page_title">Welcome, Annie!</h1>
        <div class="page-row">
            <Time/>
            <OutdoorTemperature/>
            <MembersAtHome/>
        </div>
        <p class="page__subtitle">Controls:</p>

        <div class="page-row">
            <Temperature/>
            <Shortcuts/>
        </div>
    </div>
</template>

<script>
    import Time from "../components/Time";
    import OutdoorTemperature from "../components/OutdoorTemperature";
    import MembersAtHome from "../components/MembersAtHome";
    import Temperature from "../components/Temperature";
    import Shortcuts from "../components/Shortcuts";

    export default {
        name: "Home",
        components: {Shortcuts, Temperature, MembersAtHome, OutdoorTemperature, Time}
    }
</script>

<style lang="scss">

</style>