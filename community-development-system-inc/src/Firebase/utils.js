import { firebaseConfig } from "./config"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage"

const app = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const firebaseStorage = getStorage(app)
export const firestoree = firebase.firestore