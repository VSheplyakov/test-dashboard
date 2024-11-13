import ArrowsExpandIcon from "@heroicons/react/outline/ArrowsExpandIcon";
import React from "react";
import { MosaicContext } from "react-mosaic-component";
import { MosaicKey, MosaicPath } from "react-mosaic-component/lib/types";

type ExpandButtonProps = {
  props: {
    mosaicContext: MosaicContext<MosaicKey>;
    path: MosaicPath;
  };
};
export const ExpandButton: React.FC<ExpandButtonProps> = ({
  props: { mosaicContext, path },
}) => {
  return (
    <button
      onClick={() => mosaicContext?.mosaicActions.expand(path, 80)}
      title="Expand"
      className="rounded border"
    >
      <ArrowsExpandIcon className="h-5 w-5" />
    </button>
  );
};
