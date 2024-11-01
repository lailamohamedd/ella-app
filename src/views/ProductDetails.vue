<template>
<div class="product-details mt-16">
    <!-- Start Section Header -->
    <h1 class="px-2">Product Details</h1>
     <!-- End Section Header -->
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="7">
                <img 
                    :src="tab ? tab : singleProduct.thumbnail" 
                    v-if="!loading" 
                    height="500" 
                    class="w-100" 
                    alt="product image"
                />
                <!-- Start Skeleton Loader -->
                <v-skeleton-loader 
                    v-if="loading" 
                    type="image, image, image">
                </v-skeleton-loader>
                <!-- End Skeleton Loader -->

                <!-- Start Image Taps -->
                <v-tabs 
                    center-active 
                    height="120" 
                    class="mt-10" 
                    v-model="tab"
                >
                    <v-tab 
                        v-for="(img, i) in singleProduct.images" 
                        :key="i" 
                        class="mx-10" 
                        :value="img"
                    >
                        <img 
                            :src="img" 
                            width="100" 
                            height="100" 
                            alt="Product Image"
                        />
                    </v-tab>
                </v-tabs>
                <!-- End Image Taps -->
            </v-col>
            <v-col cols="12" md="5" class="pt-0 mt-8 mt-md-0 pl-6">
                <!-- Start Skeleton Loader -->
                <v-skeleton-loader 
                    v-if="loading" 
                    type="article, article, article">
                </v-skeleton-loader>
                <!-- End Skeleton Loader -->
                 <!-- Start Card -->
                <v-card elevation="0">
                    <!-- Start product Title -->
                    <v-card-title 
                        class="px-0 product-title" 
                    >
                        ({{ singleProduct.title }}) Sample - {{ singleProduct.category }} For Sale
                    </v-card-title>
                    <!--End product Title -->
                    <!-- Start Rating -->
                    <div class="rating-parent d-flex align-center" style="gap: 10px;">
                        <v-rating 
                            v-model="singleProduct.rating" 
                            half-increments 
                            readonly 
                            color="yellow-darken-2" 
                            size="x-small" 
                            >
                        </v-rating>
                        <span class="mt-1 stock">Stock: {{ singleProduct.stock }}</span>
                    </div>
                    <!-- End Rating -->
                    <v-card-text class="px-0" style="font-size: 13px; color: #454545;">{{ singleProduct.description }}</v-card-text>
                    <v-card-text class="px-0 pt-0" style="font-size: 13px; color: #454545;">Brand: {{ singleProduct.brand }}</v-card-text>
                    <v-card-text class="px-0 pt-0" style="font-size: 13px; color: #454545;">Availability: {{ singleProduct.stock > 0 ? "In Stock" : "Out Of Stock" }}</v-card-text>
                    <!-- Start Price -->
                    <v-card-text class="pl-0 pt-0">
                        <del>${{ singleProduct.price }}</del> From
                        <span class="font-weight-bold">
                            ${{ 
                            Math.ceil(
                                singleProduct.price - singleProduct.price * (singleProduct.discountPercentage / 100)
                            )
                            }}
                        </span>
                    </v-card-text>
                    <!-- End Price -->
                    <v-card-text class="pl-0 pt-0">Quantity</v-card-text>
                    <div class="counter px-1" style="border-radius: 30px; border: 1px solid #454545; width: fit-content;">
                        <v-icon size="22" @click="quantity > 1 ? quantity-- : false">mdi-minus</v-icon>
                        <input type="number" class="text-center py-3" style="border: none; outline: none; width: 60px; font-size: 15px;" min="1" v-model="quantity" />
                        <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                    </div>
                    <v-card-text class="pl-0">
                        Subtotal: ${{ 
                            Math.ceil(
                                singleProduct.price - singleProduct.price * (singleProduct.discountPercentage / 100) * quantity
                            )
                            }}
                    </v-card-text>
                    <!-- Start Add To Cart Button -->
                    <v-card-actions class="mt-7 w-100 px-0">
                        <v-btn 
                            variant="outlined" 
                            class="w-75 text-white add-cart-btn" 
                            height="50" 
                            @click="addToCart(singleProduct)" 
                            :loading="btnLoading" 
                        >
                            Add To Cart
                        </v-btn>
                    </v-card-actions>
                    <!-- End Add To Cart Button -->
                </v-card>
                <!-- End Card -->
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import { productsModule } from "@/stores/products"
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/cart";

export default {
    inject: ["Emitter"],
    components: {
        VSkeletonLoader,
    },
    computed: {
        ...mapState(productsModule, ["singleProduct"]),
    },
    methods: {
        ...mapActions(productsModule, ["getSingleProduct"]),
        ...mapActions(cartStore, ["addItem"]),
        addToCart(item) {
            item.quantity = this.quantity;
            this.btnLoading = true;
            setTimeout(() => {
                this.btnLoading = false;
                this.addItem(item);
                this.Emitter.emit("openCart");
                this.Emitter.emit("showMsg", item.title);
                // this.dialog = false;
            }, 1000);
        }
    },
    data: () => ({
        loading: false,
        tab: "",
        quantity: 1,
        btnLoading: false,
    }),
    async beforeMount() {
        this.loading = true;
        await this.getSingleProduct(this.$route.params.productId);
        this.loading = false;
    }
}
</script>

<style scoped>
.product-title {
    font-size: 19px; 
    font-weight: bold;
}
.stock {
    font-size: 13px; 
    color: #454545;
}
.add-cart-btn {
    text-transform: none; 
    border-radius: 30px; 
    background-color: #454545;
}
</style>