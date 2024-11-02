<template>
<div class="new-products pt-12">
    <!-- Start Section Header -->
    <div class="title px-5 d-flex align-center justify-space-between">
        <h2>New Products</h2>
        <router-link class="text-black text-decoration-none"
            :to="{ 
                name: 'products_category', 
                query: { 
                    title: categories[index].title, 
                    category: categories[index].route
                },
            }"
        >
            Shop All
        </router-link>
    </div>
    <!-- End Section Header -->
    <v-container fluid>
        <v-row>
            <!-- Start Skeleton Loader -->
            <v-col cols="12" md="7" class="pt-14" v-if="!products.length">
                <v-row>
                    <v-col cols="3" v-for="num in 3" :key="num">
                        <v-skeleton-loader type="image, article, button"></v-skeleton-loader>
                    </v-col>
                </v-row>
            </v-col>
            <!-- End Skeleton Loader -->
            <v-col cols="12" lg="7" class="pt-14 order-1 order-md-0" v-else>
                <!-- Start Swiper -->
                <Swiper 
                    :pagination="{ 
                        el: '.swiper-pagination', 
                        clickable: true 
                    }" 
                    :modules="modules"
                    :slides-per-view="4"
                    :space-between="20"
                    class="pb-9 px-5"
                    :breakpoints="breakpoints"
                >
                        <Swiper-slide 
                            v-for="item in products" 
                            :key="item.id"
                        >
                            <v-card elevation="0" class="pb-5">
                                <v-hover v-slot="{ isHovering, props }">
                                    <div 
                                        class="img-parent position-relative" 
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
                                                class="w-100" 
                                                height="100%"
                                                :style="`cursor: pointer; transition: 0.5s all ease-in-out; scale: ${ isHovering ? 1.05 : 1}`"
                                                alt="product image" 
                                                v-bind="props" 
                                            />
                                            <!-- End Product image -->
                                        </button>
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
                                <!--End Product Text -->
                                <!-- Start Rating -->
                                <v-rating 
                                    v-model="item.rating" 
                                    half-increments 
                                    readonly 
                                    color="yellow-darken-2" 
                                    size="x-small" 
                                >
                                </v-rating>
                                <!-- End Rating -->
                                <!-- Start Price -->
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
                                <!-- End Price -->
                                <!-- Start Image Button -->
                                <v-btn-toggle 
                                    v-model="showenItem[item.title]" 
                                    mandatory>
                                    <v-btn 
                                        v-for="(pic, i) in item.images" 
                                        size="x-small" 
                                        rounded="xl" 
                                        :ripple="false" 
                                        :value="pic" 
                                        :key="i"
                                    >
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
                                <!-- End Image Button -->
                                <div>
                                    <v-btn 
                                        style="text-transform: none;" 
                                        class="mt-2 px-4" 
                                        @click="$router.push({
                                            name: 'product_details', 
                                            query: { productId: item.id }
                                        })"
                                    >
                                        Choose options
                                    </v-btn>
                                </div>
                            </v-card>
                        </Swiper-slide>
                </Swiper>
                <!-- End Swiper -->
            </v-col>
            <!-- Start banner -->
            <v-col class="text-center" cols="12" md="5">
                <img 
                    src="@/assets/images/offer-img.webp" 
                    alt="product image" 
                />
            </v-col>
            <!-- End banner -->
        </v-row>
    </v-container>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Pagination } from 'swiper';
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs';
import { productsModule } from '@/stores/products';
import { mapState } from 'pinia';

export default {
    inject: ["Emitter"],
    data: () => ({
        showenItem: {},
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            580: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    }),
    methods: {
        openQuickView(product) {
            this.Emitter.emit("openQuickView", product);
        }
    },
    computed: {
        ...mapState(productsModule, ['categories']),
    },
    props: {
        products: {
            type: Array,
        },
        title: {
            type: String,
        },
        titleColor: {
            type: String,
        },
        routeTitle: {
            type: String,
        },
        routeCategory: {
            type: String,
        },
        index: {
            type: Number,
        }
    },
    setup(){
        return {
            modules: [ Pagination]
        }
    },
    components: {
        Swiper, 
        SwiperSlide,
        VSkeletonLoader,
    },
};
</script>

<style scoped lang="scss">
.img-parent:hover {
    .quick-view-btn {
        opacity: 1 !important;
    }
}
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
// Media Queries
@media(max-width:580px) {
    .img-parent {
        height: 300px !important
    }
    .swiper-button-next,
    .swiper-button-prev {
        top: 60%;
    }
}
</style>