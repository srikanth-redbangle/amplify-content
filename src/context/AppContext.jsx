import { createContext, useContext, useReducer, useState } from 'react'
import { ACTIONS } from './action'
export const AppStateContext = createContext(null)
export const AppDispatchcontext = createContext(null)

const initialState = {
  cursorRefresh: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CURSOR_REFRESH:
      return {
        ...state,
        cursorRefresh: !state.cursorRefresh,
      }

    default:
      return state
  }
}
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchcontext.Provider value={dispatch}>
        {children}
      </AppDispatchcontext.Provider>
    </AppStateContext.Provider>
  )
}

//hooks
export const useAppState = () => useContext(AppStateContext)
export const useAppDispatch = () => useContext(AppDispatchcontext)
