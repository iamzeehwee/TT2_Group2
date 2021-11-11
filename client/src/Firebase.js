import "firebase/analytics";
import * as firebase from "firebase/app";
import "firebase/storage";
import * as env from './env.js';

const PASSAGE_FOLDER = 'passage/'
const PITCH_FOLDER = 'pitch/'
const RECORDINGS = 'recordings/'
let storageRef = null;

export const initializeFirebase = () => {
  if (!firebase.apps.length) {

    const firebaseConfig = {
      apiKey: env.FB_API_KEY,
      authDomain: env.FB_AUTH_DOMAIN,
      databaseURL: env.FB_DATABASE_URL,
      projectId: env.FB_PROJECT_ID,
      storageBucket: env.FB_STORAGE_BUCKET,
      messagingSenderId: env.FB_MESSAGING_SENDER_ID,
      appId: env.FB_APP_ID,
      measurementId: env.FB_MEASUREMENT_ID
    };

    console.log('init firebase')

    // initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    let storage = firebase.storage();
    storageRef = storage.ref();
  }
}

export const getFileName = (account, id, num) => {
  return account + '_' + id + '_' + num + '.wav';
};

export const getDirectoryPath = (schoolId, isPassage) => {
  let directory = ''
  if (isPassage) {
    directory = schoolId + '/' + PASSAGE_FOLDER + RECORDINGS;
  } else {
    directory = schoolId + '/' + PITCH_FOLDER + RECORDINGS;
  }

  return directory;
};

export const getAudioFileName = (id) => {
  return id + '.wav';
};

export const getAudioDirectoryPath = () => {
  return 'recordings/';
};

export const getAudio = (id) => {
  let fileName = getAudioFileName(id);
  let directoryPath = getAudioDirectoryPath();
  let file = directoryPath + fileName;

  return storageRef.child(file)
}

export const uploadAudio = (id) => {
  let file = getAudioDirectoryPath() + getAudioFileName(id);
  let ref = storageRef.child(file);
  return ref;
}

export const getExampleFileName = (ref) => {
  return ref + '.mp4';
};

export const getExampleDirectoryPath = () => {
  return 'examples/';
};

export const getExample = (ref) => {
  let fileName = getExampleFileName(ref);
  let directoryPath = getExampleDirectoryPath();
  let file = directoryPath + fileName;

  return storageRef.child(file)
}