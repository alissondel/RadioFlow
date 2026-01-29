import rocketseatNext from "@rocketseat/eslint-config/next";  // Pode precisar de adaptação [web:52]
import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...rocketseatNext,
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
]);