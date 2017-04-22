import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import collections from "./collectionsReducer"
import searchInput from "./searchInputReducer"


export default combineReducers({
  searchInput,
  collections,
  tweets,
  user,
})
