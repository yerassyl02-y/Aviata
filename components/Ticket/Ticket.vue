<script>
import TicketInformation from "../Ticket/TicketInformation.vue";
import Itinerarie from "./Itinerarie.vue";
import PriceList from "./PriceList.vue";
export default {
    components: { TicketInformation, Itinerarie, PriceList },
    data() {
        return {
            data: [],
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            this.data = (await this.$repositories.flights.flights()).data;
        },
    },
};
</script>

<template>
    <div class="d-flex flex-column main-container">
        <div
            class="
                main-ticket
                bg-white
                raius-4
                w-full
                d-flex
                justify-space-between
            "
            v-for="item in 4"
            :key="item"
        >
            <div class="d-flex flex-column ticket-details">
                <itinerarie />
                <ticket-information />
            </div>
            <price-list />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.main-container {
    max-width: 880px;
    width: 100%;
}
.main-ticket {
    height: fit-content;
    margin-left: 20px;
    padding-left: 12px;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    margin-bottom: 12px;
    width: 100%;

    &:last-of-type {
        margin-bottom: 0;
    }

    .ticket-details {
        max-width: 524px;
        width: 100%;
        padding-top: 28px;
        padding-bottom: 16px;
    }
}
</style>