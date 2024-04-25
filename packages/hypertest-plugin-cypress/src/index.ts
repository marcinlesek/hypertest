import {
  HypertestPlugin,
  HypertestPluginReturnType,
} from "@hypertest/hypertest-core";

export const Plugin = (options: {}): HypertestPlugin => ({
  run: async (): Promise<HypertestPluginReturnType> => {
    return {};
  },
});
