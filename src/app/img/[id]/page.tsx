import FullPageImageView from "~/components/full-image-page";

export default function ImagePage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNNumber = Number(imageId);

  if (isNaN(idAsNNumber)) throw new Error("Invalid image ID");
  return <FullPageImageView id={idAsNNumber} />;
}
