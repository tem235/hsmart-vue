<template>
    <div class="page">
        <h1 class="page_title">Utility Billing</h1>
        <div class="page-row">
            <InvoiceHistory/>
            <InvoiceCurrent/>
        </div>
        <div class="page-row">

        </div>
    </div>
</template>

<script>
    import InvoiceHistory from "../components/InvoiceHistory";
    import InvoiceCurrent from "../components/InvoiceCurrent";
    export default {
        name: "Billing",
        components: {InvoiceCurrent, InvoiceHistory}
    }
</script>

<style scoped>

</style>