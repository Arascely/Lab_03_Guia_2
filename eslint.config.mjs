import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "eqeqeq": "error",         // [cite: 209, 219]
            "no-var": "warn",          // [cite: 210, 219]
            "no-unused-vars": "warn",  // [cite: 213, 219]
            "prefer-const": "warn"     // [cite: 216, 219]
        }
    }
];