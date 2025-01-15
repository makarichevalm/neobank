import { TOffers } from '@/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ILoanOffers {
  btnText: string
  loanStep: number
  offers: TOffers
}
const initialState: ILoanOffers = {
  btnText: 'Apply for card',
  loanStep: 1,
  offers: [],
}
const loanOffersSlice = createSlice({
  name: 'loanOffers',
  initialState,
  reducers: {
    setLoanStep: (state, action: PayloadAction<number>) => {
      state.loanStep = action.payload
    },
    setBtnText: (state, action: PayloadAction<string>) => {
      state.btnText = action.payload
    },
    setOffers: (state, action: PayloadAction<TOffers>) => {
      state.offers = action.payload
    },
  },
})
export const { setLoanStep, setBtnText, setOffers } = loanOffersSlice.actions

export default loanOffersSlice.reducer
