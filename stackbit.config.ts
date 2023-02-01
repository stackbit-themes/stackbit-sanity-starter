import { SanityContentSource } from '@stackbit/cms-sanity';
import { defineStackbitConfig } from '@stackbit/types';
import * as path from 'path';

export default defineStackbitConfig({
    stackbitVersion: '0.5.0',
    ssgName: 'nextjs',
    nodeVersion: '16',
    buildCommand: 'npm run build',
    publishDir: 'out',

    import: {
        type: 'sanity',
        contentFile: 'sanity-export/export.tar.gz',
        sanityStudioPath: 'studio',
        deployStudio: true,
        deployGraphql: false,
        projectIdEnvVar: 'SANITY_PROJECT_ID',
        datasetEnvVar: 'SANITY_DATASET',
        tokenEnvVar: 'SANITY_TOKEN'
    },

    mapModels: ({ models }) => {
        return models.map((model) => {
            if (['page', 'landing'].includes(model.name)) {
                return { ...model, type: 'page', urlPath: '/{slug}' };
            }
            return model;
        });
    },

    contentSources: [
        new SanityContentSource({
            rootPath: __dirname,
            studioPath: path.join(__dirname, 'studio'),
            studioUrl: '',
            projectId: process.env.SANITY_PROJECT_ID,
            token: process.env.SANITY_TOKEN,
            dataset: process.env.SANITY_DATASET || 'production'
        })
    ]
});
