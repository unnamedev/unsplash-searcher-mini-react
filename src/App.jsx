import {useContext} from "react"
import styled from "styled-components"
import Card from "./components/Card"
import Form from "./components/Form"
import {AppContext} from "./content/AppContext"
import Skeleton from "./components/Skeleton"
import Pagination from "./components/Pagination"
import headerBg from "./assets/grid-image.jpg"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// ✨ Styled Components
const Header = styled.header`
  padding-top: calc(100px + (250 - 100) * ((100vw - 300px) / (1920 - 300)));
  padding-bottom: calc(100px + (250 - 100) * ((100vw - 300px) / (1920 - 300)));
  position: relative;
`
const BackImage = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({bg}) => bg ? `url(${bg}) repeat-x center` : "#fefefe"};
  animation: scroll-grid 180s linear infinite;
  background-size: 2420px;
  width: 7260px;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }

  @keyframes scroll-grid {
    0% {
      transform: translate3d(0, 0, 0)
    }

    100% {
      transform: translate3d(-2420px, 0, 0)
    }
  }

`
const Grid = styled.ul`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 10px;
`
const GridPreloader = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`
/**
 * App
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    const {photos, isLoading} = useContext(AppContext)

    return <>
        {/* Header */}
        <Header>
            <BackImage bg={headerBg}/>
            {/* Form */}
            <Form/>
        </Header>
        {/* Preloader */}
        {isLoading && <GridPreloader>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => <Skeleton key={el}/>)}</GridPreloader>}
        {/* Items */}
        {photos.length !== 0 && (
            <>
                {/* Grid */}
                <Grid>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 576: 2, 900: 3, 1200: 4}}>
                        <Masonry gutter="20px">{photos.map(photo => <Card key={photo.id} {...photo}/>)}</Masonry>
                    </ResponsiveMasonry>
                </Grid>
                {/* Pagination */}
                <Pagination/>
            </>
        )}
    </>

}

export default App
