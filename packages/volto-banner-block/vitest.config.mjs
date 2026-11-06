import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const here = path.dirname(fileURLToPath(import.meta.url));

// The add-on sources import Volto's modules through @plone/volto, which the
// project checks out under core/. JSX uses the automatic runtime, so the
// components need no React import.
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@plone/volto': path.resolve(here, '../../core/packages/volto/src'),
      // The add-on does not declare react-intl; use the version Volto pins.
      'react-intl': path.resolve(
        here,
        '../../core/packages/volto/node_modules/react-intl',
      ),
    },
  },
  test: {
    environment: 'node',
  },
});
