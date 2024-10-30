<template>
<div class="layout">
    <v-layout class="position-relative">
        <CartDrawer />
        <MenuDrawer />
        <v-main :style="`padding-top: ${ $route.name == 'check_out' ? '0px' : windowWidth <= 990 ? '60px' : '150px'}`">
            <slot></slot>
        </v-main>
        <AppNav v-show="$route.name != 'check_out' && !showFixed && windowWidth > 990" />
        <ResponsiveNav v-show="windowWidth <= 990 && $route.name != 'check_out'" />
        <FixedNav v-show="$route.name != 'check_out' && showFixed && windowWidth <= 990" />
        <AppFooter v-show="$route.name != 'check_out' && windowWidth > 990" />
    </v-layout>
</div>
</template>

<script>
import AppFooter from './AppFooter.vue';
import CartDrawer from './CartDrawer.vue';
import AppNav from './AppNav.vue';
import FixedNav from './FixedNav.vue';
import ResponsiveNav from './ResponsiveNav.vue';
import MenuDrawer from './MenuDrawer.vue';

export default {
    components: {
        AppFooter,
        CartDrawer,
        AppNav,
        FixedNav,
        ResponsiveNav,
        MenuDrawer
    },
    data:()=> ({
        drawer: false,
        windowWidth: 0
    }),
    mounted() {
        this.windowWidth = window.innerWidth;
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
        };
        window.onscroll = () => {
            if(window.scrollY >= 205) {
                this.showFixed = true; 
            } else {
                this.showFixed = false;
            }
        }
    }
}
</script>