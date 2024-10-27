import { defineStore } from "pinia";
import axios from "axios"

export const productsModule = defineStore("productsModule", {
    state: () => ({
        FlashDeals: [],
        newProducts: [],
        fragrances: [],
        furniture: [],
        groceries: [],
        categoryProducts:[],
        singleProduct: "",
        categories: [
            {
                title: 'beauty',
                route: 'beauty',
            },
            {
                title: 'fragrances',
                route: 'fragrances',
            },
            {
                title: 'furniture',
                route: 'furniture',
            },
            {
                title: 'groceries',
                route: 'groceries',
            },
        ]
    }),
    actions: {
        async getProducts() {
            await axios
                .get("https://dummyjson.com/products")
                .then((res) => {
                    this.newProducts = res.data.products.filter(
                        (el) => el.category === 'beauty'
                    );
                    this.FlashDeals = res.data.products.slice(0,8);
                    this.fragrances = res.data.products.filter(
                        (el) => el.category === 'fragrances'
                    );
                    this.furniture = res.data.products.filter(
                        (el) => el.category === 'furniture'
                    );
                    this.groceries = res.data.products.filter(
                        (el) => el.category === 'groceries'
                    );
                })
                .catch((err) => console.log(err));
        },
        async getProductsByCategory(category) {
            await axios
               .get(`https://dummyjson.com/products/category/${category}?limit=20`)
               .then((res) => this.categoryProducts = res.data);
        },
        async getSingleProduct(productId) {
            this.singleProduct = "";
            await axios
               .get(`https://dummyjson.com/products/${productId}`)
               .then((res) => {
                this.singleProduct = res.data;
               }
            );
        }
    }
})