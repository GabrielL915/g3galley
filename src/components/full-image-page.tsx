import { clerkClient } from "@clerk/nextjs/server";
import { getImages } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImages(props.id);

  const uploadedInfo = await clerkClient().users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{uploadedInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created At:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
