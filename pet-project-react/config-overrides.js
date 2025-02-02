import { override, addBabelPlugin, addBabelPreset } from 'customize-cra';
export default override(
    addBabelPlugin('styled-jsx/babel')
);