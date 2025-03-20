<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()

}
)

async function getBlogs() {
  try {
    await blogsService.getBlogs()
    logger.log('getting blogs')
  }
  catch (error) {
    Pop.error(error);
    logger.log(' could not get blogs', error)
  }

}

</script>

<template>
  <section class="container">
    <div class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-12">
        <BlogCard :blogProps="blog" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
