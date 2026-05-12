import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                ...globals.node, 
            }
        },
        rules: {
            "eqeqeq": "error",
            "no-var": "warn",
            "prefer-const": "warn"
        }
    }
];