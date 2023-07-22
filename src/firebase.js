import  firebase from "firebase/compat/app"

import 'firebase/compat/auth'

    const firebaseConfig = {
      apiKey: "AIzaSyAPCOS-MtJ0QltWF3Ek_Wb61kGCxcohVAI",
      authDomain: "clone-yout.firebaseapp.com",
      projectId: "clone-yout",
      storageBucket: "clone-yout.appspot.com",
      messagingSenderId: "1076345561318",
      appId: "1:1076345561318:web:c8d83a4ec7a1bbdb441b27"
    };
    firebase.initializeApp(firebaseConfig)
    export default firebase.auth();