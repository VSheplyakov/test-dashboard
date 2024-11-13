export type Company = {
  id: string;
  ticker: string;
  name: string;
  lei: string | null;
  legal_name: string;
  stock_exchange: string;
  sic: number;
  short_description: string;
  long_description: string;
  ceo: string | null;
  company_url: string;
  business_address: string;
  mailing_address: string;
  business_phone_no: string;
  hq_address1: string;
  hq_address2: string | null;
  hq_address_city: string;
  hq_address_postal_code: string;
  entity_legal_form: string | null;
  cik: string;
  latest_filing_date: string | null;
  hq_state: string | null;
  hq_country: string | null;
  inc_state: string | null;
  inc_country: string | null;
  employees: number;
  entity_status: string | null;
  sector: string;
  industry_category: string;
  industry_group: string;
  template: string;
  standardized_active: boolean;
  first_fundamental_date: string | null;
  last_fundamental_date: string | null;
  first_stock_price_date: string | null;
  last_stock_price_date: string | null;
  thea_enabled: boolean | null;
  legacy_sector: string | null;
  legacy_industry_category: string | null;
  legacy_industry_group: string | null;
};

export type ViewId = "a" | "b" | "c";
