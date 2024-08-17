export default function ImageModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return <div>{imageId}</div>;
}
