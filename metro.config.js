// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

// Add extra asset extensions (no duplicates)
config.resolver.assetExts = [
  ...new Set([
    ...config.resolver.assetExts,
    'glb', 'obj', 'gltf', 'md', 'txt', 'onnx', 'dat', 'conf', 'uuid', 'svg',
  ]),
];

module.exports = config;