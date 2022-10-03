<script>
import Filters from "../components/Filter/Filters.vue";
import Ticket from "../components/Ticket/Ticket.vue";
export default {
    components: { Filters, Ticket },
    data() {
        return {
            flights: [],
            loading: false,
            page: 1,
            limit: 10,
            count: null,
            airlines: [],
            validation_airlines_code: [],
        };
    },
    created() {
        this.getFlights();
        this.getAirlines();
        this.getPaginationCount();
    },
    // provide() {      //tried to use provide/inject, but it didn't work properly ;(
    //     return {
    //         onToggleListFunc: computed(() => this.onToggleList),
    //     };
    // },
    methods: {
        async getFlights() {
            try {
                this.loading = true;
                let params = {
                    _page: this.page,
                    _limit: this.limit,
                };
                this.flights = (
                    await this.$repositories.flights.flights({ params })
                ).data;
                this.flights.forEach((item) => {
                    item.itinerarie = item.itineraries[0][0];
                });
                console.log(this.flights);
            } catch (e) {
                console.error(e);
            } finally {
                this.loading = false;
            }
        },
        async getAirlines() {
            try {
                this.loading = true;
                this.airlines = Object.entries(
                    (await this.$repositories.airlines.airlines()).data
                ).map((item) => ({
                    code: item[0],
                    title: item[1],
                }));
            } catch (e) {
                console.error(e);
            } finally {
                this.loading = false;
            }
        },
        async getPaginationCount() {
            this.count =
                (await this.$repositories.flights.flights()).data.length /
                this.limit;
        },
        setFilterList(code) {
            if (this.validation_airlines_code.some((el) => el === code)) {
                // this.validation_airlines_code.filter((e) => );
            } else {
                this.validation_airlines_code.push(code);
            }
            console.log(this.validation_airlines_code);
        },
        goPrev() {
            this.page--;
            this.getFlights();
        },
        goNext() {
            this.page++;
            this.getFlights();
        },
        // onToggleList(item) {
        //     debugger;
        //     const hasItem = this.list.some((el) => el.code === item.code);
        //     if (hasItem) {
        //         this.list = this.list.filter((el) => el.code !== item.code);
        //     } else {
        //         this.list.push(item);
        //     }
        // },
    },
};
</script>

<template>
    <div class="tickets">
        <div class="d-flex">
            <filters :airlines="airlines" @setFilterList="setFilterList" />
            <ticket :flights="flights" />
        </div>
        <div>
            <svg width="22" height="22" @click="goPrev">
                <use href="@/assets/img/icons.svg#chevron-left"></use>
            </svg>
            <v-pagination
                color="#359866"
                @input="getFlights"
                v-model="page"
                :total-visible="7"
                class="pagination"
                :length="count"
            ></v-pagination>
            <svg width="22" height="22" @click="goNext">
                <use href="@/assets/img/icons.svg#chevron-right"></use>
            </svg>
        </div>
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
.tickets {
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    padding: 0 16px;
}
</style>