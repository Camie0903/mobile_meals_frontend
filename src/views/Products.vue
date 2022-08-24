<template>

  <!-- <input class="SB" type="text" v-model="search" placeholder="Search..." /> -->
  <div class="container">
      <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary add"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Product
    </button>
  <div class="row">
    
    <div class="col" v-for ="product in products" v-bind:key="product.product_id">
    <router-link class="router-text" :to = "{ name: 'SingleProduct', params: { id: product.product_id }}">
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="products.image" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ products.title }}</p>
          <!-- <p class="card-text-event">{{ product.Date }}</p> -->
          <p class="card-text-event">R{{ products.price }}</p>
          <!-- <p class="card-text-event">{{ product.descriptions }}</p> -->
        </div>
      </div>
    </router-link>
    </div>
    </div>
  
    <!-- {{allProducts}} -->
   <!-- <div v-for ="product in filteredProducts"
      :key="product.id"
      :product="product"> </div> -->
  </div>
  <!-- Modal For Adding a product -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createProduct">
            <input
              class="register-form"
              type="text"
              v-model="sku"
              placeholder="sku"
            />
            <input
              class="register-form"
              type="text"
              v-model="name"
              placeholder="name"
            />
            <input
              class="register-form"
              type="text"
              v-model="price"
              placeholder="price"
            />
            <input
              class="register-form"
              type="text"
              v-model="category"
              placeholder="category"
            />
            <input
              class="register-form"
              type="text"
              v-model="image"
              placeholder="image-link"
            />
            <div></div>
            <div class="modal-footer"></div>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Add product</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ProductsCard from "@/components/ProductsCard.vue";
export default {
  // components: { 
  //   ProductsCard,
  //    },
  data() {
    return {
      products: null,
      // search: "",
      // Products:[],
    };
  },

  computed: {
    // filteredProducts() {
      
    //   return this.$store.state.Products?.filter((Product) => {
    //     return Product.name?.toLowerCase().includes(this.search.toLowerCase());
    //   });
    // },
    // allProducts() {
    //   return this.$store.state.Products
    // }
  },
  mounted() {
    fetch("http://localhost:1919/products", {
    })
    .then ((res) => res.json())
    .then((data) => (this.products = data));
    // this.$store.dispatch("getProducts");
  },
};
</script>
<style scoped>
.row {
  /* margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem; */
  min-height:50px;
  min-width: 50px;
}
img.img-fluid{
  height:20rem;
  /* margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem; */
}
.col-md-3 {
    display: flex;
    flex-wrap: wrap;
  gap: 5rem;
  margin-top: 10%;
}
.SB {
  margin-top: 53px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}

a:-webkit-any-link {
    color: black;
    cursor: pointer;
    text-decoration: none;
}

.container {
  margin-top: 15%;
}

.add {
  margin-bottom: 5%;
}
</style>
