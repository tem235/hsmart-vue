<template>
    <div class="sidenav">
        <router-link class="sidenav__logo" to="/">
            <img src="../assets/icons/logo.png" alt="">
        </router-link>

        <ul class="sidenav__links">
            <li class="sidenav-link-wrap">
                <router-link class="sidenav__link sidenav-link" to="/rooms">
                    <img class="sidenav-link__img" src="../assets/icons/home.svg" alt="">
                    Rooms
                </router-link>
            </li>
            <li class="sidenav-link-wrap">
                <router-link class="sidenav__link sidenav-link" to="/">
                    <img class="sidenav-link__img" src="../assets/icons/lock.svg" alt="">
                    Security
                </router-link>
            </li>
            <li class="sidenav-link-wrap">
                <router-link class="sidenav__link sidenav-link" to="/statistics">
                    <img class="sidenav-link__img" src="../assets/icons/statistics.svg" alt="">
                    Statistics
                </router-link>
            </li>
            <li class="sidenav-link-wrap">
                <router-link class="sidenav__link sidenav-link" to="/members">
                    <img class="sidenav-link__img" src="../assets/icons/members.svg" alt="">
                    Members
                </router-link>
            </li>
            <li class="sidenav-link-wrap">
                <router-link class="sidenav__link sidenav-link" to="/billing">
                    <img class="sidenav-link__img" src="../assets/icons/billing.svg" alt="">
                    Billing
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidenav"
    }
</script>

<style lang="scss">
    @import '../assets/scss/colors';

    .sidenav {
        height: 100vh;
        width: 100px;
        padding: 35px 15px 35px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: $blue;
        box-sizing: border-box;
    }

    .sidenav__logo {
        margin-bottom: 30px;
    }

    .sidenav__links {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .sidenav-link-wrap {
        margin-bottom: 40px;
    }

    .sidenav-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 15px;
        line-height: 18px;
        color: #C9E2E3;
        text-decoration: none;

        &:hover {
            color: #FFF5F5;
        }
    }

    .sidenav-link__img {
        margin-bottom: 15px;
    }


</style>