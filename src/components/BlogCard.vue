<script setup>
import { Blog } from '@/models/Blog.js';
import { blogsService } from '@/services/BlogsService.js';

defineProps({
  blogProps: { type: Blog, required: true }
})

function setActiveBlog(blogProps) {
  blogsService.setActiveBlog(blogProps)
}
</script>


<template>
  <div class="row shadow my-3 border border-dark border-thick">
    <div class="col-md-8 py-2">
      <div class="d-flex ">
        <div class="w-100">
          <RouterLink :to="{ name: 'Profile', params: { profileId: blogProps.creatorId } }">
            <img :src="blogProps.creator.picture" alt="" class="profile-img">
          </RouterLink>
          <h3>{{ blogProps.creator.name }}</h3>
          <hr>
          <div>
            <p>{{ blogProps.title }}</p>
            <p>{{ blogProps.first30 }}.....</p>
            <hr>
            <div class="d-flex justify-content-between">
              <p>{{ blogProps.createdAt.toLocaleDateString() }}</p>
              <RouterLink :to="{ name: 'Active Blog' }">
                <button @click="setActiveBlog(blogProps)" class="btn btn-warning">Go to Blog</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 pe-0">
      <img :src="blogProps.imgUrl" :alt="'a picture related to ' + blogProps.title" class="blog-img w-100">
    </div>
  </div>
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