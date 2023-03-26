import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      documents: ['src/**/*.tsx'],
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
