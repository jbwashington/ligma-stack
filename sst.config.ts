/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "ligma-stack",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("LIGMAS3", {
      public: true,
    });
    new sst.aws.Nextjs("LIGMAWeb", {
      link: [bucket]
    });
  },
});
