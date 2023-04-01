<template>
    <div class="row text-light">
        <div class="col-lg-6 col-12">
            <div class="col-12">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    alt="product">
            </div>
            <div class="row">
                <button class="btn col-12 price"><i class="fa fa-dollar"></i>200</button>
                <div class="userphoto col-1">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="product">
                </div>
                <div class="col-5 px-4">
                    <i>Apple</i><br>
                    <i>24550 subscribes</i>
                </div>
                <div class="btn-group col-6 float-end">
                    <button class="btn btn-primary"><i class="fa-regular fa-thumbs-up"></i><i
                            class="fa-solid fa-thumbs-up d-none"></i> 142</button>
                    <button class="btn btn-primary float-end"><i class="fa-regular fa-thumbs-down"></i><i
                            class="fa-solid fa-thumbs-down d-none"></i> 10</button>
                    <button class="btn btn-primary"><i class="fa-regular fa-share-from-square"></i></button>
                    <button class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                </div>
                <div class="mt-3 p-4">
                    <h6 class="text-secondary">4320 views | 13-05-2018</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, rem corrupti blanditiis ad aliquam labore molestiae
                        maiores! Dolore incidunt qui rerum quia id minima et facilis officia accusantium, sunt tempore
                        vel, officiis hic, laudantium dolor error. Excepturi</p>
                </div>
            </div>
        </div>
        <div class="row col-lg-6 col-12">
            <RouterLink :to="{ name: 'image' }">
                <a v-for="imgs in this.$store.state.filter1" class="thumbnail row" :key="imgs.id"
                    @click="() => open(imgs.id)">
                    <div class="col-6">
                        <img :src="imgs.download_url" alt="Nature" />
                    </div>
                    <div class="col-6">
                        <div class="caption-body p-2">
                            <p class="title">{{ imgs.country }}</p>
                            <p class="text-secondary">{{ imgs.author }}</p>
                            <p class="views1">{{ imgs.width }}K views | {{ imgs.date }}</p>
                        </div>
                    </div>
                </a>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
img {
    width: 100%;
    height: 400px;
}

.price {
    margin-top: -50px;
    width: 98%;
    background: rgba(128, 128, 128, 0.507);
}

.thumbnail img {
    width: 100%;
    height: 200px;
    border-radius: 30px;
    padding: 10px;
}

.userphoto img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>