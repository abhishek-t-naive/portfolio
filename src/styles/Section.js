import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  margin: 0 0;
  padding: 150px 0;
  max-width: 1500px;

  ${media.tablet`padding: 100px 0;`};
`;

export default Section;
