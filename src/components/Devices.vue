<template>
    <div class="c-wrap">
        <p class="c-wrap__title">Devices</p>
        <div class="devices">
            <div class="device" v-for="device of devices" :key="device.id">
                <img :src="device.img" alt="">
                <p>{{device.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Devices",
        data() {
            return {
                devices: [
                    {
                        id: 0,
                        title: 'Fridge',
                        img: require('../assets/icons/devices/fridge.svg')
                    },
                    {
                        id: 1,
                        title: 'Kettle',
                        img: require('../assets/icons/devices/kettle.svg')
                    },
                    {
                        id: 2,
                        title: 'Stove',
                        img: require('../assets/icons/devices/stove.svg')
                    },
                    {
                        id: 3,
                        title: 'Dishwasher',
                        img: require('../assets/icons/devices/dishwasher.svg')
                    },
                    {
                        id: 4,
                        title: 'Multicooker',
                        img: require('../assets/icons/devices/multicooker.svg')

                    },
                    {
                        id: 5,
                        title: 'TV',
                        img: require('../assets/icons/devices/tv.svg')

                    },
                    {
                        id: 6,
                        title: 'Microwave',
                        img: require('../assets/icons/devices/microwave.svg')

                    },
                    {
                        id: 7,
                        title: 'Indoor Grill',
                        img: require('../assets/icons/devices/grill.svg')

                    },
                ],
            }
        },
    }
</script>

<style lang="scss">
    @import "../assets/scss/colors";

    .devices {
        display: flex;
        flex-wrap: wrap;
        max-width: 760px;
    }

    .device {
        width: 160px;
        height: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        font-size: 19px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.09em;
        color: #FFF5F5;
        margin: 0 35px 28px 0;

        img {
            margin-bottom: 15px;
        }

        &:nth-child(1n) {
            background: $pink;
        }

        &:nth-child(2n) {
            background: $blue;
        }

        &:nth-child(3n+3) {
            background: $dark-blue;
        }

        &:nth-child(4n+4) {
            margin-right: 0;
        }


    }
</style>