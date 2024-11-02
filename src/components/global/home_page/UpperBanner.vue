<template>
<div class="banner">
    <div class="parent">
        <!-- <img 
            src="@/assets/images/banner.jpg" 
            alt="product image"
        /> -->
        <div class="cont d-flex justify-center text-center align-center flex-column">
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
        background-image: url("@/assets/images/banner.webp" );
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding-top: 50px;
        // img {
        //     width: 100%;
        //     height: 100%;
        //     object-fit: cover;
        // }

        .cont {
            color: #fff;
            padding: 40px;
            // position: absolute;
            // left: auto;
            // top: 20px;
            margin: 0 auto;
            width: 60%;
            background-color: #00000085;

            h3 {
                font-size: 45px;
                font-weight: 900;

                span {
                    color: #7aa7d8;
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
// @media (max-width: 1024) {
//     .cont {
//             left: -20px;
//     }
// }
@media (max-width: 1415px) and (min-width: 993px) {
    .banner {
        .parent {
            .cont {
                h3 {
                   font-size: 35px; 
                }
                width: 70%;
                // width: 500px;
                // left: -45px;
            }
        }
    }
}
@media (max-width: 992px) {
    .banner {
        .parent {
            .cont {
                h3 {
                   font-size: 35px; 
                }
                // width: 500px;
                // left: -45px;
            }
        }
    }
}
@media (max-width: 767px) {
    .banner {
        .parent {
            height: 320px;
            padding-top: 30px;
            .cont {
                padding-left: 20px;
                h3 {
                   font-size: 30px; 
                }
                width: 80%;
                // left: 0;
                padding: 20px;
                .hint {
                    font-size: 14px;
                    margin: 10px 0;
                }
            }
        }
    }
}
@media (max-width: 580px) {
    .banner {
        .parent {
            padding-top: 25px;
            height: 250px;
            .cont {
                padding-left: 20px;
                padding-top: 20px;
                h3 {
                   font-size: 24px; 
                }
                width: 90%;
                // left: 0;
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