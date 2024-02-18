import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { client  } from "@gradio/client";

const app = await client("abidlabs/en2fr");
const result = await app.predict("/predict", ["Hello, how are you doing?"])

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>${result.data[0]}</h1>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

