<template>
<div class="cart-page">
    <v-container fluid>
        <v-row>
            <!-- Start breadcrumbs -->
            <v-col cols="12" class="pb-0 px-0">
                <v-breadcrumbs :items="['Home', 'Your cart']">
                    <template v-slot: divider>
                        <v-icon color="#878484">mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
            <!-- End breadcrumbs -->
            <v-col cols="12" class="pt-0">
                <v-card-title 
                    class="pl-0 pb-0 cart-title pr-2 d-flex justify-lg-space-between align-center w-100"
                >
                    Your Cart
                </v-card-title>
                <div v-if="cartItems.length" class="bar-parent mt-3 position-relative mr-2">
                    <svg width="30" :fill="parseInt((calcTotalPrice / 10000) * 100) < 50 ? '#f44336': parseInt((calcTotalPrice / 10000) * 100) >= 50 && parseInt((calcTotalPrice / 10000) * 100) < 100 ? '#ff9800': '#4caf50'" :style="`bottom: 50%; z-index: 1; left: calc((${
                    parseInt((calcTotalPrice / 10000) * 100) <= 100 ? parseInt((calcTotalPrice / 10000) * 100) : 100})% - 30%); transition: 0.15s all ease-in-out;`" class="position-absolute icon-shipping-truck" viewBox="0 0 40.55 24"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="truck-body" d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"></path><path class="truck-body" d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"></path><path class="wheel" d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"></path><path class="wheel" d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"></path></g></g></svg>
                    <v-progress-linear :color="parseInt((calcTotalPrice / 10000) * 100) < 50 ? 'red': parseInt((calcTotalPrice / 10000) * 100) >= 50 && parseInt((calcTotalPrice / 10000) * 100) < 100 ? 'orange': 'green'" striped height="10px" 
                    :model-value="parseInt((calcTotalPrice / 10000) * 100) <= 100 ? parseInt((calcTotalPrice / 10000) * 100) : 100"></v-progress-linear>
                </div>
                <v-card-text
                     v-if="cartItems.length && 10000 - calcTotalPrice > 0" 
                     class="px-0 pt-2"
                >
                    Only ${{ 10000 - calcTotalPrice }}.00 away from Free Shipping
                </v-card-text>
                <v-card-text v-if="!cartItems.length" class="px-0 pt-2">Free Shipping For All Orders Over $10000.00!</v-card-text>
                <v-card-text 
                    v-if="cartItems.length && 10000 - calcTotalPrice <= 0" 
                    class="px-0 pt-2"
                >
                    You order now is included Free Shipping
                </v-card-text>
                <v-card-text 
                    v-if="!cartItems.length" 
                    class="px-0 pt-2 text-center"
                >
                    You cart is empty!
                </v-card-text>
                <!-- Start Continue Shopping -->
                <v-card-actions 
                    v-if="!cartItems.length" 
                    class="px-0 justify-center"
                >
                    <v-btn 
                        class="mx-0 mt-5" 
                        width="300" 
                        style="text-transform: none; border-radius: 30px;" 
                        variant="outlined" 
                        @click="$router.push({ name: 'home'})" 
                        color="blue" 
                        height="45"
                    >
                        Continue Shopping
                    </v-btn>
                </v-card-actions>
                <!-- End Continue Shopping -->
            </v-col>
            <v-col cols="12" lg="8" md="8" class="px-1 px-lg-5" v-if="cartItems.length">
                <!-- Start Table Cart -->
                <v-table class="w-100">
                    <thead>
                        <tr>
                            <th class="text-center">Product</th>
                            <th class="text-center">Price</th>
                            <th class="text-center">Quantity</th>
                            <th class="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartItems" :key="item.id">
                            <td style="width: 55%;">
                                <v-row class="align-center mb-lg-1">
                                    <v-col lg="3" md="3" cols="5">
                                        <img :src="item.thumbnail" class="w-100" alt="product image" />
                                    </v-col>
                                    <v-col lg="9" md="9" cols="7">
                                        <v-card-title class="title-product">
                                            {{ item.title }} 
                                            <!-- Sample - {{ item.category }} -->
                                        </v-card-title>
                                        <!-- <v-card-text class="px-0 pb-0">Category: {{ item.category }}</v-card-text> -->
                                    </v-col>
                                </v-row>
                            </td>
                            <td class="text-center" style="width: 15%;">
                                <div class="product-price">
                                    ${{ 
                                    Math.ceil(
                                        item.price - item.price * (item.discountPercentage / 100)
                                    )
                                }}
                                </div>
                            </td>
                            <td class="text-center" style="width: 15%;">
                                <div class="counter px-1">
                                    <v-icon size="22" @click="item.quantity > 1 ? item.quantity-- : false">mdi-minus</v-icon>
                                    <input type="number" class="text-center py-2" style="border: none; outline: none; width: 35px; font-size: 14px;" min="1" v-model="item.quantity" />
                                    <v-icon size="22" @click="item.quantity++">mdi-plus</v-icon>
                                </div>
                            </td>
                            <td class="text-center" style="width: 15%;">
                                ${{ 
                                        Math.ceil(
                                            item.price - item.price * (item.discountPercentage / 100)
                                        ) * item.quantity
                                    }}
                            </td>
                            <td class="text-center">
                                <v-icon siz="small" color="red" class="fa fa-trash" @click="deleteItem(item.id)"></v-icon>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
                <!-- End Table Cart -->

                <v-divider length="100%" color="black"></v-divider>
                <v-divider length="100%" color="black"></v-divider>
                <v-divider length="100%" color="black"></v-divider>

                <v-card-text v-if="cartItems.length" style="gap: 10px;" class="px-0 d-flex align-center mt-4 pt-2">
                    <span>
                        <svg width="20" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.94 179.96" class="icon icon-shield-check"><path d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"></path><polygon class="cls-1" fill="white" points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"></polygon></svg>
                    </span>
                    <span>Secure Shopping Guarantee</span>
                </v-card-text>
                <img src="@/assets/images/cart-page-cards.webp" width="270" alt="cart cards images">
            </v-col>
            <v-col cols="12" lg="4" md="4" class="px-1 px-lg-4 mt-8 mt-lg-0" v-if="cartItems.length">
                <v-card elevation="0">
                    <v-card-title style="font-size: 14px;">ORDER SUMMARY</v-card-title>
                    
                    <v-divider length="100%" color="black"></v-divider>
                    <v-divider length="100%" color="black"></v-divider>
                    <v-divider length="100%" color="black"></v-divider>
                    <v-divider length="100%" color="black"></v-divider>
                    <v-divider length="100%" color="black"></v-divider>
                    
                    <v-card-text class="d-flex align-center justify-space-between">
                        <span>Subtotal</span>
                        <span class="font-weight-bold" style="font-size: 16px;">${{ calcTotalPrice }}</span>
                    </v-card-text>

                    <v-divider length="100%" color="black"></v-divider>

                    <v-card-text> Get Shipping estimate</v-card-text>
                     <!-- Start Countries Select -->
                    <select class="w-100 pa-3 country-select" name="" id="">
                        <option 
                            :value="country" 
                            v-for="country in countries" 
                            :key="country"
                        >
                            {{ country }}
                        </option>
                    </select>
                     <!-- End Countries Select -->

                    <!-- Add State -->
                    <!-- <div class="states mt-4">
                        <select class="pa-3" style="border: 1px solid #000; border-radius: 30px; font-size: 14px; width: 55%; margin-right: 1%;" name="" id="">
                            <option :value="country" v-for="country in countries" :key="country">{{ country }}</option>
                        </select>
                        <input class="pa-3" width="43%" style="margin-left: 1%;" type="text">
                    </div> -->

                    <!-- Start Calculate Shipping Button -->
                    <v-card-actions class="py-5 px-0">
                        <v-btn 
                             color="blue" 
                             variant="outlined" 
                             height="45" 
                             class="w-100 calc-btn bg-primary"
                        >
                            Calculate Shipping
                        </v-btn>
                    </v-card-actions>
                    <!-- End Calculate Shipping Button -->

                    <v-divider length="100%" color="black"></v-divider>
                    <v-divider length="100%" color="black"></v-divider>

                    <v-card-text class="d-flex align-center justify-space-between">
                        <span>Total</span>
                        <span 
                            class="font-weight-bold" 
                            style="font-size: 16px;"
                        >
                            ${{ calcTotalPrice }}
                        </span>
                    </v-card-text>

                    <v-divider length="100%" color="black"></v-divider>
                    <v-divider length="100%" color="black"></v-divider>

                    <v-card-actions class="pt-5 pb-3 px-0">
                        <v-btn style="text-transform: none; border-color: #f9f9f9;" color="blue" variant="outlined" height="45" class="w-100 bg-primary" @click="toCheckout">Proceed To Checkout</v-btn>
                    </v-card-actions>
                    <!-- Start Continue Shopping -->
                    <v-card-actions class="pb-5 px-0">
                        <v-btn 
                            style="text-transform: none;" 
                            variant="outlined" 
                            @click="$router.push({ name: 'home'})" 
                            color="blue" 
                            height="45" 
                            class="w-100"
                        >
                            Continue Shopping
                        </v-btn>
                    </v-card-actions>
                    <!-- End Continue Shopping -->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import { cartStore } from '@/stores/cart';
import { mapActions, mapState } from 'pinia';

export default {
    data(){
        return {
            countries: ["Egypt", "Lebanon", "America", "Seria", "Jordan"], 
        }
    },
    computed: {
        ...mapState(cartStore, ["cartItems"]),
        calcTotalPrice() {
            let total = 0;
            this.cartItems.forEach(product => {
                total += 
                Math.ceil(
                    product.price - product.price * (product.discountPercentage / 100)
                                ) * product.quantity;
            });
            return total;
        }
    },
    methods: {
        ...mapActions(cartStore, ["getCartItems", "deleteItem", "setToLocalStorage"]),
        toCheckout() {
            this.setToLocalStorage();
            this.$router.push({ name: "check_out" })
        }
    },
};
</script>
<style scoped lang="scss">
.cart-page {
   .title-product {
    white-space: pre-wrap; 
    font-size: 14px; 
    margin: 0 10px !important;
    line-height: 1.2;
    } 
    .counter {
        border-radius: 30px; 
        border: 1px solid #aaa7a7; 
        width: 100px;
    }
    .cart-title {
        font-size: 35px; 
        font-weight: bold;
    }
}
.country-select, input {
    border: 1px solid #aaa7a7; 
    border-radius: 30px; 
    font-size: 14px;
}
.calc-btn {
    text-transform: none; 
    border-radius: 30px; 
    border-color: #f9f9f9;
}
@media (max-width: 767px) {
    .cart-page {
        .title-product {
            width: 130px !important;
        }
        table {
            width: 800px !important
        }
    }
    .product-price {
        width: 100px !important
    }
}
</style>