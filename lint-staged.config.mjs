export default {
  "*": (filenames) => [
    `npm run format -- --write ${filenames
      .map((filename) => `'${filename}'`)
      .join(" ")}`,
  ],
  "*.{ts,tsx}": () => ["npm run lint"],
};
