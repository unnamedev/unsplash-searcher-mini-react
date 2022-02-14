import {useContext} from "react"
import styled from "styled-components"
import ReactPaginate from "react-paginate"
import {fetchPhotos} from "../config"
import {AppContext} from "../content/AppContext"

// ✨ Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 50px;

  ul {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    border-radius: 5px;
  }

  a {
    display: flex;
    padding: 5px;
    min-width: 35px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    word-break: break-word;
    color: #aab1d5;
    transition: all 0.25s;
    border-radius: 5px;

    &:hover {
      background-color: #ebeef6;
    }
  }

  .selected a {
    background-color: #7495ff;
    color: #fff;
  }

  .previous.disabled {
    display: none;
  }
`
/**
 * Pagination
 * @returns {JSX.Element}
 * @constructor
 */
const Pagination = () => {
    const {totalPages, query, perPage, type, dispatch} = useContext(AppContext)

    /**
     * handlePageClick
     * @param selected
     * @returns {Promise<void>}
     */
    const handlePageClick = async ({selected}) => {
        const nextPage = selected + 1
        const {results, total, total_pages} = await fetchPhotos(query, nextPage, perPage)
        dispatch({type: "FETCH_MORE", payload: {results, total, query, total_pages, nextPage, type}})
    }

    return <Wrapper>
        {type === "search" &&
            <ReactPaginate
                disableInitialCallback={true}
                initialPage={0}
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel=""
                renderOnZeroPageCount={null}
            />}
    </Wrapper>
}

export default Pagination
