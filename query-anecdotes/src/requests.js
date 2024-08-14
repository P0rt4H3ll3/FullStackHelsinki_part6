import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => axios.get(baseURL).then((res) => res.data)

export const createAnec = (newAnec) =>
  axios.post(baseURL, newAnec).then((res) => res.data)

export const updateAnec = (toUpdateAnec) => {
  const response = axios
    .put(`${baseURL}/${toUpdateAnec.id}`, toUpdateAnec)
    .then((res) => res.data)
  return response
}
