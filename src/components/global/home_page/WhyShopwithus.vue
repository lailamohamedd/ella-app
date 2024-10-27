<template>
<div class="shop-withus py-14">
    <div class="title">
        <h2 class="text-center"><span>Why Shop </span> With Us?</h2>
    </div>
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-card elevation="0" color="transparent" class="text-center text-white">
                    <div class="img-parent">
                        <img src="@/assets/images/free-shipping.png" alt="">
                    </div>
                    <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 700;">Free Shopping On first order.</v-card-title>
                    <v-card-text class="pb-0" style="font-size: 15px;">quaerat consequuntur sit, molestias atque blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" style="color: #fff; font-weight: 700; font-size: 14px">Learn More</a>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="0" color="transparent" class="text-center text-white">
                    <div class="img-parent">
                        <img src="@/assets/images/weekly-flash-sales.png" alt="">
                    </div>
                    <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 700;">Flash weekly sales.</v-card-title>
                    <v-card-text class="pb-0" style="font-size: 15px;">consequuntur sit, molestias atque blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" style="color: #fff; font-weight: 700; font-size: 14px">Learn More</a>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="0" color="transparent" class="text-center text-white">
                    <div class="img-parent">
                        <img src="@/assets/images/discount.png" alt="">
                    </div>
                    <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 700;">Annual Payment Discount.</v-card-title>
                    <v-card-text class="pb-0" style="font-size: 15px;">Ratione quaerat consequuntur atque blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" style="color: #fff; font-weight: 700; font-size: 14px">Learn More</a>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="0" color="transparent" class="text-center text-white">
                    <div class="img-parent">
                        <img src="@/assets/images/cash-back.png" alt="">
                    </div>
                    <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 700;">Cashback Reward Program.</v-card-title>
                    <v-card-text class="pb-0" style="font-size: 15px;">Ratione blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" style="color: #fff; font-weight: 700; font-size: 14px">Learn More</a>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.shop-withus {
    background-image: url(@/assets/images/why-shop-with-us-banner.webp);
    background-repeat: repeat-x;
    background-size: cover;
    h2 {
        color: #fff;
        font-size:30px;
        font-weight: 900;
        span {
            color: rgb(45 251 223)
        }
    }
}
</style>