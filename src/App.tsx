import { Mosaic } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";

import MosaicTitle from "./components/MosaicTile";

export type ViewId = "a" | "b" | "c";

function App() {
  return (
    <div className="h-screen">
      <Mosaic<ViewId>
        renderTile={(id, path) => <MosaicTitle id={id} path={path} />}
        initialValue={{
          direction: "row",
          first: "a",
          second: {
            direction: "column",
            first: "b",
            second: "c",
          },
          splitPercentage: 50,
        }}
      />
    </div>
  );
}

export default App;
