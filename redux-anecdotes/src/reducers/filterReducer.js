const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_FILTER':
      return action.payload
    default:
      return state
  }
}

export const searchFilter = (searchValue) => {
  return {
    type: 'SEARCH_FILTER',
    payload: searchValue
  }
}

export default filterReducer
