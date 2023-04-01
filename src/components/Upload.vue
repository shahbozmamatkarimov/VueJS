<template>
    <div class="upload">
        <form class="text-light py-5">
            <div>
                <h1 class="text-center">Upload your image</h1>
                <label for="uploadimg" id="imgUpload" class="btn btn-outline-primary text-center row py-5"><i
                        class="fa fa-cloud-arrow-down col-12 display-2"></i><i class="col-12 uploadText">Upload
                        image</i></label>
                <input type="file" id="uploadimg" class="form-control d-none" accept="image/*" @change="onChange"
                    required />
                <div id="preview">
                    <img v-if="item.imageUrl" :src="item.imageUrl" />
                </div>
                <div>
                    <label for="title">Title</label><br>
                    <textarea name="text" id="title" class="form-control text-light" placeholder="Image's title"
                        required></textarea>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="author">Description</label>
                    <textarea class="form-control text-light" id="author" rows="4"
                        placeholder="Describe your image"></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-outline-dark float-end p-2 px-5">Next</button>
                </div>
            </div>
        </form>
    </div>
</template>
  
  
<script>
import UploadImageVue from "upload-image-vue";
import "upload-image-vue/dist/lib/upload-image-vue.min.css";
export default {
    name: 'imageUpload',
    data() {
        return {
            item: {
                //...
                image: null,
                imageUrl: null
            }
        }
    },
    methods: {
        onChange(e) {
            const file = e.target.files[0]
            this.image = file
            this.item.imageUrl = URL.createObjectURL(file)
            imgUpload.className = "d-none"
        }
    }
}
</script>

<style scoped>
.upload {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (min-width:360px) {
    form {
        width: 500px !important;
        border: 5px solid #ccc;
        border-radius: 5px;
    }

    form>div{
        margin: 50px;
    }
    img {
        width: 300px;
        height: 200px;
        border-radius: 20px;
    }

    #imgUpload {
        width: 300px;
        height: 200px;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        margin-left: 1px;
    }
}

form {
    width: 80%;
}

img {
    width: 100%;
    height: 200px;
    border-radius: 20px;
}

.uploadText {
    margin-top: -30px;
}

#imgUpload {
    width: 100%;
    height: 200px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-left: 1px;
}

input,
textarea {
    color: white;
    border: 1px solid white;
    background: #101827 !important;
}

textarea:placeholder-shown {
    color: red !important;
}

textarea::-webkit-input-placeholder {
    color: white;
}</style>