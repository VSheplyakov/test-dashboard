import React from "react";
import { ViewId } from "../App";
import { useCompanyController } from "../controllers/CpmpanyController";

type CompanySelectProps = {
  id: ViewId;
  selectedCompanyName: string | null;
};

const CompanySelect: React.FC<CompanySelectProps> = ({ id, selectedCompanyName }) => {
  const { companies, setSelectedCompany } = useCompanyController();

  return (
    <select
      value={selectedCompanyName || "Select company"}
      onChange={(e) => setSelectedCompany(id, e.target.value)}
      className="p-1 border rounded-md w-60 focus:outline-none"
    >
      <option value="Select company">
        Select company
      </option>
      {companies.map((company) => (
        <option key={company.id} value={company.name}>
          {company.name}
        </option>
      ))}
    </select>
  );
};

export default CompanySelect;