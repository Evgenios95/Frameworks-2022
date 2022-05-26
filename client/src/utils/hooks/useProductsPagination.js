import { useState } from "react";

function useProductsPagination(products, productsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(products.length / productsPerPage);

  function currentProducts() {
    const begin = (currentPage - 1) * productsPerPage;
    const end = begin + productsPerPage;
    return products.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPages));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPages));
  }

  return { next, prev, jump, currentProducts, currentPage, maxPages };
}

export default useProductsPagination;
