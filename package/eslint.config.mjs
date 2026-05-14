import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [".next/**", "node_modules/**", "dist/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
];
