import {
  Mosaic,
  MosaicWindow,
  MosaicPath,
  MosaicContext,
} from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import CompanyWidget from "./components/CompanyWidget";
import { useCompanyController } from "./controllers/CompanyController";
import CompanyDropdown from "./components/CompanyDropdown";
import { CloseButton } from "./components/CloseButton";
import { ExpandButton } from "./components/ExpandButton";

export type ViewId = "a" | "b" | "c";

function App() {
  const { selectedCompanies, getSelectedCompany } = useCompanyController();

  const renderTile = (id: ViewId, path: MosaicPath) => {
    const selectedCompany = getSelectedCompany(id);

    return (
      <MosaicContext.Consumer>
        {(mosaicContext) => (
          <MosaicWindow<ViewId>
            path={path}
            title="Company Info"
            renderToolbar={() => (
              <div className="flex items-center justify-between gap-4 px-2 w-full">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">
                    Company Info
                  </span>
                  <CompanyDropdown
                    id={id}
                    selectedCompanyName={selectedCompanies[id]}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <ExpandButton props={{ mosaicContext, path }} />
                  <CloseButton props={{ mosaicContext, path }} />
                </div>
              </div>
            )}
          >
            {selectedCompany ? (
              <CompanyWidget selectedCompany={selectedCompany} />
            ) : (
              <div className="p-4 text-center items-center flex h-full">
                Please select a company from the dropdown
              </div>
            )}
          </MosaicWindow>
        )}
      </MosaicContext.Consumer>
    );
  };

  return (
    <div className="h-screen">
      <Mosaic<ViewId>
        renderTile={renderTile}
        initialValue={{
          direction: "row",
          first: "a",
          second: {
            direction: "column",
            first: "b",
            second: "c",
            splitPercentage: 50,
          },
        }}
      />
    </div>
  );
}

export default App;
