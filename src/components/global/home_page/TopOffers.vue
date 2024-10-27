<template>
<div class="top-offers bg-grey-lighten-4 py-7">
    <v-container fluid>
        <v-row>
            <v-col cols="4" class="py-0 pr-6" style="height: 260px;">
                <v-hover v-slot="{isHovering, props}">
                    <div class="parent overflow-hidden cursor-pointer" style="height: 100%; border-radius: 7px;" v-bind="props">
                        <img src="@/assets/images/playstations.webp" :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" class="w-100" alt="">
                    </div>
                </v-hover>
            </v-col>
            <v-col cols="4" class="py-0 pr-6" style="height: 260px;">
                <v-hover v-slot="{isHovering, props}">
                    <div class="parent overflow-hidden cursor-pointer" style="height: 100%; border-radius: 7px;" v-bind="props">
                        <img src="@/assets/images/headset.webp" :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" class="w-100" alt="">
                    </div>
                </v-hover>
            </v-col>
            <v-col cols="4" class="py-0 pr-6" style="height: 260px;">
                <v-hover v-slot="{isHovering, props}">
                    <div class="parent overflow-hidden cursor-pointer" style="height: 100%; border-radius: 7px;" v-bind="props">
                        <img src="@/assets/images/chairs.webp" :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" class="w-100" alt="">
                    </div>
                </v-hover>
            </v-col>
        </v-row>
        <v-row class="mt-9">
            <v-col cols="6" class="mt-3 pr-3 py-0">
                <v-hover v-slot="{isHovering, props}">
                    <div class="parent overflow-hidden pr-2" style="height: 100%; border-radius: 7px;" v-bind="props">
                        <img src="@/assets/images/iphones.webp" :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" class="w-100" alt="">
                    </div>
                </v-hover>
            </v-col>
            <v-col cols="6" class="mt-3 pl-3 py-0">
                <v-hover v-slot="{isHovering, props}">
                    <div class="parent overflow-hidden pl-2" style="height: 100%; border-radius: 7px;" v-bind="props">
                        <img src="@/assets/images/laptops.webp" :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" class="w-100" alt="">
                    </div>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>