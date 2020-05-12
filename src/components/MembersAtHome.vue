<template>
    <div class="c">
        <p class="c__title">Members at home:</p>
        <div class="member-list">
            <div class="member-item">
                <img src="../assets/icons/user-blue.svg" alt="">
                <p>Annie</p>
            </div>
            <div class="member-item">
                <img src="../assets/icons/user-red.svg" alt="">
                <p>John</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MembersAtHome"
    }
</script>

<style lang="scss">
    .member-list {
        display: flex;
    }

    .member-item {
        margin-right: 20px;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.09em;
        color: #717489;

        img {
            margin-bottom: 10px;
        }
    }
</style>