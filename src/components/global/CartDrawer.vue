<template>
    <div class="drawer">
        <v-navigation-drawer 
            class="pr-1 cart-drawer" 
            v-model="drawer" 
            :width="windowWidth <= 767 ? windowWidth / 2 : 370"
            location="right"
            temporary
        >
            <v-card class="px-0" elevation="0">
                <!-- Start Drawer button close -->
                <v-card-title class="pl-0 pr-2 d-flex justify-space-between align-center w-100" style="font-size: 17px; font-weight: bold;">
                    Shopping Cart
                    <v-icon @click="drawer = false">mdi-close</v-icon>
                </v-card-title>
                <!-- End Drawer button close -->

                <!-- <v-card-text class="px-0">{{ cartItems.length }} Items</v-card-text> -->
                 <!-- Start cart empty code -->
                <v-card-text 
                    v-if="!cartItems.length" 
                    class="px-0"
                >
                    Free shipping for all orders over $10000.00
                </v-card-text>
                <v-card-text 
                    v-if="!cartItems.length" 
                    class="px-0 text-center"
                >
                    Your cart is empty
                </v-card-text>
                 <!-- End cart empty code -->

                <div 
                    class="bar-parent mt-4 position-relative mr-2" 
                    v-if="cartItems.length"
                >
                    <svg width="30" :fill="parseInt((calcTotalPrice / 10000) * 100) < 50 ? '#f44336': parseInt((calcTotalPrice / 10000) * 100) >= 50 && parseInt((calcTotalPrice / 10000) * 100) < 100 ? '#ff9800': '#4caf50'" :style="`bottom: 50%; z-index: 1; left: calc((${
                    parseInt((calcTotalPrice / 10000) * 100) <= 100 ? parseInt((calcTotalPrice / 10000) * 100) : 100})% - 30%); transition: 0.15s all ease-in-out;`" class="position-absolute icon-shipping-truck" viewBox="0 0 40.55 24"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="truck-body" d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"></path><path class="truck-body" d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"></path><path class="wheel" d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"></path><path class="wheel" d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"></path></g></g></svg>
                    <v-progress-linear :color="parseInt((calcTotalPrice / 10000) * 100) < 50 ? 'red': parseInt((calcTotalPrice / 10000) * 100) >= 50 && parseInt((calcTotalPrice / 10000) * 100) < 100 ? 'orange': 'green'" striped height="10px" 
                    :model-value="parseInt((calcTotalPrice / 10000) * 100) <= 100 ? parseInt((calcTotalPrice / 10000) * 100) : 100"></v-progress-linear>
                </div>
                <!-- Start Calculate Total Price -->
                <v-card-text 
                    v-if="cartItems.length && 10000 - calcTotalPrice > 0" 
                    class="px-0 pt-2"
                >
                    Only ${{ 10000 - calcTotalPrice }}.00 away from Free Shipping
                </v-card-text>

                <v-card-text 
                    v-if="cartItems.length && 10000 - calcTotalPrice <= 0" 
                    class="px-0 pt-2"
                >
                    Your Order now is included Free Shipping
                </v-card-text>
                <!-- End Calculate Total Price -->
                <!-- Start continue shopping btn -->
                <v-card-actions v-if="!cartItems.length">
                    <v-btn 
                        class="continue-shopping-btn w-100" 
                        variant="outlined" 
                        @click="drawer = false" 
                        height="45"
                    >
                        Continue Shopping
                    </v-btn>
                </v-card-actions>
                <!-- End continue shopping btn -->
            </v-card>
            <v-card 
                class="pa-0 mt-5 items-card" 
                v-if="cartItems.length" elevation="0" 
                style="overflow-y: auto;" 
                max-height="395"
            >
                <v-container class="px-1">
                    <v-row 
                        v-for="item in cartItems" 
                        :key="item.id" 
                        class="align-center"
                    >
                        <v-col cols="12" sm="5">
                            <img :src="item.thumbnail" class="w-100" alt="product image" />
                        </v-col>
                        <v-col cols="12" sm="7">
                            <div class="d-flex align-center">
                                <div>
                                    <v-card-title class="px-0 product-title">
                                        {{ item.title }} Sample - {{ item.category }}
                                    </v-card-title>
                                    <v-card-text class="px-0 product-cat pb-0">Category: {{ item.category }}</v-card-text>
                                    <v-card-text class="px-0 pt-2">
                                        ${{ 
                                            Math.ceil(
                                                item.price - item.price * (item.discountPercentage / 100)
                                            ) * item.quantity
                                        }}
                                    </v-card-text>
                                    <div class="item-footer d-flex justify-lg-space-between align-center">
                                        <div class="counter px-1">
                                            <v-icon size="18" @click="item.quantity > 1 ? item.quantity-- : false">mdi-minus</v-icon>
                                            <input 
                                                type="number" 
                                                class="text-center counter-input py-1" 
                                                min="1" 
                                                v-model="item.quantity" 
                                            />
                                            <v-icon size="18" @click="item.quantity++">mdi-plus</v-icon>
                                        </div>
                                    </div>
                                </div>
                                <v-icon siz="small" class="fa fa-trash" color="red" @click="deleteItem(item.id)"></v-icon>
                            </div>
                        </v-col>
                        <v-divider length="100%" color="black"></v-divider>
                    </v-row>
                </v-container>
            </v-card>
            <v-card class="pa-0 mt-5" elevation="0" v-if="cartItems.length">
                <v-card-actions class="flex-column justify-center align-center" style="gap: 15px;">
                    <v-btn color="blue" variant="outlined" height="45" @click="toCheckout" class="cart-btn w-100 bg-info">Check Out</v-btn>
                    <v-btn color="blue" variant="outlined" height="45" @click="$router.push({name: 'cart_page'})" class="cart-btn w-100">View Cart</v-btn>
                </v-card-actions>
            </v-card>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { cartStore } from '@/stores/cart';
import { mapActions, mapState } from 'pinia';

export default {
    inject: ["Emitter"],
    props: {
        windowWidth: {
            type: Number
        },
    },
    data:()=> ({
        drawer: true
    }),
    computed: {
        ...mapState(cartStore, ["cartItems"]),
        calcTotalPrice() {
            let total = 0;
            this.cartItems.forEach(product => {
                total += 
                Math.ceil(
                    product.price - product.price * (product.discountPercentage / 100)
                                ) * product.quantity
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
    mounted(){
        this.Emitter.on("openCart", () => {
            this.drawer = true;
        });
        this.getCartItems();
    },
};
</script>

<style lang="scss" scoped>
.v-card-text {
    color: #6f6f6f !important;
}
.continue-shopping-btn {
    text-transform: none; 
    border-radius: 30px; 
    border-color: #f9f9f9;
}
.counter {
    border-radius: 30px; 
    border: 1px solid #454545; 
    width: fit-content;
}
.counter-input {
    border: none; 
    outline: none; 
    width: 35px; 
    font-size: 14px;
}
.product-cat {
    white-space: pre-wrap; 
    font-size: 12px; 
    line-height: 1.2;
}
.product-title {
    white-space: pre-wrap; 
    font-size: 13px; 
    line-height: 1.2;
}
.cart-btn {
    text-transform: none; 
    border-radius: 30px; 
    border-color: #f9f9f9;
}
.items-card {
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: #f0eded
    }
    &::-webkit-scrollbar-track {
        width: 5px;
        background-color: #f0eded
    }
}

// Media Queries
@media (max-width: 580px) {
    .drawer {
        .v-card-text {
            font-size: 12px;
        }
        .v-btn {
            height: 30px !important;
            font-size: 11px
        }
    }
}
</style>