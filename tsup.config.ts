import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/nba/**/!(*.test).tsx'],
  format: ['cjs', 'esm'],
  dts: true, // Generate TypeScript declarations
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  minify: true,
  splitting: false,
  treeshake: true,
  outDir: 'dist',
});
