import React, { useState, useEffect } from "react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
const HOME = "HOME";
const END = "END";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export default function CustomPagination(props) {
  const {
    totalRecords,
    pageLimit,
    pageNeighbours,
    onPageChanged,
    currentPage = [],
  } = props;
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (totalRecords % 100 === 0) {
      setTotalPages(totalRecords / 100);
    } else {
      setTotalPages(parseInt(totalRecords / 100) + 1);
    }
  }, [totalRecords]);

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [HOME, ...pages, END];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];
  return (
    <>
      {/* {JSON.stringify(totalRecords)} */}
      <nav aria-label="Countries Pagination">
        <ul className="pagination">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    href="/"
                    className="page-link"
                    aria-label="Previous"
                    onClick={(e) => onPageChanged(e, pageNeighbours * 2 - 1)}
                  >
                    <span aria-hidden="true">{"<"}</span>
                  </a>
                </li>
              );

            if (page === HOME)
              return (
                <li key={index} className="page-item">
                  <a
                    href="/"
                    className="page-link"
                    aria-label="Previous"
                    onClick={(e) => onPageChanged(e, pageNeighbours * 2 - 1)}
                  >
                    <span aria-hidden="true">{"<<"}</span>
                  </a>
                </li>
              );

            if (page === END)
              return (
                <li key={index} className="page-item">
                  <a
                    href="/"
                    className="page-link"
                    aria-label="Previous"
                    onClick={(e) => onPageChanged(e, pageNeighbours * 2 - 1)}
                  >
                    <span aria-hidden="true">{">>"}</span>
                  </a>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="/"
                    aria-label="Next"
                    onClick={(e) => onPageChanged(e, pageNeighbours * 2 + 3)}
                  >
                    <span aria-hidden="true">{">"}</span>
                  </a>
                </li>
              );

            return (
              <li
                key={index}
                className={`page-item${currentPage === page ? " active" : ""}`}
              >
                <a
                  className="page-link"
                  href="/"
                  onClick={(e) => onPageChanged(e, page)}
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
