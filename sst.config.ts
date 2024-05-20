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
    const email = new sst.aws.Email("LIGMAEmail", {
      sender: "admin@fullstacktechnyc.com",
    });
    new sst.aws.Nextjs("LIGMAWeb", {
      link: [bucket, email]
    });

  },
});
