import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cars: ['Model S', 'Model E', 'Model X', 'Model Y'],
}
const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
})
export const selectCars = (state) => state.car
export default carSlice.reducer
