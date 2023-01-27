import { SanityContentSource } from "@stackbit/cms-sanity";
import * as path from "path";

export default {
  stackbitVersion: "0.6.0",
  ssgName: "nextjs",
  buildCommand: "npm run build",
  publishDir: "out",
  nodeVersion: "16",
  import: {
    contentFile: "sanity-export/export.tar.gz",
    datasetEnvVar: "SANITY_DATASET",
    deployGraphql: false,
    deployStudio: true,
    projectIdEnvVar: "SANITY_PROJECT_ID",
    sanityStudioPath: "studio",
    tokenEnvVar: "SANITY_ACCESS_TOKEN",
    type: "sanity",
  },
  mapModels: ({ models }) => {
    return models.map((model) => {
      if (["page", "landing"].includes(model.name)) {
        return { ...model, type: "page", urlPath: "/{slug}" };
      }
      return model;
    });
  },

  contentSources: [
    new SanityContentSource({
      rootPath: __dirname,
      studioPath: path.join(__dirname, "studio"),
      studioUrl: "",
      projectId: process.env.SANITY_PROJECT_ID,
      token: process.env.SANITY_ACCESS_TOKEN,
      dataset: process.env.SANITY_DATASET || "production",
    }),
  ],
};
