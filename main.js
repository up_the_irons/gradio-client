import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { client  } from "@gradio/client";

const app = await client("abidlabs/en2fr");
const job = app.submit("/predict", ["Hello, how are you doing?"])

job.on("data", function(payload) {
  const {
    data: [translation]
  } = payload;

  document.querySelector('#title').innerHTML = translation;
});

job.on("status", function(status) {
  document.querySelector('#status').innerHTML = "Status: " + status.stage;
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="title">Loading...</h1>
    <p id="status"></p>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

