<template>
  <!-- {{ $route.meta.layout }} -->
  <header class="row bg-secondary px-2">
    <div class="bg-primary title" :class="{ 'col-0': this.$store.state.navbar }">
      <div class="row py-3">
        <div class="col-11 row">
          <RouterLink :to="{ name: 'products' }" class="row">
            <div class="col-1">
              <button class="btn btn-primary">
                <i class="fa fa-home float-start"></i>
              </button>
            </div>
            <div class="col-10">
              <i class="px-3 h5 text-dark">MarketApp</i>
            </div>
          </RouterLink>
        </div>
        <div class="col-1">
          <i class="dropdown float-end">
            <button class="btn btn-primary" @click="dropdown1">
              <i class="fa fa-gear float-end"></i>
            </button>
            <ul class="bg-dark d-none" id="dropdown1">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <hr>
              <li>Separated link</li>
            </ul>
          </i>
        </div>
      </div>
    </div>

    <div class="col-lg-9 col-md-8 col-sm-7" id='searchNav' :class="{ 'd-none': !this.$store.state.navbar }">
      <div class="row">
        <div class="col-sm-10 col-8">
          <label for="search"><i class="fa-solid fa-search mx-2 d-none d-md-block"></i></label>
          <input type="text" id="search" @input="search" class="px-3 p-2 my-2" placeholder="Search">
          <i class="fa-solid fa-microphone px-2"></i>
          <!-- <i class="fa fa-moon py-3 d-none d-lg-inline-block"></i>
                  <i class="fa fa-sun text-light py-3 d-none d-lg-inline-block"></i> -->
        </div>
        <div class="col-sm-2 col-4 float-end pt-1">
          <div class="dropdown float-end">
            <button class="btn btn-secondary" @click="dropdown">
              <img src="https://static.fnac-static.com/multimedia/Images/FD/Comete/114332/CCP_IMG_ORIGINAL/1481839.jpg"
                alt="UserPhoto" class="m-1 bg-primary UserPhoto">
            </button>
            <ul class="d-none" id="dropdown">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <hr>
              <li>Separated link</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="row">
    <div class="col-lg-2 col-md-2 col-4" @click="openNavbar"
      :class="{ 'openNav': this.$store.state.navbar, 'navBar': !this.$store.state.navbar }">
      <component :is="$route.meta.layout" @click="(e) => navbar1(e)" />
      <!-- <component /> -->
    </div>
    <div class="col-lg-10 col-md-10 col-sm-8 sectionW" :class="{ 'closeNav': this.$store.state.navbar }">
      <section id="section">
        <div class="row">
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
window.addEventListener('click', () => {
  section.scrollTo(0, 0)
})

export default {
  data() {
    return {}
  },
  methods: {
    navbar1(val) {
      let color = document.querySelector(".color")
      if (color) {
        color.classList.remove('color');
      }
      let span = val.target.querySelector("span")
      if (span) {
        span.className = "color"
      }
      if (val.target.innerHTML == ' Your products') {
        return
      }
      this.$store.state.title = val.target.innerHTML;
      this.$store.commit('search');
    },
    openNavbar() {
      if (window.innerWidth <= 576) {
        this.$store.state.navbar = !this.$store.state.navbar
      }
    },
    dropdown() {
      let ul = dropdown.className.match('d-block');
      if (ul) {
        dropdown.className = 'bg-dark d-none'
      } else {
        dropdown.className = 'dropdown-menu dropdown-menu-dark d-block'
      }
    },
    dropdown1() {
      let ul = dropdown1.className.match('d-block');
      if (ul) {
        dropdown1.className = 'bg-dark d-none'
      } else {
        dropdown1.className = 'dropdown-menu dropdown-menu-dark d-block'
      }
    },
    search(e) {
      this.$store.state.input = e.target.value;
      this.$store.commit('search');
    }
  },
}
</script>

<style scoped>
.openNav {
  height: 100vh;
  width: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: -10px !important;
  padding: 0;
}

@media (min-width: 577px) {
  #searchNav {
    display: block !important;
  }
}

@media (max-width: 480px) {
  .openNav {
    margin-right: -10px !important;
    margin-left: 10px !important;
  }
}

@media (max-width:576px) {
  .closeNav {
    width: 97% !important;
  }
}

input {
  width: 70%;
  border-radius: 25px;
  box-shadow: 5px 5px 5px black;
}

@media (max-width:1150px) {
  .sectionW {
    padding-left: 50px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .sectionW {
    padding-left: 70px;
  }
}

@media (min-width: 576px) and (max-width: 767.9px) {
  .sectionW {
    padding-left: 5px !important;
  }
}

@media (max-width: 576px) {
  .sectionW {
    width: 100%;
  }

  .title {
    width: 100% !important;
  }

  .navBar {
    width: 100%;
    display: block;
  }
}

input::selection {
  background-color: #ff5252;
  background-color: var(--input-accent-on-background, #ff5252);
}

input:hover {
  box-shadow: none;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.UserPhoto {
  height: 30px !important;
  width: 30px !important;
  padding: 0;
  margin: 0;
  border: none;
}

nav {
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
}

.dropdown {
  z-index: 2;
  margin-right: -25px;
}

ul li {
  padding: 5px 20px;
  margin: 5px;
}

ul {
  margin-left: -105px;
}

ul li:hover {
  background: grey;
  color: blue;
  border-radius: 10px;
}

section {
  padding-bottom: 100px;
}

.title {
  width: 200px;
}

@media (max-width: 1450px) {
  select {
    display: none;
  }
}

@media (max-width: 576px) {
  .close {
    width: 44px;
    float: left;
    /* overflow-y: hidden; */
    transition: 1s;
  }

  .sectionW {
    width: 90%;
  }

  .open {
    width: 100%;
    transition: 1s;
  }
}

@media (max-width: 420px) {
  .sectionW {
    width: 85%;
  }
}
</style>
