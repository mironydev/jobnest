"use client";

import { Pagination } from "@heroui/react";

const JobsPagination = ({ page, setPage, total }) => {
  const currentPage = Number(page);
  const totalItems = total;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);

  return (
    <Pagination className="mt-10">
      <Pagination.Summary className="mx-auto sm:mx-0">
        Showing {startItem}-{endItem} of {totalItems} results
      </Pagination.Summary>
      {totalItems >= 10 && (
        <div className="flex justify-center sm:justify-start">
          <Pagination.Content className="flex-wrap">
            <Pagination.Item>
              <Pagination.Previous
                style={{ outline: "none", boxShadow: "none" }}
                isDisabled={currentPage === 1}
                onClick={() => setPage(Math.max(1, currentPage - 1))}
              >
                <Pagination.PreviousIcon />
                <span className="hidden sm:block">Previous</span>
              </Pagination.Previous>
            </Pagination.Item>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link
                  isActive={p === currentPage}
                  onPress={() => setPage(p)}
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                style={{ outline: "none", boxShadow: "none" }}
                isDisabled={currentPage === totalPages}
                onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
              >
                <span className="hidden sm:block">Next</span>
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </div>
      )}
    </Pagination>
  );
};

export default JobsPagination;
