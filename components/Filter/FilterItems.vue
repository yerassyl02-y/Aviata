<script>
export default {
    name: "FilterItems",
    props: {
        title: {
            type: String,
        },
        items: {
            type: Array,
        },
        height: {
            type: String,
        },
        is_scrollable: {
            type: Boolean,
        },
        data() {
            return {
                airlines_array: [],
            };
        },
    },
    // inject: ["onToggleListFunc"],
    methods: {
        setFilterList(item) {
            this.$emit("setFilterList", item);
        },
        hoverOnItem(item) {},
        hoverOut(item) {},
    },
};
</script>

<template>
    <div
        class="filter-items d-flex flex-column bg-gray radius-4"
        :class="{ scrollable: is_scrollable }"
    >
        <h3 class="filter-items__title">{{ title }}</h3>

        <div class="filter-items__block">
            <div
                class="d-flex align-center cursor-pointer py2"
                v-for="(item, idx) in items"
                :key="idx"
            >
                <label
                    class="filter-items__option cursor-pointer"
                    :for="`checkbox` + item.title"
                >
                    <input
                        type="checkbox"
                        :id="`checkbox` + item.title"
                        :checked="item.checkbox"
                        class="filter-items__checkbox"
                        :class="{ hovered: item.checkbox }"
                        @change="setFilterList(item)"
                        @mouseover="hoverOnItem(item)"
                    />
                    {{ item.title }}
                </label>
            </div>
        </div>
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="filter-items__close cursor-pointer"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"
            />
        </svg>
    </div>
</template>


<style lang="scss" scoped>
.filter-items {
    position: relative;

    width: 100%;
    padding: 12px;
    margin-bottom: 13px;

    label {
        display: flex;
        align-items: center;
    }
    &__block {
        overflow-y: scroll;
        margin-top: 12px;
    }

    &__checkbox {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        background-color: white;
        border: 1px solid #b9b9b9;
        accent-color: #55bb06;
        color: white;
        margin-right: 12px;
    }
    .hovered {
        display: inline-block;
        border: 2px solid #ebebeb !important;
        accent-color: #ebebeb;
    }
    &__close {
        position: absolute;
        top: 12px;
        right: 12px;
        fill: #b9b9b9;
        transition: 0.2s;

        &:hover {
            fill: #7284e4;
        }
    }
}
.scrollable {
    max-height: 320px;
}
.py2 {
    padding: 8px 0;
}
</style>