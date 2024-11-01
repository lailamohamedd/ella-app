<template>
<div class="products-category">
    <h1 class="text-center my-7">{{  $route.query.title }}</h1>
    <v-container>
        <!-- Start Lazy -->
        <v-lazy>
            <v-card 
                :loading="loading" 
                class="pt-5" 
                min-height="700px" 
                elevation="0"
            >
                <!-- Start Skeleton Loader -->
                <v-row v-if="loading">
                    <v-col 
                        cols="12" 
                        sm="6"
                        md="4"
                        lg="3" 
                        class="px-10 px-sm-5 mt-5 mt-lg-0" 
                        v-for="num in 4" 
                        :key="num"
                    >
                        <v-skeleton-loader type="image, article, button"></v-skeleton-loader>
                    </v-col>
                </v-row>
                <!-- End Skeleton Loader -->
                <v-row v-if="!loading">
                    <v-col 
                        cols="12" 
                        sm="6"
                        md="4"
                        lg="3"
                        class="px-10 px-sm-5 mt-5 mt-lg-0" 
                        v-for="item in categoryProducts.products" 
                        :key="item.id"
                    >
                        <v-card elevation="0" class="pb-5">
                            <v-hover v-slot="{ isHovering, props }">
                                <div 
                                    class="img-parent" 
                                    style="height: 160px;"
                                >
                                    <!-- Start Product View -->
                                    <button 
                                        class="p-0 h-100 w-100"
                                        @click="openQuickView(item)"
                                    >
                                        <!-- Start Product image -->
                                        <img 
                                            :src="
                                            showenItem[item.title] ? showenItem[item.title] : item.thumbnail" 
                                            class="w-100 h-100" 
                                            :style="`cursor: pointer; transition: 0.5s all ease-in-out; scale: ${ isHovering ? 1.05 : 1}`"
                                            alt="product image" 
                                            v-bind="props" 
                                        />
                                        <!-- End Product image -->
                                    </button>
                                    <!-- End Product View -->
                                    <!-- Start Product View -->
                                    <!-- <v-btn 
                                        @click="openQuickView(item)" 
                                        class="bg-white quick-view-btn" 
                                        variant="outlined" 
                                        density="dense" 
                                        width="60" 
                                        height="30" 
                                    >
                                        Quick View
                                    </v-btn> -->
                                    <!-- End Product View -->
                                </div>
                            </v-hover>
                            <!-- Start Product Text -->
                            <v-card-text class="pl-0 pb-1"> 
                                {{ 
                                    `(${item.title}) ${item.description}`.length <= 40
                                    ? `(${item.title}) ${item.description}`
                                    : `(${item.title}) ${item.description}`.substring(0,40) + " ... "
                                }}
                            </v-card-text>
                            <!-- End Product Text -->
                            <!-- Start Rating -->
                            <v-rating 
                                v-model="item.rating" 
                                half-increments 
                                readonly 
                                color="yellow-darken-2" 
                                size="x-small" 
                            ></v-rating>
                            <!-- End Rating -->
                            <v-card-text class="pl-0 pt-0">
                                <del>${{ item.price }}</del> From
                                <span class="text-red font-weight-bold">
                                    ${{ 
                                    Math.ceil(
                                        item.price - item.price * (item.discountPercentage / 100)
                                    )
                                    }}
                                </span>
                            </v-card-text>
                            <v-btn-toggle v-model="showenItem[item.title]">
                                <v-btn 
                                    v-for="(pic, i) in item.images" 
                                    size="x-small" 
                                    rounded="xl" 
                                    :ripple="false" 
                                    :value="pic" 
                                    :key="i">
                                    <img 
                                        :src="pic" 
                                        width="30" 
                                        height="30" 
                                        style="border: 1px solid #fff;" 
                                        class="border-rounded" 
                                        alt="product image"
                                    />
                                </v-btn>
                            </v-btn-toggle>
                            <div>
                                <v-btn 
                                    style="text-transform: none;" 
                                    @click="$router.push({
                                        name: 'product_details', 
                                        query: { productId: item.id 
                                    }})" 
                                    class="mt-2 px-4"
                                >
                                    Choose options
                                </v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-lazy>
        <!-- End Lazy -->
    </v-container>
</div>
</template>

<script>
import { productsModule } from '@/stores/products'
import { mapActions, mapState } from 'pinia';
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs';

export default {
    inject: ["Emitter"],
    data: () => ({
        showenItem: {},
        loading: false
    }),
    components:{
        VSkeletonLoader
    },
    methods: {
        ...mapActions(productsModule, ["getProductsByCategory"]),
        openQuickView(product) {
            this.Emitter.emit("openQuickView", product);
        }
    },
    computed: {
        ...mapState(productsModule, ["categoryProducts"])
    },
    watch: {
        async $route() {
            if(this.$route.name == 'products_category') {
                document.documentElement.scrollTo(0,0);
                this.loading = true;
                await this.getProductsByCategory(this.$route.query.category);
                this.loading = false;
            }
        },
    },
    async mounted(){
        if(!this.$route.query.category) {
            return this.$router.go(-1);
        }
        this.loading = true;
        await this.getProductsByCategory(this.$route.query.category);
        this.loading = false;
    }
}
</script>

<style scoped>
.quick-view-btn {
    text-transform: none; 
    font-size: 12px; 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); 
    border-radius: 30px; 
    transition: 0.2 all ease-in-out; 
    opacity: 0;
}
</style>