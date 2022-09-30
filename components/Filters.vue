<script>
import FilterItems from "./FilterItems.vue";
export default {
    components: { FilterItems },
    data() {
        return {
            tariffOptions: [
                "Только прямые",
                "Только с багажом",
                "Только возвратные",
            ],
            airlines: [],
        };
    },
    created() {
        this.getAirlines();
    },
    methods: {
        async getAirlines() {
            this.airlines = Object.values(
                (await this.$axios.get(`/airlines/`)).data
            );
            this.airlines.unshift("Все");
        },
    },
};
</script>

<template>
    <div class="filter-list">
        <filter-items
            title="Опции тарифа"
            :items="tariffOptions"
            margin="12px"
            items_margin="12px"
        />
        <filter-items
            title="Авиакомпании"
            :items="airlines"
            margin="13px"
            items_margin="16px"
            height="320px"
        />
        <p class="blue-text underline pointer fs12 mb-0">
            Сбросить все фильтры
        </p>
    </div>
</template>


<style lang="scss" scoped>
</style>