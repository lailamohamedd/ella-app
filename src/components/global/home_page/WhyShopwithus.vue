<template>
<div class="shop-withus py-14">
    <div class="title">
        <h2 class="text-center"><span>Why Shop </span> With Us?</h2>
    </div>
    <v-container fluid>
        <v-row>
            <v-col cols="12" lg="3" md="4" sm="6" class="mb-4 mb-lg-0">
                <v-card 
                    elevation="0" 
                    color="transparent" 
                    class="text-center text-white"
                >
                    <div class="img-parent">
                        <img 
                            src="@/assets/images/free-shipping.png" 
                            alt="shop with us image"
                        />
                    </div>
                    <v-card-title class="shop-withus-title">Free Shopping On first order.</v-card-title>
                    <v-card-text class="pb-0 shop-withus-sub">quaerat consequuntur sit, molestias atque blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" class="learn-more">Learn More</a>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6" class="mb-4 mb-lg-0">
                <v-card 
                    elevation="0" 
                    color="transparent" 
                    class="text-center text-white"
                >
                    <div class="img-parent">
                        <img 
                            src="@/assets/images/weekly-flash-sales.png" 
                            alt="shop with us image"
                        />
                    </div>
                    <v-card-title class="shop-withus-title">Flash weekly sales.</v-card-title>
                    <v-card-text class="pb-0 shop-withus-sub">consequuntur sit, molestias atque blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" class="learn-more">Learn More</a>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6" class="mb-4 mb-lg-0">
                <v-card 
                    elevation="0" 
                    color="transparent" 
                    class="text-center text-white"
                >
                    <div class="img-parent">
                        <img 
                            src="@/assets/images/discount.png" 
                            alt="shop with us image"
                        />
                    </div>
                    <v-card-title class="shop-withus-title">Annual Payment Discount.</v-card-title>
                    <v-card-text class="pb-0 shop-withus-sub">Ratione quaerat consequuntur atque blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" class="learn-more">Learn More</a>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6" class="mb-4 mb-lg-0">
                <v-card 
                    elevation="0" 
                    color="transparent" 
                    class="text-center text-white"
                >
                    <div class="img-parent">
                        <img 
                            src="@/assets/images/cash-back.png" 
                            alt="shop with us image"
                        />
                    </div>
                    <v-card-title class="shop-withus-title">Cashback Reward Program.</v-card-title>
                    <v-card-text class="pb-0 shop-withus-sub">Ratione blanditiis, perspiciatis saepe labore ducimus quis, provident aliquam reiciendis optio numquam!</v-card-text>
                    <a href="#" class="learn-more">Learn More</a>
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
    .shop-withus-title {
        white-space: pre-wrap; 
        line-height: 1.2; 
        font-weight: 700;
    }
    .shop-withus-sub {
      font-size: 15px;
    }
    .learn-more {
        color: #fff; 
        font-weight: 700; 
        font-size: 14px
    }
}
</style>