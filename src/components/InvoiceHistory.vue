<template>
    <div class="c-wrap">
        <p class="c-wrap__title">Invoice History</p>
        <div class="c">
            <table class="invoice-history">
                <thead>
                <th>Number</th>
                <th>Category</th>
                <th>Month</th>
                <th>Due Date</th>
                <th>Amount Due</th>
                <th>Status</th>
                </thead>
                <tbody>
                <tr>
                    <td>000245</td>
                    <td>Water</td>
                    <td>March</td>
                    <td>04/15/2020</td>
                    <td>$56.78</td>
                    <td>
                        <div class="invoice-history__status invoice-history__status--unpaid">
                            <p>Unpaid</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>000244</td>
                    <td>Water</td>
                    <td>March</td>
                    <td>04/12/2020</td>
                    <td>$14.99</td>
                    <td>
                        <div class="invoice-history__status invoice-history__status--unpaid">
                            <p>Unpaid</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>000243</td>
                    <td>Electricity</td>
                    <td>March</td>
                    <td>04/06/2020</td>
                    <td>$86.98</td>
                    <td>
                        <div class="invoice-history__status invoice-history__status--paid">
                            <p>Paid</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>000242</td>
                    <td>Water</td>
                    <td>February</td>
                    <td>03/15/2020</td>
                    <td>$53.78</td>
                    <td>
                        <div class="invoice-history__status invoice-history__status--paid">
                            <p>Paid</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>000241</td>
                    <td>Water</td>
                    <td>February</td>
                    <td>03/15/2020</td>
                    <td>$13.98</td>
                    <td>
                        <div class="invoice-history__status invoice-history__status--paid">
                            <p>Paid</p>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InvoiceHistory"
    }
</script>

<style lang="scss">
    .invoice-history {
        width: 690px;
        border-collapse: collapse;

        thead {
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0.09em;
            color: rgba(29, 35, 67, 0.47);

            th {
                height: 30px;
            }
        }

        tr {
            height: 50px;
            border-top: 1px solid #DDDDDD;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0.09em;
            color: rgba(29, 35, 67, 0.71);

            &:last-child {
                border-bottom: 1px solid #DDDDDD;
            }
        }
    }

    .invoice-history__status {
        border-radius: 16px;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.09em;
        color: rgba(29, 35, 67, 0.71);
        padding: 7px 0;

        &--unpaid{
            background: rgba(238, 119, 127, 0.46);
        }

        &--paid{
            background: rgba(101, 189, 192, 0.51);
        }
    }
</style>