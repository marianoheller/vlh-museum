import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import collections from "./collectionsReducer"

export default combineReducers({
  collections,
  tweets,
  user,
})
