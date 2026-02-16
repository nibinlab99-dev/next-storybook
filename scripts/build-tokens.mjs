/**
 * Production-Ready Token Build Script
 * 
 * Converts Figma tokens from tokens.json to CSS files for Tailwind CSS v4
 * 
 * Run: node scripts/build-tokens.js
 * 
 * Generates:
 * - src/styles/tokens.css - CSS custom properties
 * - src/styles/theme.css - Tailwind @theme + utility classes (auto-generated)
 * 
 * When you update tokens in Figma and pull, just run this script.
 * No manual CSS changes needed!
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKENS_INPUT = path.join(__dirname, '..', 'tokens.json');
const TOKENS_OUTPUT = path.join(__dirname, '..', 'src', 'styles', 'tokens.css');
const THEME_OUTPUT = path.join(__dirname, '..', 'src', 'styles', 'theme.css');

// Read tokens file
const tokens = JSON.parse(fs.readFileSync(TOKENS_INPUT, 'utf8'));

// Extract token sets from new hierarchical structure
const foundationValue = tokens['Foundation/Value'] || {};
const semanticValue = tokens['Semantic/Value'] || {};
const componentsMode = tokens['Components/Mode 1'] || {};

/**
 * Resolve token alias references like {base.blue.50} to actual values
 */
function resolveAlias(value, baseTokens) {
    if (typeof value !== 'string') return value;

    const aliasMatch = value.match(/^\{(.+)\}$/);
    if (!aliasMatch) return value;

    const tokenPath = aliasMatch[1].split('.');
    let resolved = baseTokens;

    for (const key of tokenPath) {
        if (resolved && resolved[key]) {
            resolved = resolved[key];
        } else {
            console.warn(`Warning: Could not resolve alias ${value}`);
            return value;
        }
    }

    if (resolved && typeof resolved === 'object' && resolved.value) {
        return resolveAlias(resolved.value, baseTokens);
    }

    return resolved;
}

/**
 * Flatten nested token object to flat key-value pairs
 */
function flattenTokens(obj, prefix = '', result = {}) {
    for (const [key, val] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}-${key}` : key;

        if (val && typeof val === 'object' && val.value !== undefined) {
            result[newKey] = val.value;
        } else if (val && typeof val === 'object' && !val.type) {
            flattenTokens(val, newKey, result);
        }
    }
    return result;
}

/**
 * Remove prefix from token name (e.g., "space-lg" → "lg")
 */
function removePrefix(name, prefix) {
    if (name.startsWith(prefix + '-')) {
        return name.substring(prefix.length + 1);
    }
    return name;
}

// ============ GENERATE tokens.css ============

let tokensCSS = `/**
 * Design Tokens - Auto-generated from tokens.json
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:build' to regenerate
 * Source: Figma Token Studio
 */

:root {
`;

// Process foundation base colors
const baseColors = foundationValue.base || {};
const flatBaseColors = flattenTokens(baseColors);

tokensCSS += '\n  /* ===== Foundation: Base Colors ===== */\n';
for (const [name, value] of Object.entries(flatBaseColors)) {
    tokensCSS += `  --base-${name}: ${value};\n`;
}

// Process foundation spacing tokens
const spacingTokens = (foundationValue.base && foundationValue.base.space) || {};
tokensCSS += '\n  /* ===== Foundation: Spacing ===== */\n';
for (const [name, token] of Object.entries(spacingTokens)) {
    if (token && token.value) {
        const cleanName = removePrefix(name, 'space');
        tokensCSS += `  --space-${cleanName}: ${token.value};\n`;
    }
}

// Process foundation size tokens
const sizeTokens = (foundationValue.base && foundationValue.base.size) || {};
tokensCSS += '\n  /* ===== Foundation: Sizes ===== */\n';
for (const [name, token] of Object.entries(sizeTokens)) {
    if (token && token.value) {
        const cleanName = removePrefix(name, 'size');
        tokensCSS += `  --size-${cleanName}: ${token.value};\n`;
    }
}

// Process foundation radius tokens
const radiusTokens = (foundationValue.base && foundationValue.base.radius) || {};
tokensCSS += '\n  /* ===== Foundation: Border Radius ===== */\n';
for (const [name, token] of Object.entries(radiusTokens)) {
    if (token && token.value) {
        const cleanName = removePrefix(name, 'radius');
        tokensCSS += `  --radius-${cleanName}: ${token.value};\n`;
    }
}

// Process semantic fill colors (for backgrounds)
const fillColors = semanticValue.fill || {};
tokensCSS += '\n  /* ===== Semantic: Fill Colors (backgrounds) ===== */\n';
for (const [name, token] of Object.entries(fillColors)) {
    if (token && token.value) {
        const resolved = resolveAlias(token.value, foundationValue);
        tokensCSS += `  --fill-${name}: ${resolved};\n`;
    }
}

// Process semantic stroke colors (for borders)
const strokeColors = semanticValue.stroke || {};
tokensCSS += '\n  /* ===== Semantic: Stroke Colors (borders) ===== */\n';
for (const [name, token] of Object.entries(strokeColors)) {
    if (token && token.value) {
        const resolved = resolveAlias(token.value, foundationValue);
        tokensCSS += `  --stroke-${name}: ${resolved};\n`;
    }
}

// Process semantic text colors
const textColors = semanticValue.text || {};
tokensCSS += '\n  /* ===== Semantic: Text Colors ===== */\n';
for (const [name, token] of Object.entries(textColors)) {
    if (token && token.value) {
        const resolved = resolveAlias(token.value, foundationValue);
        tokensCSS += `  --text-${name}: ${resolved};\n`;
    }
}

tokensCSS += '}\n';

// ============ GENERATE theme.css ============

let themeCSS = `/**
 * Tailwind Theme - Auto-generated from tokens.json
 * DO NOT EDIT MANUALLY - Run 'npm run tokens:build' to regenerate
 * 
 * Usage:
 * - bg-blue, bg-green, bg-rose (backgrounds from fill tokens)
 * - text-danger, text-success, text-rose (text from text tokens)
 * - border-blue, border-green, border-rose (borders from stroke tokens)
 * - p-lg, m-md, gap-sm (spacing)
 * - rounded-md, rounded-lg (border radius)
 */

@theme inline {
  /* ===== Border Radius (rounded-*) ===== */
`;

// Generate border radius for @theme
for (const [name] of Object.entries(radiusTokens)) {
    if (name && radiusTokens[name] && radiusTokens[name].value) {
        const cleanName = removePrefix(name, 'radius');
        themeCSS += `  --radius-${cleanName}: var(--radius-${cleanName});\n`;
    }
}

themeCSS += '}\n';

// ============ GENERATE COLOR UTILITIES ============
// We generate explicit utility classes to ensure correct variable mapping

themeCSS += `
/* ===== Background Color Utilities (from fill tokens) ===== */
`;

for (const [name] of Object.entries(fillColors)) {
    themeCSS += `.bg-${name} { background-color: var(--fill-${name}); }\n`;
}

themeCSS += `
/* ===== Text Color Utilities (from text tokens) ===== */
`;

for (const [name] of Object.entries(textColors)) {
    themeCSS += `.text-${name} { color: var(--text-${name}); }\n`;
}

themeCSS += `
/* ===== Border Color Utilities (from stroke tokens) ===== */
`;

for (const [name] of Object.entries(strokeColors)) {
    themeCSS += `.border-${name} { border-color: var(--stroke-${name}); }\n`;
}

// ============ GENERATE SPACING UTILITIES ============
themeCSS += `
/* ===== Spacing Utilities (auto-generated) ===== */
`;

for (const [name] of Object.entries(spacingTokens)) {
    if (name && spacingTokens[name] && spacingTokens[name].value) {
        const cleanName = removePrefix(name, 'space');
        themeCSS += `
/* ${cleanName} spacing */
.p-${cleanName} { padding: var(--space-${cleanName}); }
.px-${cleanName} { padding-left: var(--space-${cleanName}); padding-right: var(--space-${cleanName}); }
.py-${cleanName} { padding-top: var(--space-${cleanName}); padding-bottom: var(--space-${cleanName}); }
.pt-${cleanName} { padding-top: var(--space-${cleanName}); }
.pr-${cleanName} { padding-right: var(--space-${cleanName}); }
.pb-${cleanName} { padding-bottom: var(--space-${cleanName}); }
.pl-${cleanName} { padding-left: var(--space-${cleanName}); }
.m-${cleanName} { margin: var(--space-${cleanName}); }
.mx-${cleanName} { margin-left: var(--space-${cleanName}); margin-right: var(--space-${cleanName}); }
.my-${cleanName} { margin-top: var(--space-${cleanName}); margin-bottom: var(--space-${cleanName}); }
.mt-${cleanName} { margin-top: var(--space-${cleanName}); }
.mr-${cleanName} { margin-right: var(--space-${cleanName}); }
.mb-${cleanName} { margin-bottom: var(--space-${cleanName}); }
.ml-${cleanName} { margin-left: var(--space-${cleanName}); }
.gap-${cleanName} { gap: var(--space-${cleanName}); }
.gap-x-${cleanName} { column-gap: var(--space-${cleanName}); }
.gap-y-${cleanName} { row-gap: var(--space-${cleanName}); }
`;
    }
}

// ============ PROCESS COMPONENT TOKENS ============
// componentsMode already extracted at the top

// Flatten component tokens and add to tokens.css
let componentTokenCount = 0;

// Add component tokens to tokensCSS
tokensCSS = tokensCSS.replace('}', ''); // Remove closing brace to add more
tokensCSS += '\n  /* ===== Component Tokens ===== */\n';

// Process each component (e.g., button)
for (const [componentName, componentData] of Object.entries(componentsMode)) {
    // Process each variant (e.g., primary, secondary)
    for (const [variantName, variantData] of Object.entries(componentData)) {
        // Process each property (e.g., fill, text, stroke)
        for (const [propName, propData] of Object.entries(variantData)) {
            if (propData && propData.value) {
                // Create CSS variable name: --button-primary-fill
                const varName = `--${componentName}-${variantName}-${propName}`;
                // Resolve the alias to get the CSS variable reference
                const aliasValue = propData.value; // e.g., "{fill.blue}"

                // Convert {fill.blue} to var(--fill-blue)
                const aliasMatch = aliasValue.match(/^\{(.+)\}$/);
                if (aliasMatch) {
                    // Try to resolve from semanticValue first, then foundationValue
                    const resolved = resolveAlias(aliasValue, { ...foundationValue, ...semanticValue });
                    tokensCSS += `  ${varName}: ${resolved};\n`;
                } else {
                    tokensCSS += `  ${varName}: ${aliasValue};\n`;
                }
                componentTokenCount++;
            }
        }
    }
}

tokensCSS += '}\n';

// Generate component utility classes
themeCSS += `
/* ===== Component Token Utilities ===== */
`;

for (const [componentName, componentData] of Object.entries(componentsMode)) {
    for (const [variantName, variantData] of Object.entries(componentData)) {
        for (const [propName, propData] of Object.entries(variantData)) {
            if (propData && propData.value) {
                const varName = `--${componentName}-${variantName}-${propName}`;
                const className = `${componentName}-${variantName}-${propName}`;

                // Check if this is a hover property (ends with -hover)
                const isHoverProp = propName.endsWith('-hover');

                // Generate appropriate utility based on property type
                if (propName === 'fill' || propName.startsWith('fill')) {
                    themeCSS += `.bg-${className} { background-color: var(${varName}); }\n`;
                    // Generate hover variant for -hover properties
                    if (isHoverProp) {
                        themeCSS += `.hover\\:bg-${className}:hover { background-color: var(${varName}); }\n`;
                    }
                } else if (propName === 'text' || propName.startsWith('text')) {
                    themeCSS += `.text-${className} { color: var(${varName}); }\n`;
                    if (isHoverProp) {
                        themeCSS += `.hover\\:text-${className}:hover { color: var(${varName}); }\n`;
                    }
                } else if (propName === 'stroke' || propName.startsWith('stroke')) {
                    themeCSS += `.border-${className} { border-color: var(${varName}); }\n`;
                    if (isHoverProp) {
                        themeCSS += `.hover\\:border-${className}:hover { border-color: var(${varName}); }\n`;
                    }
                }
            }
        }
    }
}

// Ensure output directory exists
const outputDir = path.dirname(TOKENS_OUTPUT);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Write CSS files
fs.writeFileSync(TOKENS_OUTPUT, tokensCSS);
fs.writeFileSync(THEME_OUTPUT, themeCSS);

console.log(`✅ Tokens built successfully!`);
console.log(`   Input:  ${TOKENS_INPUT}`);
console.log(`   Output: ${TOKENS_OUTPUT}`);
console.log(`   Output: ${THEME_OUTPUT}`);
console.log('');
console.log('   Generated tokens:');
console.log(`   - ${Object.keys(flatBaseColors).length} foundation base colors`);
console.log(`   - ${Object.keys(fillColors).length} semantic fill colors → bg-*`);
console.log(`   - ${Object.keys(strokeColors).length} semantic stroke colors → border-*`);
console.log(`   - ${Object.keys(textColors).length} semantic text colors → text-*`);
console.log(`   - ${Object.keys(spacingTokens).length} foundation spacing tokens → p-*, m-*, gap-*`);
console.log(`   - ${Object.keys(sizeTokens).length} foundation size tokens`);
console.log(`   - ${Object.keys(radiusTokens).length} foundation radius tokens → rounded-*`);
console.log(`   - ${componentTokenCount} component tokens → bg-button-*, text-button-*, border-button-*`);
console.log('');
console.log('   🎉 All files auto-generated! No manual CSS changes needed.');

