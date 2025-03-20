<script setup>
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

onMounted(() => {
  getProfileById()
})


const route = useRoute()

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

</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-md-10">

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>