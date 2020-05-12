<template>
    <div class="page-wrap">
        <div class="page page--rooms">
            <h1 class="page_title">Rooms</h1>
            <div class="page-row">
                <RoomParameter
                        :name="'Room’s Temperature'"
                        :value="'+23.5°C'"
                        :img="require('../assets/icons/temperature-light.svg')"
                        :color="'#EE777F'"
                />
                <RoomParameter
                        :name="'Room’s Humidity'"
                        :value="'40%'"
                        :img="require('../assets/icons/drop.svg')"
                        :color="'#65BDC0'"
                />
                <RoomParameter
                        :name="'Room’s Lightning'"
                        :value="'86%'"
                        :img="require('../assets/icons/sun.svg')"
                        :color="'#1D2343'"
                />
            </div>

            <div class="page-row">
                <Devices/>
            </div>
        </div>
        <RoomsComponent/>
    </div>
</template>

<script>
    import Devices from "../components/Devices";
    import RoomsComponent from "../components/RoomsComponent";
    import RoomParameter from "../components/RoomParameter";

    export default {
        name: "Rooms",
        components: {RoomParameter, RoomsComponent, Devices}
    }
</script>

<style lang="scss">
    .page-wrap {
        display: flex;
    }

    .page--rooms {
        margin-right: 65px;
    }
</style>