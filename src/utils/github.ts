import axios from "axios"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserEvents = async (username: string, page: number, limit: number): Promise<any> => {
  return await axios.get(`https://api.github.com/users/${username}/events?page=${page}&per_page=${limit}`)
}
