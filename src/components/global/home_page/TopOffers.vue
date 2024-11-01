<template>
<div class="top-offers bg-grey-lighten-4 py-lg-7 py-6">
    <v-container fluid>
        <v-row>
            <v-col 
                cols="12" 
                sm="6"
                md="4"
                lg="4" 
                class="py-0 mt-3 mt-lg-0 px-3 pr-lg-6" 
                style="height: 260px;"
            >
                <v-hover v-slot="{isHovering, props}">
                    <div 
                        class="parent overflow-hidden cursor-pointer" 
                        v-bind="props"
                    >
                        <img 
                            src="@/assets/images/playstations.webp" 
                            :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" 
                            class="w-100" 
                            alt="Offer Image"
                        />
                    </div>
                </v-hover>
            </v-col>
            <v-col 
                cols="12" 
                sm="6"
                md="4"
                lg="4" 
                class="py-0 mt-3 mt-lg-0 px-3 pr-lg-6" 
                style="height: 260px;"
            >
                <v-hover v-slot="{isHovering, props}">
                    <div 
                        class="parent overflow-hidden cursor-pointer" 
                        v-bind="props"
                    >
                        <img 
                            src="@/assets/images/headset.webp" 
                            :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" 
                            class="w-100" 
                            alt="Offer Image"
                        />
                    </div>
                </v-hover>
            </v-col>
            <v-col 
                cols="12" 
                sm="6"
                md="4"
                lg="4" 
                class="py-0 mt-3 mt-lg-0 px-3 pr-lg-6" 
                style="height: 260px;"
            >
                <v-hover v-slot="{isHovering, props}">
                    <div 
                        class="parent overflow-hidden cursor-pointer" 
                        v-bind="props"
                    >
                        <img 
                            src="@/assets/images/chairs.webp" 
                            :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" 
                            class="w-100" 
                            alt="Offer Image"
                        />
                    </div>
                </v-hover>
            </v-col>
        </v-row>
        <v-row class="mt-lg-9 mt-3">
            <v-col cols="12" sm="6" class="mt-3 pr-3 pr-sm-5 py-0">
                <v-hover v-slot="{isHovering, props}">
                    <div 
                        class="parent overflow-hidden pr-lg-2 pr-0" 
                        v-bind="props"
                    >
                        <img 
                            src="@/assets/images/iphones.webp" 
                            :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" 
                            class="w-100" 
                            alt="Offer Image"
                        />
                    </div>
                </v-hover>
            </v-col>
            <v-col cols="12" sm="6" class="mt-3 pl-sm-5 pl-3 py-0">
                <v-hover v-slot="{isHovering, props}">
                    <div 
                        class="parent overflow-hidden pl-lg-2 pl-0" 
                        v-bind="props"
                    >
                        <img 
                            src="@/assets/images/laptops.webp" 
                            :style="`transition: 0.5s all ease-in-out; height: 100%; scale: ${isHovering ? 1.05 : 1}`" 
                            class="w-100" 
                            alt="Offer Image"
                        />
                    </div>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<style lang="scss" scoped>
.parent {
    height: 100%; 
    border-radius: 7px;
}
</style>