import { createCanvas, GlobalFonts } from '@napi-rs/canvas'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

GlobalFonts.registerFromPath(
  path.resolve(__dirname, '../src/assets/Inter-Regular.ttf'),
  'Inter-Regular',
)

GlobalFonts.registerFromPath(
  path.resolve(__dirname, '../src/assets/Inter-Medium.ttf'),
  'Inter-Medium',
)

GlobalFonts.registerFromPath(
  path.resolve(__dirname, '../src/assets/Inter-ExtraBold.ttf'),
  'Inter-ExtraBold',
)

const BG_COLOR = '#000'
const TITLE_COLOR = '#f5f5f5'
const SUBTITLE_COLOR = '#a1a1a1'

const TITLE = 'Emil Carlsson'
const SUBTITLE = 'Software Developer'

const TITLE_SIZE = 50
const SUBTITLE_SIZE = 28

const TITLE_WEIGHT = 500
const SUBTITLE_WEIGHT = 400

const PADDING_LEFT = 80
const PADDING_BOTTOM = 80
const LINE_SPACING = 10

const OUTPUT_DIR = path.join(__dirname, '../public')

const drawFaviconIcon = (ctx, diameter, x, y) => {
  // Circle
  ctx.beginPath()
  ctx.arc(x, y, diameter / 2, 0, Math.PI * 2)
  ctx.fillStyle = '#fff'
  ctx.fill()

  // Letter
  ctx.fillStyle = '#000'
  ctx.font = `800 ${diameter * 0.65}px Inter-ExtraBold`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('E', x, y)
}

const generateImage = (width, height, filename) => {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // Background
  ctx.fillStyle = BG_COLOR
  ctx.fillRect(0, 0, width, height)

  // Subtle radial gradient from bottom
  const gradientX = width * 0.5
  const gradientY = height * 1.2
  const gradientRadius = height * 3
  const radial = ctx.createRadialGradient(
    gradientX,
    gradientY,
    0,
    gradientX,
    gradientY,
    gradientRadius,
  )
  radial.addColorStop(0, '#222222')
  radial.addColorStop(1, '#000000')
  ctx.fillStyle = radial
  ctx.fillRect(0, 0, width, height)

  // Text settings
  ctx.textAlign = 'left'
  ctx.textBaseline = 'bottom'

  // Subtitle
  ctx.fillStyle = SUBTITLE_COLOR
  ctx.font = `${SUBTITLE_WEIGHT} ${SUBTITLE_SIZE}px Inter-Regular`
  const subtitleY = height - PADDING_BOTTOM
  ctx.fillText(SUBTITLE, PADDING_LEFT, subtitleY)

  // Title
  ctx.fillStyle = TITLE_COLOR
  ctx.font = `${TITLE_WEIGHT} ${TITLE_SIZE}px Inter-Medium`
  const titleY = subtitleY - SUBTITLE_SIZE - LINE_SPACING
  ctx.fillText(TITLE, PADDING_LEFT, titleY)

  // Favicon icon
  const iconDiameter = 100
  const iconX = width - PADDING_LEFT - iconDiameter / 2
  const iconY = height - PADDING_BOTTOM - iconDiameter / 2
  drawFaviconIcon(ctx, iconDiameter, iconX, iconY)

  // Export
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), buffer)

  console.log(`Generated ${filename}`)
}

generateImage(1200, 630, 'og-image.png') // Open Graph image
generateImage(1200, 600, 'twitter-image.png') // Twitter card image
