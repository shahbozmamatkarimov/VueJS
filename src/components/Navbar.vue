<template>
  <nav class="col-lg-3 col-md-4 col-sm-5 col-13 fs-4 text-light" :class="{ 'd-none': this.$store.state.navbar }">
    <RouterLink :to="{ name: 'trending' }">
      <div>
        <span>
          <i class="fa fa-chart-simple"></i>
          Trending
        </span>
        <i class="fa-regular fa-circle-xmark float-end d-block d-sm-none text-primary px-1"></i>
      </div>
    </RouterLink>
    <hr class='w-75' />
    <RouterLink :to="{ name: 'products' }">
      <div>
        <span>
          <i class="fa-sharp fa-solid fa-images"></i>
          Products
        </span>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'new' }">
      <div>
        <span>
          <i class="fa-sharp fa-solid fa-cart-plus"></i>
          New
        </span>
      </div>
    </RouterLink>
    <hr class='w-75' />
    <RouterLink :to="{ name: 'liked' }">
      <div>
        <span>
          <i class="fa-solid fa-thumbs-up"></i>
          Liked
        </span>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'saved' }">
      <div>
        <span>
          <i class="fa fa-history"></i>
          Saved
        </span>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'purchased' }">
      <div>
        <span>
          <i class="fa-solid fa-cart-shopping"></i>
          Purchased
        </span>
      </div>
    </RouterLink>
    <hr class='w-75' />
    <h2 class='p-2 text-primary px-4'><span><i class="fa-solid fa-folder"></i> Subscribe</span></h2>
    <ul class="px-5 subscribe text-light">
      <li>
        Cars
      </li>
      <li>
        Home
      </li>
      <li>
        Instruments
      </li>
      <li>
        Cars
      </li>
      <li>
        Home
      </li>
      <li>
        Instruments
      </li>
      <li>
        Cars
      </li>
      <li>
        Home
      </li>
      <li>
        Instruments
      </li>
    </ul>
    <hr class='w-75' />
    <RouterLink :to="{ name: 'userProducts' }">
      <div class="last" @click="navbar">
        <span>
          <i class="fa-sharp fa-regular fa-image"></i>
          Your products
        </span>
      </div>
    </RouterLink>
  </nav>
  <div>
    <div class="row buttonNavDiv" :class="{ 'd-none': !this.$store.state.navbar }"
      @click="() => this.$store.state.navbar = true">
      <button class="btn buttonNav"><i class="fa-solid fa-greater-than"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 576) {
        this.$store.state.navbar = false;
      }
    });
  },
  data() { },
  methods: {
    navbar() {
      this.$store.state.userNavbar = true;
    }
  }
}
</script>

<style scoped>
div {
  padding: 20px;
  cursor: pointer;
}

.buttonNav {
  height: 100vh;
  width: 50px;
}

.buttonNavDiv {
  background-color: rgba(0, 255, 255, 0.667);
  padding: 0;
}

.buttonNavDiv:hover {
  background-color: rgb(0, 255, 255);
}

.color {
  background-color: rgba(0, 0, 0, 0.568);
  outline: 18px solid rgba(0, 0, 0, 0.568);
  padding-right: 20px;
  border-radius: 5px;
  color: rgb(0, 255, 255);
}

.buttonNav i {
  color: black;
  font-weight: bold;
  font-size: 40px;
}

nav {
  width: 200px;
  font-size: 20px;
}

@media (max-width: 576px) {
  nav {
    width: 100%;
  }
}

a {
  text-decoration: none;
  color: white;
}

div:hover,
a:hover {
  color: aquamarine;
  background-color: black;
  border-radius: 20px;
}

b {
  z-index: 0;
}

hr {
  border: 1px solid white;
}

ul li {
  cursor: pointer;
  padding: 0px 15px;
}

i {
  z-index: 99;
  color: white;
  width: 20px;
}

.subscribe {
  overflow-y: scroll;
  max-height: 90px;
}

ul li:hover {
  background-color: black;
  border-radius: 10px;
  color: aqua;
}

.last {
  margin-bottom: 150px;
}
</style>