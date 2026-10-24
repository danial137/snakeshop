"use client";

import { cn } from "@/lib/utils";
import { Loader2, MousePointerSquareDashed } from "lucide-react";
import Image from "next/image";
import snake3 from "../../../../public/snake-3.png";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Progress } from "@/components/ui/progress";

const page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const onDropRejected = () => {};
  const onDropAccepted = () => {
    console.log("accepted");
  };

  const isUploading = false;
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        { "ring-blue-900/25 bg-blue-900/10": isDragOver },
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="h-full w-full flex-1 flex flex-col items-center justify-center"
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
              ) : isUploading || isPending ? (
                <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
              ) : (
                <Image
                  className=" text-zinc-500 mb-2"
                  src={snake3}
                  width={100}
                  height={100}
                  alt="drag your file"
                />
              )}
              <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center dark:text-white">
                    <p>Uploading...</p>
                    <Progress
                      className="mt-20 w-40 h-2 bg-gray-300 dark:text-white"
                      value={uploadProgress}
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center dark:text-white">
                    <p>Redirecting</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold dark:text-white">
                      Drop file
                    </span>
                    to upload
                  </p>
                ) : (
                  <p className="dark:text-white font-semibold">
                    <span className="font-semibold dark:text-white">
                      click to upload {""}
                      or drag and drop
                    </span>
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className="text-xl text-zinc-500 dark:text-white">
                  {" "}
                  PNG,JPG,JPEG
                </p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default page;
