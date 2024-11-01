<template>
<div class="quality-features py-13 bg-grey-lighten-2">
    <v-container fluid>
        <v-row>
            <v-col lg="3" md="3" sm="6" cols="12" v-for="card in cards" :key="card.title" class="px-2">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card 
                      v-bind="props"
                      class="text-center d-flex align-center justify-center cursor-pointer px-4" 
                      height="300" 
                      :elevation="isHovering ? 2 : 0"
                      :color="isHovering ? 'blue-lighten-4' : 'white'">
                        <div class="parent">
                            <span v-html="card.svg"></span>
                            <v-card-title class="card-title">{{ card.title }}</v-card-title>
                            <p>{{ card.desc }}</p>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        cards: [
            {
                title: "quality and saving",
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                svg: `<svg aria-hidden="true" style="width: 60px" focusable="false" data-prefix="fas" data-icon="star-half-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512" class="svg-inline--fa fa-star-half-alt fa-w-17 fa-3x"><defs>           <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">                           <stop offset="0%" stop-color="#6423d1">                              </stop>              <stop offset="100%" stop-color="#a215e1">                              </stop>          </linearGradient>       </defs><path fill="url('#logo-gradient')" d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z" class=""></path></svg>`
            },
            {
                title: "global warehouses",
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                svg: `<svg aria-hidden="true" style="width: 60px" focusable="false" data-prefix="fas" data-icon="warehouse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-warehouse fa-w-20 fa-3x"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#6423d1">                              </stop><stop offset="100%" stop-color="#a215e1">                           </stop></linearGradient></defs><path fill="url('#logo-gradient')" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z" class=""></path></svg>`
            },
            {
                title: "fast shipping",
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                svg: `<svg aria-hidden="true" style="width: 60px" focusable="false" data-prefix="fas" data-icon="shipping-fast" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-shipping-fast fa-w-20 fa-3x"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#6423d1">                              </stop><stop offset="100%" stop-color="#a215e1">                           </stop></linearGradient></defs><path fill="url('#logo-gradient')" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" class=""></path></svg>`
            },
            {
                title: "payment security",
                desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                svg: `<svg aria-hidden="true" style="width: 60px" focusable="false" data-prefix="fas" data-icon="shield-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-shield-alt fa-w-16 fa-3x"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#6423d1">                              </stop><stop offset="100%" stop-color="#a215e1">                           </stop></linearGradient></defs><path fill="url('#logo-gradient')" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" class=""></path></svg>`
            },
        ]
    })
}
</script>

<style scoped>
.card-title {
    font-weight: 700; 
    text-transform: uppercase; 
    font-size: 16px;
}
</style>