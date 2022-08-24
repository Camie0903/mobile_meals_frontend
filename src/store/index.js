import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null,
    token: null,
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state,product) => {
      state.product = product;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },

    // Login
    login: async (context, payload) => {
      let res = await fetch("http://localhost:1919/users/login", {
        method: 'POST',
        mode:"no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      let data = await res.json()

      if(data.token){
        context.commit('setToken', data.token)

        // Verify token
        fetch('http://localhost:1919/users/users/verify', {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token
          }
        }).then((res) => res.json()).then((data) => {
          context.commit('setusers', data.users)
        })
      }
      else {
        alert(data)
      }
    },
    
    // REGISTER USER
    register: async (context, users) => {
      fetch("http://localhost:1919/users/register", {
        method: "POST",
        body: JSON.stringify(users),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    },

     // Get Products
     getProducts: async (context) => {
      fetch("http://localhost:1919/products")
        .then((res) => res.json())
        .then((products) => {context.commit("setproducts", products)});
    },

    // Delete product
    deleteProduct: async (context, product_id) => {
      fetch("http://localhost:1919/products/" + product_id, {
        method: "DELETE",
      }).then(() => context.dispatch("getProducts"));
    },

    // Add new product
    createProduct: async (context, product) => {
      fetch("http://localhost:1919/products/add_product", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getProducts"));
    },

      // Update product
      updateProduct: async (context, product) => {
        fetch("http://localhost:1919/products/" + product.product_id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then(() => context.dispatch("getProducts"));
      },
  },
  modules: {
  }
})
