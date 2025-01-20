import { Global, css } from '@emotion/react';

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);
  * {
    box-sizing: border-box;
  }
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  #root {
    display: flex;
    min-height: 100%;
    justify-content: center;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
