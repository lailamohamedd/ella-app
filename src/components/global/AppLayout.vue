<template>
<div class="layout">
    <v-layout class="position-relative">
        <CartDrawer />
        <v-main style="padding-top: 150px;">
            <slot></slot>
        </v-main>
        <AppNav />
        <FixedNav />
       <AppFooter />
    </v-layout>
</div>
</template>

<script>
import AppFooter from './AppFooter.vue';
import CartDrawer from './CartDrawer.vue';
import AppNav from './AppNav.vue';
import FixedNav from './FixedNav.vue';

export default {
    components: {
        AppFooter,
        CartDrawer,
        AppNav,
        FixedNav
    },
    data:()=> ({
        drawer: false
    })
}
</script>