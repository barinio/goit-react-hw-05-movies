import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './Pagination.styled';

export const Pagination = ({ totalPages, setPage, page }) => {
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={totalPages}
        previousLabel={'Back'}
        nextLabel={'Next'}
        breakLabel={'...'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        subContainerClassName={'pages pagination'}
        breakClassName={'break-me'}
        initialPage={page - 1}
      />
    </PaginationContainer>
  );
};

export default Pagination;
