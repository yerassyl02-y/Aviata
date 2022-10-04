<script>
export default {
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
    async created() {
        await this.getFlights();
        await this.getAirlines();
        await this.getCountOfFlights();
    },
    // provide() {      //tried to use provide/inject, but it didn't work properly ;(
    //     return {
    //         onToggleListFunc: computed(() => this.onToggleList),
    //     };
    // },
    methods: {
        async getCountOfFlights() {
            try {
                this.count =
                    (await this.$repositories.flights.flights()).data.length /
                    this.flights.length;
            } catch (e) {
                console.error(e);
            }
        },
        async getFlights() {
            try {
                console.log(this.validation_airlines_code);
                this.loading = true;
                let params = {
                    validating_carrier: this.validation_airlines_code,
                    _page: this.page,
                    _limit: this.limit,
                };
                let flights = (
                    await this.$repositories.flights.flights({ params })
                ).data;
                flights.forEach((item) => {
                    item.itinerarie = item.itineraries[0][0];
                });
                this.flights = flights;
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
                    checkbox: false,
                }));
            } catch (e) {
                console.error(e);
            } finally {
                this.loading = false;
            }
        },
        async getPaginationCount() {
            let params = {
                validating_carrier: this.validation_airlines_code,
            };
            this.count = Math.ceil(
                (await this.$repositories.flights.flights({ params })).data
                    .length / this.limit
            );
            console.log(this.count);
        },
        setFilterList(item) {
            item.checkbox = !item.checkbox;
            if (item.checkbox) {
                if (!this.validation_airlines_code.includes(item.code))
                    this.validation_airlines_code.push(item.code);
            } else {
                this.validation_airlines_code =
                    this.validation_airlines_code.filter(
                        (code) => code != item.code
                    );
            }
            this.getFlights();
            this.getPaginationCount();
        },
        resetAirlinesList() {
            this.validation_airlines_code = [];
            this.getFlights();
            this.getPaginationCount();
            this.airlines.forEach((item) => (item.checkbox = false));
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
        <div class="d-flex tickets__container">
            <FilterFilters
                :airlines="airlines"
                @setFilterList="setFilterList"
                @resetAirlinesList="resetAirlinesList"
            />
            <Ticket :flights="flights" />
        </div>
        <div>
            <svg width="22" height="22" @click="goPrev">
                <use href="@/assets/img/icons.svg#chevron-left"></use>
            </svg>
            <v-pagination
                color="#359866"
                @input="getFlights"
                v-model="page"
                :total-visible="5"
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
@media screen and (max-width: 990px) {
    .tickets {
        &__container {
            flex-direction: column;
        }
    }
}
</style>