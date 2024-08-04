import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  generates: {
    './src/app/graphql/generated/graphql.ts': {
      plugins: ['typescript'],
      schema: './src/app/graphql/generated/schema.graphql',
    },
  },
  hooks: { afterAllFileWrite: ['prettier -w'] },
  schema: './src/app/graphql/generated/schema.graphql',
}

export default config
