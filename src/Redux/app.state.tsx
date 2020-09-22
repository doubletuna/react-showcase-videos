import { IDoc } from '../Interfaces/interfaces'

export interface IGlobalState {
  mints: [],
  selectedMint: string,
  content: IDoc[],
  totalDocs: number
}

export const INITIAL_GLOBAL_STATE: IGlobalState = {
  mints: [],
  selectedMint: '',
  content: [],
  totalDocs: 0
}

export interface IAppState {
  global: IGlobalState
}

export const INITIAL_STATE: IAppState = {
  global: INITIAL_GLOBAL_STATE
}
