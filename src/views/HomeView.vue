<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper 
      :products="FlashDeals" 
      title="Beauty" 
      :index="0" 
      titleColor="#405b86"
    />
    <TopCategories />
    <NewProducts :index="0" :products="newProducts" />
    <QualityFeatures />
    <ProductsSwiper 
      :products="fragrances" 
      :index="1" 
      title="Top fragrances" 
      titleColor="#405b86"
    />
    <v-container fluid>
      <v-row>
        <v-col lg="6" md="6" cols="12" class="pr-lg-5">
          <img 
            src="@/assets/images/store-banner1.webp" 
            class="w-100 store-banner" 
            alt="banner cover image" 
          />
        </v-col>
        <v-col lg="6" md="6" cols="12" class="pl-lg-5">
          <img 
            src="@/assets/images/store-banner2.webp" 
            class="w-100" 
            alt="banner cover image" 
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsSwiper 
      :products="furniture" 
      :index="2" 
      title="Top furniture" 
      titleColor="black" 
    />
    <img 
      src="@/assets/images/store-offer1.webp" 
      class="w-100" 
      alt="banner image"
    />
    <ProductsSwiper 
      :products="groceries" 
      :index="3" 
      title="Top groceries" 
      titleColor="black" 
    />
    <WhyShopwithus />
  </div>
</template>

<script>
import NewProducts from '@/components/global/home_page/NewProducts.vue';
import ProductsSwiper from '@/components/global/home_page/ProductsSwiper.vue';
import QualityFeatures from '@/components/global/home_page/QualityFeatures.vue';
import TheFeatures from '@/components/global/home_page/TheFeatures.vue';
import TopCategories from '@/components/global/home_page/TopCategories.vue';
import TopOffers from '@/components/global/home_page/TopOffers.vue';
import UpperBanner from '@/components/global/home_page/UpperBanner.vue';
import WhyShopwithus from '@/components/global/home_page/WhyShopwithus.vue';
import { productsModule } from '@/stores/products';
import { mapActions, mapState } from 'pinia';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsSwiper,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopwithus
  },
  computed: {
    ...mapState(productsModule, ["FlashDeals", "newProducts", "fragrances", "furniture", "groceries"])
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  }
}
</script>

<style scoped>
@media (min-width: 992px) {
  .store-banner {
    height: 362px;
  }
}
</style>