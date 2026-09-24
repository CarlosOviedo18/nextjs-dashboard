import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  // eslint-plugin-react's "detect" probe uses APIs removed in ESLint 10, so pin the version.
  { settings: { react: { version: '19.0' } } },
];

export default config;
