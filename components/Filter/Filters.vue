<script>
import FilterItems from "@/components/Filter/FilterItems.vue";
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
            loading: false,
        };
    },
    created() {
        this.getAirlines();
    },
    methods: {
        async getAirlines() {
            try {
                this.loading = true;
                this.airlines = Object.values(
                    (await this.$repositories.airlines.airlines()).data
                );
                this.airlines.unshift("Все");
            } catch (e) {
                console.error(e);
            } finally {
                this.loading = false;
            }
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
        <v-overlay :value="loading" z-index="999999">
            <v-progress-circular
                :size="70"
                :width="7"
                color="#202123"
                indeterminate
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>


<style lang="scss" scoped>
.filter-list {
    max-width: 240px;
    width: 100%;
}
</style>