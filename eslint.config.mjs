import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // .ai/ holds kenkeep tooling (bundled hook scripts), not site code.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", ".ai/**"]),
]);

export default eslintConfig;
