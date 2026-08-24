import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import type { PaginationSelectorType } from "@/types/pagination";

export function PaginationSelector({
  page,
  setPage,
  totalPages,
}: PaginationSelectorType) {
  function clickHandle(pageNum: number) {
    setPage(pageNum);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setPage(Math.max(1, page - 1))} />
        </PaginationItem>

        {page > 2 && (
          <>
            <PaginationItem onClick={() => clickHandle(1)}>
              <PaginationLink isActive={false}>1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {page != 1 && (
          <PaginationItem onClick={() => clickHandle(page - 1)}>
            <PaginationLink isActive={false}>{`${page - 1}`}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive={true}>{`${page}`}</PaginationLink>
        </PaginationItem>

        {page != totalPages && (
          <PaginationItem onClick={() => clickHandle(page + 1)}>
            <PaginationLink isActive={false}>{`${page + 1}`}</PaginationLink>
          </PaginationItem>
        )}
        {page < totalPages - 1 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem onClick={() => clickHandle(totalPages)}>
              <PaginationLink
                isActive={false}
              >{`${totalPages}`}</PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(Math.min(totalPages, page + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default Pagination;
