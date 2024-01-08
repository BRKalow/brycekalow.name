export default {
  experimental: {
    serverComponentsExternalPackages: ["vscode-oniguruma", "shiki"],
    outputFileTracingIncludes: {
      "/notes/*": [
        "node_modules/shikiji/dist/languages/**/*",
        "node_modules/shikiji/dist/themes/**/*",
      ],
    },
  },
};
