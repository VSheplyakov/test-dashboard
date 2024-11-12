import { useCompanyContext, ViewId } from "../providers/CompanyProvider";

export const useCompanyController = () => {
  const { selectedCompanies, companies, setSelectedCompany } =
    useCompanyContext();
  const getSelectedCompany = (id: ViewId) =>
    companies.find((company) => company.name === selectedCompanies[id]);

  return {
    selectedCompanies,
    companies,
    setSelectedCompany,
    getSelectedCompany,
  };
};
