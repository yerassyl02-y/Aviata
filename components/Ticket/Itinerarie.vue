<script>
export default {};
</script>

<template>
    <div class="itinerarie d-flex align-center">
        <div class="itinerarie__company d-flex align-center">
            <svg width="20" height="20" class="itinerarie__logo">
                <use href="@/assets/img/icons.svg#itinerarie-logo"></use>
            </svg>
            <h6 class="fw600">Air Astana</h6>
        </div>
        <div class="itinerarie__details d-flex align-center">
            <div class="time d-flex flex-column">
                <p class="fs12">25 ноя, вс</p>
                <h4 class="fw600">23:25</h4>
            </div>
            <div class="segments d-flex flex-column">
                <div class="d-flex align-center justify-space-between">
                    <span>ALA</span>
                    <p class="fs12">4 ч 20 м</p>
                    <span>TSE</span>
                </div>
                <img src="@/assets/img/Tickets/line.png" class="border" />
                <p class="fs12 orange-text text-center">
                    через Шымкент, 1 ч 50 м
                </p>
            </div>
            <div class="time d-flex flex-column">
                <p class="fs12">26 ноя, сб<span class="red-text">+1</span></p>
                <h4 class="fw600">03:45</h4>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.itinerarie {
    margin-bottom: 46px;
    &__company {
        margin-right: 13px;

        h6 {
            margin-left: 7px;

            font-size: 14px;
            line-height: 19px;
            color: #202123;
        }
    }
}
.time {
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