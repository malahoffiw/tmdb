export const getPagesForPagination = (page: number, totalPages: number) => {
  const pages = [1, page - 1, page, page + 1, totalPages].filter((p) => p > 0 && p <= totalPages);
  const uniquePages = [...new Set(pages)];

  if (page === 4) uniquePages.splice(1, 0, 2);
  if (page > 4) uniquePages.splice(1, 0, -1);
  if (page === totalPages - 3) uniquePages.splice(uniquePages.length - 1, 0, totalPages - 1);
  if (page < totalPages - 3) uniquePages.splice(uniquePages.length - 1, 0, -1);

  return uniquePages;
};
