export type ProductCategory = 'payload' | 'dev_kit';

export type ProductStatus = 'draft' | 'published' | 'hidden';

export type MediaKind = 'image' | 'document';
export type MediaRole = 'hero' | 'gallery' | 'datasheet';

export interface Media {
  id?: string;
  productId?: string;
  kind: MediaKind;
  role?: MediaRole | null;
  url: string;
  mimeType?: string;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
  sizeBytes?: number | null;
  sortOrder?: number;
}

export interface Variant {
  code: string;
  name: string;
  is_default: boolean;
  sort_order?: number;
}

export type SpecValueType =
  | 'text'
  | 'number'
  | 'range'
  | 'list'
  | 'axes'
  | 'key_value'
  | 'piecewise'
  | 'optional';

export interface SpecValue {
  display: string;
  data?: any;
  note?: string | null;
}

export interface SpecItem {
  definition_id?: string;
  key: string;
  label: string;
  value_type: SpecValueType;
  is_highlight: boolean;
  sort_order?: number;
  values: Record<string, SpecValue>;
}

export interface SpecGroup {
  key: string;
  title: string;
  sort_order?: number;
  items: SpecItem[];
}

export interface PackagePrice {
  amount: string;
  currency: string;
}

export interface Package {
  id?: string;
  code: string;
  name: string;
  includes_package_id?: string | null;
  contents: string[];
  price?: PackagePrice | null;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline?: string | null;
  category: ProductCategory;
  is_name_provisional?: boolean;
  is_placeholder?: boolean;
  status: ProductStatus;
  sort_order?: number;
  published_at?: string | null;
  created_at?: string;
  updated_at?: string;
  notes?: string | null;
  variants: Variant[];
  spec_groups: SpecGroup[];
  packages?: Package[];
  images?: Media[];
  documents?: Media[];
}

export type SortOption = 'default' | 'name-asc' | 'name-desc' | 'newest';
