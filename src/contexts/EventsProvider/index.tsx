import React, { useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from "../../features/firebase";

function EventsProvider({ children }: { children: React.ReactNode }) {
  const imagesListRef = ref(firebaseStorage, "Images/");

  const getPhotoURL = (name: string) =>
    `"https://firebasestorage.googleapis.com/v0/b/secquraise-pj.appspot.com/o/Images%2F${name}.jpg?alt=media";`;

  return <div>{children}</div>;
}

export default EventsProvider;
