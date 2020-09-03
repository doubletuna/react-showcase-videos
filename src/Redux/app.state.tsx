
export interface IGlobalState {
  mints: [],
  selectedMint: string,
  content: any
}

export const INITIAL_GLOBAL_STATE: IGlobalState = {
  mints: [],
  selectedMint: '',
  content: ''
}

export interface IAppState {
  global: IGlobalState
}

export const INITIAL_STATE: IAppState = {
  global: INITIAL_GLOBAL_STATE
}
