import { XIcon } from "@heroicons/react/outline";
import { MosaicContext, MosaicPath } from "react-mosaic-component";
import { MosaicKey } from "react-mosaic-component/lib/types";

type CloseButtonProps = {
  props: {
    mosaicContext: MosaicContext<MosaicKey>;
    path: MosaicPath;
  };
};

export const CloseButton: React.FC<CloseButtonProps> = ({
  props: { mosaicContext, path },
}) => {
  return (
    <button
      onClick={() => mosaicContext?.mosaicActions.remove(path)}
      title="Close"
      className="rounded border"
    >
      <XIcon className="h-5 w-5" />
    </button>
  );
};
