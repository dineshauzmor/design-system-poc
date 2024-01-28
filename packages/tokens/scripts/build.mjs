import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { transformTokens } from 'token-transformer';
import fs from 'fs';

registerTransforms(StyleDictionary);
// Function to read and parse JSON file
const readJsonFile = (filePath) => {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error.message);
    return null;
  }
};

// Path to the JSON file
const jsonFilePath = './../../tokens/tokens.json'; // Adjust the path based on your project structure

// Read and print the JSON file content
const jsonData = readJsonFile(jsonFilePath);
const brands = ['learn', 'office'];

brands.forEach((brand) => {
  const setsToUse = [brand];
  const excludes = [];

  const transformerOptions = {
    expandTypography: false,
    expandShadow: false,
    expandComposition: false,
    expandBorder: false,
    preserveRawValue: false,
    throwErrorWhenNotResolved: true,
    resolveReferences: true
  };

  const resolved = transformTokens(jsonData, setsToUse, excludes, transformerOptions);

  const tempFilePath = './../../tokens/resolved-tokens.json';
  fs.writeFileSync(tempFilePath, JSON.stringify(resolved));

  // Write transformed tokens to a brand-specific CSS file
  const cssFilePath = `./brand/${brand}/tokens.css`;
  const sd = StyleDictionary.extend({
    source: [tempFilePath],
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        buildPath: `./brand/${brand}/`,
        files: [
          {
            destination: `tokens.module.css`,
            format: 'css/variables'
          }
        ]
      }
    }
  });

  sd.cleanAllPlatforms();
  sd.buildAllPlatforms();

  fs.unlinkSync(tempFilePath);
  console.log(`CSS file generated for ${brand}: ${cssFilePath}`);
});

// Cleanup: Delete the temporary JSON file
