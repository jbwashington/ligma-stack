import { featuresConfig } from "@/config/marketing";

export const FeaturesSection = async () => {
  return (
    <section className="">
      <div className="mx-auto flex max-w-[58rem] flex-col space-y-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {featuresConfig.description}
        </p>
      </div>
      <div className="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {featuresConfig.features.map((feature, index) => (
          <div className="flex h-[180px] flex-col rounded-md p-6" key={index}>
            <div className="space-y-2">
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
