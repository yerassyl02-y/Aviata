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
            tariff_options: [
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
        };
    },
    methods: {
        setFilterList(item) {
            this.$emit("setFilterList", item);
        },
        resetAirlinesList() {
            this.$emit("resetAirlinesList");
        },
    },
};
</script>

<template>
    <div class="filter-list">
        <filter-items title="Опции тарифа" :items="tariff_options" />
        <filter-items
            title="Авиакомпании"
            :items="airlines"
            :is_scrollable="is_scrollable"
            @setFilterList="setFilterList"
        />
        <button
            class="
                blue-button blue-text
                cursor-pointer
                font-12
                d-flex
                align-center
                justify-center
                mb-0
            "
            @click="resetAirlinesList"
        >
            Сбросить все фильтры
        </button>
    </div>
</template>


<style lang="scss" scoped>
.filter-list {
    max-width: 240px;
    width: 100%;

    .blue-button {
        font-family: "OpenSans-Regular";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        border-bottom: 1px dashed rgba(114, 132, 228, 0.5);
    }
}
@media screen and (max-width: 990px) {
    .filter-list {
        margin-bottom: 20px;
    }
}
</style>