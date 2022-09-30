<script>
import Filters from "../components/Filters.vue";
import TicketInformation from "../components/TicketInformation.vue";
export default {
    components: { Filters, TicketInformation },
    data() {
        return {
            data: [],
        };
    },
};
</script>

<template>
    <div class="tickets">
        <filters />
        <ticket-information />
    </div>
</template>


<style lang="scss" scoped>
.tickets {
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;
}
</style>