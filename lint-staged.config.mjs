const config = {
  "**/*": (filenames) => [
    `pnpm prettier --write ${filenames
      .map((filename) => `'${filename}'`)
      .join(" ")}`,
  ],
};

export default config;
