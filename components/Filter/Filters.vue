<script>
import FilterItems from "@/components/Filter/FilterItems.vue";
export default {
    components: { FilterItems },
    props: {
        airlines: {
            type: Array,
        },
    },
    data() {
        return {
            tariffOptions: [
                {
                    title: "Только прямые",
                    has_meta: false,
                },
                {
                    title: "Только c багажом",
                    has_offers: false,
                },
                {
                    title: "Только возвращаемые",
                    refundable: false,
                },
            ],
            is_scrollable: true,
            loading: false,
            airlines_validating_code: [],
        };
    },
    methods: {
        setFilterList(code) {
            this.$emit("setFilterList", code);
        },
    },
};
</script>

<template>
    <div class="filter-list">
        <filter-items title="Опции тарифа" :items="tariffOptions" />
        <filter-items
            title="Авиакомпании"
            :items="airlines"
            :is_scrollable="is_scrollable"
            @setFilterList="setFilterList"
        />
        <p class="blue-text underline pointer font-12 mb-0">
            Сбросить все фильтры
        </p>
    </div>
</template>


<style lang="scss" scoped>
.filter-list {
    max-width: 240px;
    width: 100%;
}
</style>