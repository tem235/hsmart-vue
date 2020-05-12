<script>
    import {Doughnut} from 'vue-chartjs'

    export default {
        extends: Doughnut,
        props: ['chartData', 'options'],
        data() {
            return {
                datacollection: {
                    labels: ['Paper', 'Glass', 'Plastic'],
                    datasets: [
                        {
                            label: 'Devices',
                            backgroundColor: ['#EE777F', '#65BDC0', '#1D2343'],
                            data: [12, 20, 12]
                        }
                    ]
                }

            }
        },
        mounted() {
            this.renderChart(this.datacollection, this.options)
        }
    };
</script>
