import { IFetch } from '../../Interfaces/interfaces';

export const GLOBAL_ACTIONS_CONST = {
  FETCH_MINTS: 'FETCH_MINTS',
  FETCH_CONTENT: 'FETCH_CONTENT',
  SET_SELECTED_MINT: 'SET_SELECTED_MINT',
  FETCH_MORE_CONTENT: 'FETCH_MORE_CONTENT'
}

export const fetchMints = async (dispatch: any) => {
  const response = await fetch('https://run.mocky.io/v3/924d0291-8222-4c25-8732-9a8783e32603')
  const processed = await response.json()
  dispatch({
    type: GLOBAL_ACTIONS_CONST.FETCH_MINTS,
    payload: processed
  });
};

export const fetchContent = async (dispatch: any, payload: IFetch) => {
  const { campaignId, offset } = payload
  const response = await fetch(`https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignId}&offset=${offset}&limit=6&applicationSource=web`, {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGQ2YWU1MWMwNzQ5ODRhYTdlYjEiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTU4NTc0NTI1OSwiZXhwIjoxNTg1ODMxNjU5fQ.S61K8RkHJ6qwxRjp9m2Pfvttd6hRBOyWRO3TimRkJA4'
    }
  })
  const processed = await response.json()
  if (offset) {
    dispatch({
      type: GLOBAL_ACTIONS_CONST.FETCH_MORE_CONTENT,
      payload: processed
    })
  } else {
    dispatch({
      type: GLOBAL_ACTIONS_CONST.FETCH_CONTENT,
      payload: processed
    })
  }
}

// mock data as original production feed is not supported anymore. 
export const fetchMockContent = async (dispatch: any, payload: IFetch) => {
  const response = await fetch('https://run.mocky.io/v3/85d6b20f-a85c-459a-a5d2-2b93370ae26c')
  const processed = await response.json()
  
  dispatch({
    type: GLOBAL_ACTIONS_CONST.FETCH_CONTENT,
    payload: processed[0]
  })
}

export const setSelectedMint = async (dispatch: any, payload: string) => {
  dispatch({
    type: GLOBAL_ACTIONS_CONST.SET_SELECTED_MINT,
    payload
  })
}