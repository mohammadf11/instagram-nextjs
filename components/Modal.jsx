import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import { modalState } from "../atoms/modalState";
import { CameraIcon } from "@heroicons/react/24/solid";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { useRecoilState } from "recoil";


function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      username: "ali",
      caption: captionRef.current.value,
      profileImg: 'data:image/jpeg;base64,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',
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );

    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen "
            aria-hidden="true"
          ></span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform translate-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    onClick={() => setSelectedFile(null)}
                    alt=""
                    className="w-full object-contain cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-600"
                      aira-hidden="true"
                    />
                  </div>
                )}
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>
                    <div>
                      <input
                        type="file"
                        ref={filePickerRef}
                        hidden
                        onChange={addImageToPost}
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        className="border-none focus:ring-0 w-full text-center"
                        ref={captionRef}
                        placeholder="Please enter a caption..."
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={uploadPost}
                    type="button"
                    disabled={!selectedFile}
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                  >
                    {loading ? "Uploading..." : "Upload Post"}
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;