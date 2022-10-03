<script>
import TicketInformation from "../Ticket/TicketInformation.vue";
import Itinerarie from "./Itinerarie.vue";
import PriceList from "./PriceList.vue";
import moment from "moment";
export default {
    components: { TicketInformation, Itinerarie, PriceList },
    props: {
        flights: {
            type: Array,
        },
    },
    data() {
        return {
            moment: moment,
            data: [],
            carrier_name: "",
        };
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
            v-for="item in flights"
            :key="item.id"
        >
            <div class="d-flex flex-column ticket-details">
                <itinerarie :item="item" />
                <ticket-information :item="item" />
            </div>
            <price-list :item="item" />
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