<template>
<div class="order-success">
    <v-dialog 
        v-model="dialog" 
        persistent 
        width="40%"
    >
        <v-card class="text-center py-7">
            <div class="text-center">
                <v-icon 
                    size="75" 
                    class="check-icon rounded-circle" 
                    color="green"
                >
                    mdi-check
                </v-icon>
            </div>
            <v-card-title class="order-title">Order Placed Successfully</v-card-title>
            <v-card-text class="order-text">
                itaque earum consequatur quae dicta eveniet dolorem eaque rem molestias, sit atque modi deleniti similique quam expedita voluptates.
            </v-card-text>
            <v-card-actions class="mt-5">
                <v-btn 
                    class="mx-auto" 
                    variant="elevated" 
                    @click="resetData" 
                    color="blue"
                >
                    Got it!
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import { cartStore } from '@/stores/cart';
import { mapActions } from 'pinia';
export default {
    data: () => ({
        dialog: false,
    }),
    props: {
        popup: {
            type: Boolean
        }
    },
    watch: {
        dialog(newVal) {
            if(!newVal) {
                setTimeout(() => {
                    this.$emit("close_popup");
                }, 200);
            }
        }
    },
    methods: {
        ...mapActions(cartStore, ["resetItem"]),
        resetData() {
            this.resetItem();
            this.dialog = false;
            this.$router.push({ name: "home" })
        }
    },
    mounted() {
        this.dialog = this.popup;
    }
}
</script>

<style lang="scss">
.check-icon {
    border: 1px solid green;
}
.order-title {
    font-size: 30px;
    font-weight: bold;
    color: #484848;
}
.order-text {
    font-size: 17px;
    color: #494949;
}
@media (max-width: 767px) {
    .v-overlay__content {
        width: 90% !important;
    }
}
</style>