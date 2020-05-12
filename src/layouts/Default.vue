<template>
    <div class="default">
        <div class="default__sidenav">
            <Sidenav/>
        </div>

        <div class="default__content">
            <Header/>
            <slot/>

        </div>
    </div>
</template>

<script>
    import Sidenav from "../components/Sidenav";
    import Header from "../components/Header";

    export default {
        name: "layout",
        components: {Header, Sidenav}
    }
</script>

<style lang="scss">
    .default {
        display: flex;
    }

    .default__sidenav {
        position: fixed;
        height: 100%;
    }

    .default__content {
        width: 100%;
        margin-left: 100px;
        padding: 0 85px 30px 65px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }


</style>