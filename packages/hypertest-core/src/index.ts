export interface HypertestPluginReturnType {}

export interface HypertestPlugin {
  run: () => Promise<HypertestPluginReturnType>;
}

interface HypertestCore {
  run: () => Promise<void>;
}

export type HypertestCoreFactory = (options: {
  plugin: HypertestPlugin;
}) => HypertestCore;

export const HypertestCore: HypertestCoreFactory = (options: {
  plugin: HypertestPlugin;
}): HypertestCore => {
  console.log(options.plugin);
  return {
    run: async () => {
      console.log(await options.plugin.run());
    },
  };
};
