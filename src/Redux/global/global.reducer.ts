import { IGlobalState, INITIAL_GLOBAL_STATE } from '../app.state'
import { GLOBAL_ACTIONS_CONST } from './global.actions'

export const globalReducer = (lastState: IGlobalState, action: any): IGlobalState => {
  // console.log('action ? ', action)

  if (!lastState) return INITIAL_GLOBAL_STATE

  switch (action.type) {
    case GLOBAL_ACTIONS_CONST.FETCH_MINTS:
      return { ...lastState, mints: action.payload }
    case GLOBAL_ACTIONS_CONST.FETCH_CONTENT:
      return { ...lastState, content: action.payload.docs, totalDocs: action.payload.totalDocs }
    case GLOBAL_ACTIONS_CONST.SET_SELECTED_MINT:
      return { ...lastState, selectedMint: action.payload }
    case GLOBAL_ACTIONS_CONST.FETCH_MORE_CONTENT:
      const content = [...lastState.content, ...action.payload.docs]
      return { ...lastState, content }
    default:
      return lastState;
  }

}
