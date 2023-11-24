import { Global as _Global, css } from '@emotion/react';
import { ThemeProvider as _ThemeProvider } from '@emotion/react';

export const Global = () => {
  return (
    <_Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: LIFEPLUS;
          font-weight:700;
        }
        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: 700;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
        }
      `}
    />
  );
};
