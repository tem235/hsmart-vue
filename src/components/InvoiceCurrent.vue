<template>
    <div class="c-wrap">
        <p class="c-wrap__title">Current Invoice</p>
        <div class="c">
            <div class="current-invoice">
                <div class="current-invoice-top">
                    <div class="current-invoice-top__item">
                        <p>Number</p>
                        <p>000244</p>
                    </div>
                    <div class="current-invoice-top__item">
                        <p>Due Date</p>
                        <p>04/12/2020</p>
                    </div>
                    <div class="current-invoice-top__item">
                        <p>Amount Due</p>
                        <p>$14.22</p>
                    </div>
                </div>
                <div class="current-invoice-bottom">
                    <div class="current-invoice-bottom__item">
                        <p>Tax</p>
                        <p>$1.849</p>
                    </div>
                    <div class="current-invoice-bottom__item">
                        <p>Total</p>
                        <p>$16.07</p>
                    </div>
                    <button>Pay</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InvoiceCurrent"
    }
</script>

<style lang="scss">
    .current-invoice {
        display: flex;
        flex-direction: column;
        width: 285px;
        height: 290px;
    }

    .current-invoice-top {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid rgba(0, 0, 0, 0.14);
        padding-top: 20px;

    }

    .current-invoice-top__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        p:first-child {
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.09em;
            color: rgba(29, 35, 67, 0.51);
        }

        p:last-child {
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.09em;
            color: rgba(29, 35, 67, 0.76);
        }
    }

    .current-invoice-bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0 0;

        button {
            width: 100px;
            height: 35px;
            background: #EE777F;
            border-radius: 21px;
            border: none;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.09em;
            color: #FFF5F5;
        }
    }

    .current-invoice-bottom__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 10px;

        p:first-child {
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.09em;
            color: rgba(29, 35, 67, 0.51);
            margin-right: 30px;
        }

        p:last-child {
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.09em;
            color: rgba(29, 35, 67, 0.76);
        }



    }
</style>