import {useContext, useState} from "react"
import styled from "styled-components"
import {FiSearch} from "react-icons/fi"
import {fetchPhotos, fetchRandomPhotos} from "../config"
import {AppContext} from "../content/AppContext"

// ✨ Styled Components
const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-left: 10px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  form {
    width: 100%;
    position: relative;
  }

  input {
    padding: 20px 20px 20px 60px;
    background-color: #f5f5f5;
    display: block;
    width: 100%;
    border-radius: 5px;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
  }
`
/**
 * Form
 * @returns {JSX.Element}
 * @constructor
 */
const Form = () => {
    const [term, setTerm] = useState("")
    const {perPage, currentPage, dispatch} = useContext(AppContext)

    /**
     * Submit handler
     * @param e - event
     * @returns {Promise<void>}
     */
    const submitHandler = async (e) => {
        e.preventDefault()
        // Check query is not empty
        if (!term) {
            dispatch({type: "LOADING", payload: true})
            const data = await fetchRandomPhotos()
            dispatch({type: "FETCH_RANDOM_PHOTOS", payload: {data}})
            dispatch({type: "LOADING", payload: false})
        } else {
            // ✨ Fetch data
            const {results, total, total_pages} = await fetchPhotos(term, currentPage, perPage)
            dispatch({type: "FETCH_PHOTOS", payload: {results, total, term, total_pages}})
        }
    }

    return <Wrapper>
        <form onSubmit={submitHandler}>
            <FiSearch size={30}/>
            <input type="text"
                   placeholder="Type here to search for images"
                   value={term}
                   onChange={e => setTerm(e.target.value)}
            />
        </form>
    </Wrapper>

}

export default Form
