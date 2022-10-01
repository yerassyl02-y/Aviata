<script>
import Filters from "../components/Filter/Filters.vue";
import Ticket from "../components/Ticket/Ticket.vue";
export default {
    components: { Filters, Ticket },
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
        <ticket />
    </div>
</template>


<style lang="scss" scoped>
.tickets {
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;

    display: flex;
    padding: 0 16px;
}
</style>