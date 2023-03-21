import type { QueryDocumentSnapshot, Timestamp } from "firebase-admin/firestore";
import { getFirestore } from "firebase-admin/firestore";

// helper function to convert firestore data to typescript
const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

// helper to apply converter to multiple collections
const dataPoint = <T extends FirebaseFirestore.DocumentData>(
  collectionPath: string
) => getFirestore().collection(collectionPath).withConverter(converter<T>());

export interface SubmittedIntentDoc {
  humanReadableId: string,
  status: "in-progress" | "submitted";
  createdAt:Timestamp,
  submittedAt: Timestamp,
  updatedAt: Timestamp,
  profileId:string,
  openingId: string,
  formId: string,
  sectionOrder: string[],
  sectionStatus: {[key:string]: boolean}

}


const dbBase = "database/version2";

export const db = {
  intents: (profileId: string) =>
    dataPoint<SubmittedIntentDoc>(`${dbBase}/profile/${profileId}/intents`)
    .where("status", "==", "submitted"),
    
};
