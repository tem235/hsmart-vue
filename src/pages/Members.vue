<template>
    <div class="page">
        <h1 class="page_title">Members</h1>

        <div class="page-row">
            <Member/>
        </div>
    </div>
</template>

<script>
    import Member from "../components/Member";
    export default {
        name: "Members",
        components: {Member}
    }
</script>

<style lang="scss">

</style>