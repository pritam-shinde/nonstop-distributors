import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Static vendor bundles / minified code:
    "public/assets/vendors/**",
    "public/assets/js/**",
  ]),
  {
    rules: {
      // Content-heavy marketing pages commonly use apostrophes/quotes in JSX copy.
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
