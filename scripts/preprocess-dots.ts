import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

interface DotConfig {
  name: string;
  input: string;
  output: string;
  size: number;
  radius: number;
  className: string;
}

interface Config {
  patterns: DotConfig[];
}

async function processImage(
  inputPath: string,
  outputPath: string,
  config: DotConfig
) {
  try {
    // Read and process the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    if (!metadata.width || !metadata.height) {
      throw new Error('Invalid image dimensions');
    }

    // Calculate aspect ratio preserving dimensions
    const aspectRatio = metadata.width / metadata.height;
    let drawWidth = metadata.width;
    let drawHeight = metadata.height;

    // Get image data
    const { data, info } = await image
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Create SVG content
    let svgContent = `<svg width="100%" height="100%" viewBox="0 0 ${drawWidth} ${drawHeight}" xmlns="http://www.w3.org/2000/svg">`;

    for (let y = 0; y < drawHeight; y += config.size) {
      for (let x = 0; x < drawWidth; x += config.size) {
        // Check center pixel alpha
        const centerX = Math.floor(x);
        const centerY = Math.floor(y);
        const centerPixelIndex = (centerY * drawWidth + centerX) * 4;
        const centerAlpha = data[centerPixelIndex + 3] / 255;

        if (centerAlpha <= 0.1) continue;

        let totalAlpha = 0;
        let totalGrayscale = 0;
        let samples = 0;

        // Sample surrounding pixels
        for (let sy = -1; sy <= 1; sy++) {
          for (let sx = -1; sx <= 1; sx++) {
            const sampleX = Math.floor(x + (sx * config.size / 4));
            const sampleY = Math.floor(y + (sy * config.size / 4));

            if (sampleX >= 0 && sampleX < drawWidth && sampleY >= 0 && sampleY < drawHeight) {
              const pixelIndex = (sampleY * drawWidth + sampleX) * 4;
              const r = data[pixelIndex];
              const g = data[pixelIndex + 1];
              const b = data[pixelIndex + 2];
              const a = data[pixelIndex + 3] / 255;

              samples++;

              if (a > 0) {
                totalAlpha += a;
                totalGrayscale += (r + g + b) / 3;
              } else {
                totalGrayscale += 255;
              }
            }
          }
        }

        if (samples > 0) {
          const meanAlpha = totalAlpha / samples;
          const avgGrayscale = totalGrayscale / samples;

          if (meanAlpha > 0.1 && avgGrayscale < 255) {
            const opacity = Math.max(0.2, 1 - avgGrayscale / 255) * meanAlpha;
            svgContent += `<circle cx="${x}" cy="${y}" r="${config.radius}" fill="rgba(0,0,0,${opacity})"/>`;
          }
        }
      }
    }

    svgContent += '</svg>';

    // Ensure the output directory exists
    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    // Write the SVG file
    writeFileSync(outputPath, svgContent);
    console.log(`Processed ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processAllImages() {
  // Load configuration
  const configPath = join(projectRoot, 'config', 'dot-patterns.yaml');
  const configContent = readFileSync(configPath, 'utf8');
  const config = yaml.load(configContent) as Config;

  // Ensure output directory exists
  const outputDir = join(projectRoot, 'public/images/dots');
  if (!existsSync(outputDir)) {
    console.log('Creating output directory...');
    mkdirSync(outputDir, { recursive: true });
  }

  // Process each pattern
  for (const pattern of config.patterns) {
    const inputPath = join(projectRoot, pattern.input);
    const outputPath = join(outputDir, pattern.output);
    
    if (!existsSync(inputPath)) {
      console.error(`Input file does not exist: ${inputPath}`);
      continue;
    }

    await processImage(inputPath, outputPath, pattern);
  }
}

processAllImages().catch(console.error); 