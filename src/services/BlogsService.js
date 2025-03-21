import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blog.js"
import { AppState } from "@/AppState.js"

class BlogsService {
  async getBlogsByProfileId(profileId) {
    const response = await api.get(`api/blogs?creatorId=${profileId}`)
    logger.log('heres your blogs', response.data)


  }
  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log(response.data)
    const blogs = response.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
  }

  setActiveBlog(blogProps) {
    AppState.activeBlog = blogProps
  }
}


export const blogsService = new BlogsService()
