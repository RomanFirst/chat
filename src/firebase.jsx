import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAtMl94pw6BTCYmSNGF006bA09n5NPhYIA',
	authDomain: 'chat-d687b.firebaseapp.com',
	projectId: 'chat-d687b',
	storageBucket: 'chat-d687b.appspot.com',
	messagingSenderId: '68635080152',
	appId: '1:68635080152:web:a65497396bc13da710eead',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
