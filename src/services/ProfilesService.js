import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {

  async getProfileById(profileId) {
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('here is the profile you want', response.data)
  }

}

export const profilesService = new ProfilesService()