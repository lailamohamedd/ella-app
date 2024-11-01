<template>
    <div class="quick-view">
        <v-dialog v-model="dialog" max-width="900">
            <v-icon 
                class="close-dialog" 
                @click="dialog = false"
            >
                mdi-close
            </v-icon>
            <v-card class="content-card" elevation="0">
                <v-container fluid class="bg-white pt-10">
                    <v-row>
                        <v-col cols="12" md="7">
                            <img 
                                :src="tab ? tab : product.thumbnail" 
                                v-if="!loading" 
                                height="400" 
                                class="w-100" 
                                alt="product image"
                            />
                            <v-skeleton-loader v-if="loading" type="image, image, image"></v-skeleton-loader>
                            <v-tabs 
                                center-active 
                                height="130" 
                                class="mt-10" 
                                v-model="tab"
                                >
                                <v-tab 
                                    v-for="(img, i) in product.images" 
                                    :key="i" 
                                    class="mx-5" 
                                    :value="img"
                                >
                                    <img :src="img" width="100" height="70" alt="product Image">
                                </v-tab>
                            </v-tabs>
                        </v-col>
                        <v-col cols="12" md="5" class="pt-8 mt-md-0 pl-6">
                            <v-skeleton-loader v-if="loading" type="article, article, article"></v-skeleton-loader>
                            <v-card elevation="0">
                                <v-card-title class="px-0 product-title">
                                    ({{ product.title }}) Sample - {{ product.category }} For Sale
                                </v-card-title>
                                <!-- Start Rating -->
                                <div class="rating-parent d-flex align-center" style="gap: 10px;">
                                    <v-rating 
                                        v-model="product.rating" 
                                        half-increments 
                                        readonly 
                                        color="yellow-darken-2" 
                                        size="x-small" 
                                    >
                                    </v-rating>
                                    <span class="mt-1 item-text">Stock: {{ product.stock }}</span>
                                </div>
                                <!-- End rating -->
                                <v-card-text class="px-0 item-text">{{ product.description }}</v-card-text>
                                <v-card-text class="px-0 pt-0 item-text">Brand: {{ product.brand }}</v-card-text>
                                <v-card-text class="px-0 pt-0 item-text">Availability: {{ product.stock > 0 ? "In Stock" : "Out Of Stock" }}</v-card-text>
                                <v-card-text class="pl-0 pt-0">
                                    <del>${{ product.price }}</del> From
                                    <span class="font-weight-bold">
                                        ${{ 
                                        Math.ceil(
                                            product.price - product.price * (product.discountPercentage / 100)
                                        )
                                        }}
                                    </span>
                                </v-card-text>
                                <v-card-text class="pl-0 pt-0">Quantity</v-card-text>
                                <div class="counter px-1">
                                    <v-icon size="18" @click="quantity > 1 ? quantity-- : false">mdi-minus</v-icon>
                                    <input type="number" class="text-center counter-field py-1" min="1" v-model="quantity" />
                                    <v-icon size="18" @click="quantity++">mdi-plus</v-icon>
                                </div>
                                <v-card-text class="pl-0">
                                    Subtotal: ${{ 
                                        Math.ceil(
                                            product.price - product.price * (product.discountPercentage / 100) * quantity
                                        )
                                        }}
                                </v-card-text>
                                <!-- Start Add To Cart Button -->
                                <v-card-actions class="mt-2 w-100 px-0">
                                    <v-btn 
                                        @click="addToCart(product)" 
                                        :loading="btnLoading" 
                                        variant="outlined" 
                                        class="w-75 text-white add-cart-btn" 
                                        height="50" 
                                    >
                                        Add To Cart
                                    </v-btn>
                                <!-- End Add To Cart Button -->
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
    inject: ["Emitter"],
    components: {VSkeletonLoader},
    methods: {
        ...mapActions(cartStore, ["addItem"]),
        addToCart(item) {
            item.quantity = this.quantity;
            this.btnLoading = true;
            setTimeout(() => {
                this.btnLoading = false;
                this.addItem(item);
                this.Emitter.emit("openCart");
                this.Emitter.emit("showMsg", item.title);
                this.dialog = false;
            }, 1000);
        }
    },
    data: () => ({
            loading: false,
            tab: "",
            quantity: 1,
            dialog: false,
            product: "",
            btnLoading: false
        }
    ),
    mounted() {
        this.Emitter.on("openQuickView", (data) => {
            this.loading = true;
            this.product = data;
            this.dialog = true;
            setTimeout(()=> {
                this.loading = false;
            }, 1000)
        })
    },
    
}
</script>

<style lang="scss" scoped>
.content-card {
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
.counter {
    border-radius: 30px; 
    border: 1px solid #454545; 
    width: fit-content;
}
.counter-field {
    border: none; 
    outline: none; 
    width: 60px; 
    font-size: 15px;
}
.product-title {
    font-size: 19px; 
    font-weight: bold; 
    white-space: pre-wrap;
}
.item-text {
    font-size: 13px; 
    color: #454545;
}
.add-cart-btn {
    text-transform: none; 
    border-radius: 30px; 
    background-color: #454545;
}
.close-dialog {
    position: absolute; 
    right: -20px; 
    top: -27px; 
    color: white; 
    font-size: 29px; 
    padding: 13px; 
    z-index: 10;
}
@media (max-width: 767px) {
    .add-cart-btn {
        width: 100% !important;
    }
}
</style>