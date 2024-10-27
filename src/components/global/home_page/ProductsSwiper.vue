<template>
<div class="products-swiper pt-16 pb-5">
    <div class="title px-5 d-flex align-center justify-lg-space-between">
        <h2 :class="[`text-${titleColor}`]">{{ title }}</h2>
        <a class="text-black" href="#">Shop All</a>
    </div>
    <v-container fluid v-if="!products.length">
        <v-row>
            <v-col cols="12" class="pt-14">
                <v-row>
                    <v-col cols="3" v-for="num in 4" :key="num">
                        <v-skeleton-loader type="image, article, button"></v-skeleton-loader>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <Swiper 
      :pagination="{ el: '.swiper-pagination', clickable: true }" 
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-9 px-5"
      :navigation="{prevIcon: 'swiper-prev', nextIcon: 'swiper-next'}"
      :autoplay="{ delay: 3000 }"
    >
        <Swiper-slide v-for="item in products" :key="item.id">
            <v-card elevation="0" class="pb-5">
               <v-hover v-slot="{ isHovering, props }">
                    <div class="img-parent position-relative" style="height: 200px; overflow: hidden;">
                        <img 
                            :src="
                            showenItem[item.title] ? showenItem[item.title] : item.thumbnail" 
                            class="w-100" 
                            :style="`cursor: pointer; transition: 0.5s all ease-in-out; scale: ${ isHovering ? 1.05 : 1}`"
                            height="160" 
                            alt="product image" 
                            v-bind="props" />

                            <v-btn @click="openQuickView(item)" class="bg-white quick-view-btn" variant="outlined" density="compact" width="60" height="30" style="text-transform: none; font-size: 12px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 30px; transition: 0.2 all ease-in-out; opacity: 0;">Quick View</v-btn>
                    </div>
               </v-hover>

                <v-card-text class="pl-0 pb-1"> 
                    {{ 
                        `(${item.title}) ${item.description}`.length <= 57
                        ? `(${item.title}) ${item.description}`
                        : `(${item.title}) ${item.description}`.substring(0,57) + " ... "
                    }}
                </v-card-text>
                <v-rating v-model="item.rating" half-increments readonly color="yellow-darken-2" size="x-small" density="small"></v-rating>
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
                    <v-btn v-for="(pic, i) in item.images" size="x-small" rounded="xl" ripple="false" :value="pic" :key="i">
                        <img :src="pic" width="30" height="30" style="border: 1px solid #fff;" class="border-rounded" alt="">
                    </v-btn>
                </v-btn-toggle>
                <div>
                    <v-btn density="combact" style="text-transform: none;" class="py-2 mt-2 px-4" @click="$router.push({name: 'product_details', params: { productId: item.id }})">Choose options</v-btn>
                </div>
            </v-card>
        </Swiper-slide>
    </Swiper>
    <div class="swiper-prev"></div>
    <div class="swiper-next"></div>
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { VSkeletonLoader } from 'vuetify/lib/components/index.mjs';
export default {
    inject: ['Emitter'],
    methods: {
        openQuickView(product) {
            this.Emitter.emit("openQuickView", product);
        }
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
        }
    },
    setup(){
        return {
            modules: [ Pagination, Navigation, Autoplay ]
        }
    },
    components:{
        Swiper, 
        SwiperSlide,
        VSkeletonLoader
    },
    data: () => ({
        showenItem: {}
    })
};
</script>

<style lang="scss">
.products-swiper {
    .swiper-button-next,
    .swiper-button-prev {
        width: 40px;
        height: 40px;
        border: 1px solid #000;
        border-radius: 50%;
        background-color: #fff;
        top: 40%;
        &::after {
            font-size: 13px;
            background-color: #f4f4f4;
            color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 900;
        }
    }
    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
    }
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        bottom: inherit !important;
    }
    .img-parent:hover {
        .quick-view-btn {
            opacity: 1 !important;
        }
    }
}
.v-rating_wrapper {
    margin-right: 5px;
}
</style>