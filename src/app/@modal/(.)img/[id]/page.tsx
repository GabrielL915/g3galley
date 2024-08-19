import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function ImageModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNNumber = Number(imageId);

  if (isNaN(idAsNNumber)) throw new Error("Invalid image ID");
  return (
    <Modal>
      <FullPageImageView id={idAsNNumber} />
    </Modal>
  );
}
