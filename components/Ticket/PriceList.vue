<script>
export default {
    props: {
        item: {
            type: Object,
        },
    },
};
</script>

<template>
    <div class="price bg-gray d-flex flex-column align-center w-full">
        <h5 class="fw600">
            {{ item.price }}{{ item.currency == "KZT" ? "₸" : item.currency }}
        </h5>
        <button class="button button-green w-full">Выбрать</button>
        <span class="font-12 passengers-price">Цена за всех пассажиров</span>
        <div class="d-flex align-center w-full baggage">
            <span class="font-12 fw400">Нет багажа</span>
            <button class="button button-blue w-full">+ Добавить багаж</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.price {
    border-radius: 0px 4px 4px 0px;
    padding: 12px 20px 16px;
    max-width: 240px;

    .passengers-price {
        color: #707276;
    }
    .baggage {
        margin-top: 12px;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: "OpenSans-Regular";
        border-radius: 4px;

        &-green {
            font-size: 18px;
            line-height: 25px;
            background: #55bb06;
            font-weight: 700;
            color: white;
            height: 40px;
            margin: 13px 0 8px;
        }
        &-blue {
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: #5763b3;
            background: #eaf0fa;
            height: 24px;
            max-width: 128px;
            margin-left: 6px;
        }
        span {
            color: #202123;
        }
    }
}
</style>