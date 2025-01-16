import { TOffers } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IApplication {
  btnText: string
  appStep: number
  applicationId: number | null
  offers: TOffers
}
const initialState: IApplication = {
  btnText: 'Apply for card',
  appStep: 1,
  applicationId: null,
  offers: [],
}
const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setBtnText: (state, action: PayloadAction<string>) => {
      state.btnText = action.payload
    },
    setAppStep: (state, action: PayloadAction<number>) => {
      state.appStep = action.payload
    },
    setApplicationId: (state, action: PayloadAction<number>) => {
      state.applicationId = action.payload
    },
    setOffers: (state, action: PayloadAction<TOffers>) => {
      state.offers = action.payload
    },
  },
})
export const { setBtnText, setAppStep, setApplicationId, setOffers } = applicationSlice.actions

export default applicationSlice.reducer
