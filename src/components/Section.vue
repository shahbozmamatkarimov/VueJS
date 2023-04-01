<template>
    <div class="dropdown text-light position-fixed px-4">
        <btn class="dropdown-toggle btn btn-primary" @click="toggleDropDown" v-click-outside="closeDropDown">
            <i class="fa fa-search"></i>Type of search
        </btn>
        <div class="position-fixed text-dark bg-secondary p-4 form" :class="{ 'd-none': isOpen }">
            <div>
                <input type="radio" name="1" id="name">
                <label for="name">Name</label>
            </div>
            <div>
                <input type="radio" name="1" id="name">
                <label for="name">Country</label>
            </div>
            <div>
                <input type="radio" name="1" id="name">
                <label for="name">Price</label>
            </div>
            <div>
                <input type="radio" name="1" id="name">
                <label for="name">City</label>
            </div>
        </div>
    </div>
    <div class="options pt-5 position-fixed col-lg-10 col-md-10 col-sm-8 mx-4">
        <button>furniture</button>
        <button>dress</button>
        <button>build</button>
        <button>education</button>
        <button>work</button>
        <button>master</button>
        <button>tools</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>tosh</button>
        <button>ayiqbjdhsb</button>
    </div>
    <div class="pt-5 mt-5"></div>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 text-light images" v-for="imgs in this.$store.state.filter1">
            <div class="thumbnail" :key="imgs.id" @click="() => open(imgs.id)">
                <RouterLink :to="{ name: 'image' }">
                    <a>
                        <img :src="imgs.download_url" alt="Nature" class="w-100" />
                        <div class="caption row">
                            <div class="caption-image p-2 col-md-4 col-3 d-sm-block d-none">
                                <img :src="imgs.download_url" alt="user" class="userPhoto float-end" />
                            </div>
                            <div class="caption-body p-2 col-sm-8 col-12 px-sm-0 px-4">
                                <p class="title">{{ imgs.country }}</p>
                                <p class="text-secondary description">{{ imgs.author }}</p>
                                <p class="views">{{ imgs.width }}K views | {{ imgs.date }}</p>
                            </div>
                        </div>
                    </a>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: true,
        }
    },
    methods: {
        open(e) {
            console.log(e);
        },
        toggleDropDown() {
            this.isOpen = !this.isOpen;
        },
        closeDropDown() {
            this.isOpen = true;
        },
    },
    mounted() {
        this.$store.commit('welcome');
    }
}
</script>

<style>
.thumbnail a>img {
    width: 100%;
    height: 250px;
    border-radius: 30px;
    padding: 10px;
}

input[type="radio"] {
    width: 20px;
    height: 20px;
}

label {
    padding: 0 10px;
    font-weight: bold;
}

.thumbnail {
    cursor: pointer;
}

.thumbnail img {
    animation: animate 2s ease;
}

.userPhoto {
    width: 80px !important;
    height: 80px !important;
    border-radius: 50% !important;
}

.thumbnail .caption-body {
    animation: animate 3s ease;
}

@keyframes animate {
    from {
        transform: translateY(400px);
        opacity: 0.5;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.userPhoto {
    width: 100%;
    height: 72px;
    border-radius: 50%;
    margin: 0;
}

.caption-body .title {
    display: -webkit-box;
    max-height: 60px;
    margin: 0;
    overflow: hidden;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.options {
    display: flex;
    overflow-x: auto;
    padding: 10px 0;
    padding-right: 100px;
    background: transparent;
}

.options button {
    border-radius: 10px;
    padding: 5px 10px;
    background: rgba(128, 128, 128, 0.397);
    margin: 0 5px;
}

.options {
    background: #0d1420;
}

.dropdown {
    z-index: 1;
    background: #0d1420;
}

.views,
.description {
    display: -webkit-box;
    max-height: 25px;
    margin: 0;
    overflow: hidden;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
</style>
