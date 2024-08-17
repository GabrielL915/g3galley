import { getImages } from "~/server/queries";

export default async function ImageModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNNumber = Number(imageId);

  if (isNaN(idAsNNumber)) throw new Error("Invalid image ID");

  const image = await getImages(idAsNNumber);
  return <div>
    <img src={image.url} alt={image.title} />
  </div>;
}
