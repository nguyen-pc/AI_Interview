import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// import { auth_provider_x509_cert_url } from "../prewise-fbf5c-firebase-adminsdk-fbsvc-d6ff899641.json";

const initFirebaseAdmin = () => {
  console.log(
    "Resolved key:\n",
    process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
  );
  console.log(process.env.FIREBASE_PROJECT_ID);
  console.log(process.env.FIREBASE_CLIENT_EMAIL);
  const apps = getApps();
  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
};

export const { auth, db } = initFirebaseAdmin();
