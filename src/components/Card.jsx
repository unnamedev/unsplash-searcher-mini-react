import styled from "styled-components"

// ✨ Styled Components
const Wrapper = styled.li`
  background-color: ${({bg}) => bg ? `${bg}cc` : "#fff"};
  overflow: hidden;
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  border-radius: 2px;
  line-height: 0;
  display: flex;
  flex-direction: column;
  animation: animateCard 1s;

  @keyframes animateCard {
    from {
      opacity: 0;
      transform: translateY(100);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const CardHeader = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const CardBody = styled.a`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  line-height: 1.2;

  img {
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 50%;
  }
`

/**
 * Card
 * @param imageUrl
 * @param color
 * @param user
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({color, alt_description, urls, user}) =>
    <Wrapper bg={color}>
        <CardHeader>
            <img src={urls.regular} alt={alt_description}/>
        </CardHeader>
        <CardBody href={user.links.html} target="_blank">
            <img src={user.profile_image.small} alt={user.name}/>
            <span>{user.name}</span>
        </CardBody>
    </Wrapper>

export default Card
