<template>
    <aside class="row aside">
        <div class="col-lg-6 col-12 d-none d-md-block"></div>
        <div class="col-lg-5 col-12" id="imgAside">
            <img src="http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg"
                alt="Nature" class="w-100" />
            <button class="play"><i class="fa fa-play"> Play all</i></button>
            <button class="play bg-primary"><i class="fa fa-trash"> Delete all</i></button>
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
    </aside>
</template>

<script>
export default {
    created() {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 992) {
                imgAside.className = "col-lg-5 col-12"
            } else {
                imgAside.className = "col-lg-5 col-12 position-fixed"
            }
        });
    },
    methods: {
        open(e) {
            console.log(e);
        }
    },
    mounted() {
        this.$store.commit('welcome');

        if (window.innerWidth < 992) {
            imgAside.className = "col-lg-5 col-12"
        } else {
            imgAside.className = "col-lg-5 col-12 position-fixed"
        }
    }
}
</script>

<style>
.thumbnail img {
    width: 100%;
    height: 200px;
    border-radius: 30px;
    padding: 10px;
}

a {
    text-decoration: none;
}

.play {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}

.aside {
    overflow: hidden;
}

.thumbnail {
    cursor: pointer;
    font-size: 20px;
}

.autoplay {
    border: 5px solid black;
}

.thumbnail img {
    animation: animate 2s ease;
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
