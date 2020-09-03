export const GLOBAL_ACTIONS_CONST = {
  FETCH_MINTS: 'FETCH_MINTS',
  FETCH_CONTENT: 'FETCH_CONTENT',
  SET_SELECTED_MINT: 'SET_SELECTED_MINT'
}

export const fetchMints = async (dispatch: any) => {
  const response = await fetch('https://run.mocky.io/v3/ea4b8142-2e8d-4f59-9bbb-463ede2ac058')
  const processed = await response.json()
  dispatch({
    type: GLOBAL_ACTIONS_CONST.FETCH_MINTS,
    payload: processed
  });
};

export const fetchContent = async (dispatch: any, payload: string) => {
  const response = await fetch(`https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${payload}&offset=0&limit=6&applicationSource=web`, {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGQ2YWU1MWMwNzQ5ODRhYTdlYjEiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTU4NTc0NTI1OSwiZXhwIjoxNTg1ODMxNjU5fQ.S61K8RkHJ6qwxRjp9m2Pfvttd6hRBOyWRO3TimRkJA4'
    }
  })
  const processed = await response.json()
  dispatch({
    type: GLOBAL_ACTIONS_CONST.FETCH_CONTENT,
    payload: processed
  });
}

export const setSelectedMint = async (dispatch: any, payload: string) => {
  dispatch({
    type: GLOBAL_ACTIONS_CONST.SET_SELECTED_MINT,
    payload
  })
}