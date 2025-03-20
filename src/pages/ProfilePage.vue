<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

onMounted(() => {
  getProfileById()
  getBlogsByProfileId()
})



const route = useRoute()

const profile = computed(() => AppState.activeProfile)

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error, 'Could not get account')
    logger.error('COULD NOT GET ACCOUNT', error)
  }
}
async function getBlogsByProfileId() {
  try {
    const profileId = route.params.profileId
    await blogsService.getBlogsByProfileId(profileId)
  }
  catch (error) {
    Pop.error(error)
    logger.error('could not get Blogs for this user', error)
  }
}
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div v-if="profile" class="d-flex flex-column">
          <div class="d-flex justify-content-center py-3 profile-bg"
            :style="{ backgroundImage: `url(${profile.coverImg})` }">
            <img class="profile-img" :src="profile.picture" :alt="`${profile.name}'s profile picture`">
            <div>
              <h2>{{ profile.name }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row">
          <BlogCard />
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.profile-img {
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  height: 40dvh;
}

.profile-bg {
  background-size: cover;
  background-position: center;
}
</style>