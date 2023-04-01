<template>
  <nav class="col-lg-3 col-md-4 col-sm-5 col-13 fs-4 text-light" :class="{ 'd-none': this.$store.state.navbar }">
    <RouterLink :to="{ name: 'trending' }">
      <div class="text-center bg-secondary p-0 m-0 p-2 user">
        <span>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="myPhoto"
            class="myPhoto w-100 p-3">
        </span>
        <i>admin@gmail.com</i>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'trending' }">
      <div>
        <span>
          <i class="fa-sharp fa-regular fa-image"></i>
          Your products
        </span>
        <i class="fa-regular fa-circle-xmark float-end d-block d-sm-none text-primary px-1"></i>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'new' }">
      <div>
        <span>
          <i class="fa-solid fa-chart-column"></i>
          Statistics
        </span>
      </div>
    </RouterLink>
    <hr class='w-75' />
    <RouterLink :to="{ name: 'upload' }">
      <div>
        <span>
          <i class="fa fa-cloud-arrow-down"></i>
          Upload
        </span>
      </div>
    </RouterLink>
    <hr class='w-75' />
    <RouterLink :to="{ name: 'profile' }">
      <div>
        <span>
          <i class="fa fa-id-card"></i>
          Profile
        </span>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'liked' }">
      <div>
        <span>
          <i class="fa-solid fa-dollar"></i>
          Earn
        </span>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'userProducts' }">
      <div class="fixed-bottom settings">
        <span>
          <i class="fa fa-gear"></i>
          Settings
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
  methods: {}
}
</script>

<style scoped>
div {
  padding: 20px;
  cursor: pointer;
}

.myPhoto {
  height: 100px;
  border-radius: 50%;
}

.settings {
  background: #101827;
  width: 195px;
}

.settings:hover {
  border-radius: 0;
}

@media(max-width: 576px) {
  .settings {
    width: 100%;
  }
}

.user:hover {
  border-radius: 0;
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
  padding-right: 40px;
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
  margin-bottom: 90px;
}
</style>