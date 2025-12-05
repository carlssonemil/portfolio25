import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const OUTPUT_DIR = path.join(__dirname, '../public')

const generateSvgFavicon = () => {
  const svg = `
<svg width="256" height="256" viewBox="0 0 256 256"
     xmlns="http://www.w3.org/2000/svg">

  <style>
    :root {
      --circle-fill: #ffffff;
      --letter-fill: #000000;
    }

    @media (prefers-color-scheme: light) {
      :root {
        --circle-fill: #000000;
        --letter-fill: #ffffff;
      }
    }
  </style>

  <circle cx="128" cy="128" r="120" fill="var(--circle-fill)" />

  <text
    x="50%"
    y="50%"
    text-anchor="middle"
    dominant-baseline="central"
    font-family="Inter, sans-serif"
    font-weight="800"
    font-size="140"
    fill="var(--letter-fill)"
  >
    E
  </text>
</svg>
  `

  fs.writeFileSync(path.join(OUTPUT_DIR, 'favicon.svg'), svg.trim())
  console.log('Generated favicon.svg')
}

generateSvgFavicon()
