import { configureStore } from '@reduxjs/toolkit'
import apartmentsSlice from './features/apartments'
import bookingSlice from './features/bookingInfo'
import buildingSlice from './features/buildings'
import cardSlice from './features/cardInfor'
import debtSlice from './features/debtInfo'
import itemSlice from './features/item'
import loadingSlice from './features/loading'
import moreItemSlice from './features/moreItem'
import myToolSlice from './features/myTool'
import residentsSlice from './features/residentInfo'
import residentSlice from './features/residents'
import serviceSlice from './features/services'
import toastSlice from './features/toast'
import userSlice from './features/userInfo'
import usersSlice from './features/users'
import vehicleSlice from './features/vehicleInfo'
import typePriceSlice from './features/typeprice'

const store = configureStore({
    reducer: {
        loading: loadingSlice,
        toast: toastSlice,
        userInfo: userSlice,
        item: itemSlice,
        myTool: myToolSlice,
        users: usersSlice,
        apartments: apartmentsSlice,
        buildings: buildingSlice,
        residents: residentSlice,
        services: serviceSlice,
        moreItem: moreItemSlice,
        residentInfo: residentsSlice,
        cardInfo: cardSlice,
        debtInfo: debtSlice,
        bookingInfo: bookingSlice,
        vehicleInfo: vehicleSlice,
        typePrice: typePriceSlice,
    },
})

export default store
export const reduxStage = store.getState()
