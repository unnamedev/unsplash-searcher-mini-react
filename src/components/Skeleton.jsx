import ContentLoader from "react-content-loader"
import styled from "styled-components"

// ✨ Styled Components
const Wrapper = styled.div`
  svg {
    max-width: 100%;
  }
`
/**
 * Skeleton
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Skeleton = ({...props}) =>
    <Wrapper>
        <ContentLoader
            width={450}
            height={400}
            viewBox="0 0 450 400"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            {...props}
        >
            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
            <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
    </Wrapper>

export default Skeleton