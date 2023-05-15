export default {
  experimental: {
    serverComponentsExternalPackages: ["vscode-oniguruma", "shiki"],
    outputFileTracingIncludes: {
      "/notes/[note]": ["./shiki-themes/*", "./shiki-languages/*"],
    },
  },
};
