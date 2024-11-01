<template>
<div class="banner">
    <div class="parent">
        <img 
            src="@/assets/images/banner-bg.webp" 
            alt="product image"
        />
        <div class="cont">
            <h3><span>Huge Saving</span> on UHD Television</h3>
            <p class="hint">Sale up to 70% off on selected items*</p>
            <v-btn 
                variant="outlined"
                class="my-3 mx-10"
                flat
                size="large"
                width="150px"
            >
                Shop Now
            </v-btn>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.banner {
    .parent {
        height: 390px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .cont {
            color: #fff;
            padding: 40px 0 0 100px;
            position: absolute;
            left: 40px;
            top: 20px;
            width: 600px;

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
            .v-btn {
                border-radius: 30px; 
                text-transform: none;
            }
        }
    }
}
// Media Queries
@media (max-width: 1024) {
    .cont {
            left: -20px;
    }
}
@media (max-width: 992px) {
    .banner {
        .parent {
            .cont {
                h3 {
                   font-size: 35px; 
                }
                width: 500px;
                left: -45px;
            }
        }
    }
}
@media (max-width: 767px) {
    .banner {
        .parent {
            height: 320px;
            .cont {
                padding-left: 20px;
                h3 {
                   font-size: 30px; 
                }
                width: 500px;
                left: 0;
                .hint {
                    font-size: 14px;
                }
            }
        }
    }
}
@media (max-width: 580px) {
    .banner {
        .parent {
            height: 250px;
            .cont {
                padding-left: 20px;
                padding-top: 20px;
                h3 {
                   font-size: 24px; 
                }
                width: 74%;
                left: 0;
                .hint {
                    font-size: 12px;
                }
                .v-btn {
                    height: 30px !important;
                    width: 130px !important;
                    font-size: 11px !important;
                }
            }
        }
    }
}
</style>