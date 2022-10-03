<script>
export default {};
</script>

<template>
    <div class="ticket-info d-flex align-center">
        <p class="font-12 blue-text pointer">Детали перелета</p>
        <p class="font-12 blue-text ml-6 mr-9 pointer">Условия тарифа</p>
        <div class="d-flex align-center">
            <svg width="20" height="20">
                <use href="@/assets/img/icons.svg#non-refundeble"></use>
            </svg>
            <p class="font-12">невозвратный</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
p:not(:last-child) {
    border-bottom: 1px dashed rgba(114, 132, 228, 0.5);
}
p:nth-child(2) {
    margin-left: 24px;
    margin-right: 46px;
}
p:last-child {
    color: #707276;
    margin-left: 7px;
    cursor: not-allowed;
}
</style>