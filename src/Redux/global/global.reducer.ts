import { IGlobalState, INITIAL_GLOBAL_STATE } from '../app.state'
import { GLOBAL_ACTIONS_CONST } from './global.actions'

export const globalReducer = (lastState: IGlobalState, action: any): IGlobalState => {
  // console.log('action ? ', action)

  if (!lastState) return INITIAL_GLOBAL_STATE

  switch (action.type) {
    case GLOBAL_ACTIONS_CONST.FETCH_MINTS:
      return { ...lastState, mints: action.payload }
    case GLOBAL_ACTIONS_CONST.FETCH_CONTENT:
      return { ...lastState, content: action.payload }
    case GLOBAL_ACTIONS_CONST.SET_SELECTED_MINT:
      return { ...lastState, selectedMint: action.payload }

    default:
      return lastState;
  }

}
