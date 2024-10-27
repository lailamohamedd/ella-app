<template>
<div class="banner">
    <div class="parent">
        <v-container>
            <v-row>
                <v-col cols="6">
                    <div class="cont">
                        <h3><span>Huge Saving</span> on UHD Television</h3>
                        <p class="hint">Sale up to 70% off on selected items*</p>
                        <v-btn 
                            variant="outlined"
                            class="my-3 mx-10"
                            flat
                            size="large"
                            width="150px"
                            style="border-radius: 30px; text-transform: none;"
                            >Shop Now</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</div>
</template>

<style scoped lang="scss">
.banner {
    .parent {
        height: 390px;
        background-image: url(@/assets/images/banner-bg.jpg);
        background-size: cover;
        // background-position: -60px top;
        .cont {
            color: #fff;
            padding: 40px 0 0 100px;
            h3 {
                font-size: 45px;
                font-weight: 900;
                span {
                    color: rgb(88, 239, 219);
                }
            }
            .hint {
                margin: 20px 0;
            }
        }
    }
}
</style>