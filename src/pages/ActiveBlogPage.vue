<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)

</script>


<template>
  <section class="container">
    <div class="row shadow my-3 border border-dark border-thick">
      <div class="col-md-8 py-2">
        <div class="d-flex ">
          <div class="w-100">
            <img :src="blog.creator.picture" alt="" class="profile-img">
            <h3>{{ blog.creator.name }}</h3>
            <hr>
            <div>
              <p>{{ blog.title }}</p>
              <p>{{ blog.body }}</p>
              <hr>
              <div class="d-flex justify-content-between">
                <p>{{ blog.createdAt.toLocaleDateString() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 pe-0">
        <img :src="blog.imgUrl" :alt="'a picture related to ' + blog.title" class="blog-img w-100">
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.profile-img {
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  height: 4em;
}

.blog-img {
  object-fit: cover;
  object-position: center;
  min-height: 100%;
}
</style>