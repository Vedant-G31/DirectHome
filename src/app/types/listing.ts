// types/listing.ts
export interface Listing {
  id: string
  row_num: number | null
  mls_number: string | null
  status: string | null
  address: string | null
  municipality: string | null
  community: string | null
  list_price: string | null
  sold_price: string | null
  type: string | null
  style: string | null
  bedrooms: number | null
  bedrooms_plus: string | null
  baths: number | null
  fam: string | null
  contract_date: string | null
  list_office_phone: string | null
}