import admin from 'firebase-admin';

try {
  admin.initializeApp({
    credential: admin.credential.cert({
    }),
    databaseURL: 'https://personal-site-af79a.firebaseio.com'
  });
} catch {}

export default (req, res) => {    
    return admin.firestore().collection('likes').doc(req.query.postId).get().then(doc => res.json(doc.data()));
}