export interface PaginationSelectorType {
  page: number;
  setPage: (pageNum: number) => void;
  totalPages: number;
}
