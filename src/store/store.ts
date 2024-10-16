// src/store/store.ts
import { legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./rootReducer" // تأكد من استيراد rootReducer

// تعريف enhancers لـ Redux DevTools
const composeEnhancers = import.meta.env.MODE === "development" ? composeWithDevTools : undefined

// إنشاء الـ store باستخدام rootReducer
const store = createStore(
    rootReducer,
    composeEnhancers ? composeEnhancers() : undefined // تمكين devtools فقط في التطوير
)

export type AppDispatch = typeof store.dispatch

export default store
