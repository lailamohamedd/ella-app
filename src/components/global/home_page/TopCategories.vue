<template>
<div class="top_cat">
    <div class="cyber-banner">
        <img src="@/assets/images/cyber-banner.webp" class="w-100" alt="image category section" />
    </div>
    <div class="categories pt-10">
        <div class="title d-flex justify-center align-center px-5">
            <h2 class="text-center flex-grow-1" style="font-weight: 900; font-size: 20px;">Top Categories</h2>
            <a href="#">Shop All</a>
        </div>
        <v-container fluid>
            <v-row>
                <v-col cols="2" v-for="cat in categories" :key="cat.title">
                    <v-card class="text-center" elevation="0">
                        <v-hover v-slot="{ isHovering, props }">
                            <div class="img-parent overflow-hidden" style="width: 100%; height: 170px;">
                                <img :src="cat.image" height="100%" v-bind="props" width="100%"
                                :style="`cursor: pointer; transition: 0.5s all ease-in-out; scale: ${ isHovering ? 1.05 : 1}`" alt="product image" />
                            </div>
                        </v-hover>
                        <v-card-text>{{ cat.title }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</div>
</template>

<script>
export default {
    data:() => ({
        categories: [
            {
                title: "Mobile Phones",
                image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
            },
        ]
    })
}
</script>