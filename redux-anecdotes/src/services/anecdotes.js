import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content,
    votes: 0
  }
  const response = await axios.post(baseURL, object)
  return response.data
}

const update = async (anecdote) => {
  const { id, content, votes } = anecdote
  const updateObject = { content, id, votes: votes + 1 }
  const response = await axios.put(`${baseURL}/${id}`, updateObject)
  return response.data
}

const anecService = { getAll, createNew, update }

export default anecService
