import { TOffers } from "@/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ILoanOffers {
  offers: TOffers
}
const initialState: ILoanOffers = {
  offers: [],
}
const loanOffersSlice = createSlice({
  name: 'loanOffers',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<TOffers>) => {
      state.offers = action.payload
    }

  }
})
export const {setOffers} = loanOffersSlice.actions

export default loanOffersSlice.reducer