export default {
  experimental: {
    serverComponentsExternalPackages: ["vscode-oniguruma", "shiki"],
    outputFileTracingIncludes: {
      "/notes/[note]": ["./node_modules/shiki/themes/*"],
    },
  },
};
