import { Mosaic, MosaicWindow, MosaicPath } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import CompanyWidget from "./components/CompanyWidget";
import { useCompanyController } from "./controllers/CompanyController";
import CompanyDropdown from "./components/CompanyDropdown";

export type ViewId = "a" | "b" | "c";

function App() {
  const { selectedCompanies, getSelectedCompany } = useCompanyController();

  const renderTile = (id: ViewId, path: MosaicPath) => {
    const selectedCompany = getSelectedCompany(id);

    return (
      <MosaicWindow<ViewId>
        path={path}
        title="Company Info"
        renderToolbar={() => (
          <div className="flex items-center gap-4 px-2">
            <span className="font-semibold text-gray-700">Company Info</span>
            <CompanyDropdown
              id={id}
              selectedCompanyName={selectedCompanies[id]}
            />
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
    );
  };

  return (
    <div style={{height:"100dvh"}} data-testid="app">
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
        className="mosaic-blueprint-theme"
      />
    </div>
  );
}

export default App;
