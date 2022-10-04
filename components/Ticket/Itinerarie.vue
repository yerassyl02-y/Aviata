<script>
import moment from "moment";
export default {
    props: {
        item: {
            type: Object,
        },
    },
    data() {
        return {
            moment: moment,
        };
    },
    methods: {
        getEndDate(item) {
            return [
                this.moment(item.arr_date)
                    .locale("ru")
                    .format("ll")
                    .split("")
                    .splice(0, 6)
                    .join(""),
                this.moment(item.arr_date)
                    .locale("ru")
                    .format("llll")
                    .split("")
                    .splice(0, 2)
                    .join(""),
            ];
        },
        getStartDate(item) {
            return [
                this.moment(item.dep_date)
                    .locale("ru")
                    .format("ll")
                    .split("")
                    .splice(0, 6)
                    .join(""),
                this.moment(item.dep_date_date)
                    .locale("ru")
                    .format("llll")
                    .split("")
                    .splice(0, 2)
                    .join(""),
            ];
        },
        getTravelTime(item) {
            return (item.traveltime / 3600).toFixed(2);
        },
    },
};
</script>

<template>
    <div class="itinerarie d-flex align-center">
        <div v-for="(itinerary, index) in item.itineraries" :key="index">
            <div
                v-for="(itinerary_item, itinerary_index) in itinerary"
                :key="itinerary_index"
                class="itinerarie d-flex align-center"
            >
                <div class="itinerarie__company d-flex align-center">
                    <img
                        class="airline-image"
                        :src="`https://aviata.kz/static/airline-logos/80x80/${item.validating_carrier}.png`"
                    />
                    <h6 class="fw600">{{ item.itinerarie.carrier_name }}</h6>
                </div>
                <div class="itinerarie__details d-flex align-center">
                    <div class="time d-flex flex-column">
                        <p class="font-12">
                            {{ getStartDate(itinerary_item)[0] }},
                            {{ getStartDate(itinerary_item)[1] }}
                        </p>
                        <h4 class="fw600">
                            {{
                                moment(itinerary_item.dep_date)
                                    .locale("ru")
                                    .format("LT")
                            }}
                        </h4>
                    </div>
                    <div class="segments d-flex flex-column">
                        <div class="d-flex align-center justify-space-between">
                            <span>{{
                                itinerary_item.segments[0].origin_code
                            }}</span>
                            <p class="font-12">
                                {{ getTravelTime(itinerary_item) }}
                                м
                            </p>
                            <span>{{
                                itinerary_item.segments[
                                    itinerary_item.segments.length - 1
                                ].origin_code
                            }}</span>
                        </div>
                        <img
                            src="@/assets/img/Tickets/line.png"
                            class="border"
                        />
                        <p class="font-12 orange-text text-center">
                            через Шымкент, 1 ч 50 м
                        </p>
                    </div>
                    <div class="time d-flex flex-column">
                        <p class="font-12">
                            {{ getEndDate(itinerary_item)[0] }},{{
                                getEndDate(itinerary_item)[1]
                            }}
                            <span class="red-text">+1</span>
                        </p>
                        <h4 class="fw600">
                            {{
                                moment(itinerary_item.arr_date)
                                    .locale("ru")
                                    .format("LT")
                            }}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.itinerarie {
    margin-bottom: 46px;
    &__company {
        margin-right: 13px;
        .airline-image {
            max-width: 20px;
            width: 100%;
            height: auto;
            object-fit: cover;
        }

        h6 {
            margin-left: 7px;

            font-size: 14px;
            line-height: 19px;
            color: #202123;
        }
    }
}
.segments {
    margin-left: 27px;
    margin-right: 31px;

    span {
        font-size: 10px;
        line-height: 12px;
        color: #b9b9b9;
    }
    .border {
        margin: 1px 0 2px;
    }
}
</style>