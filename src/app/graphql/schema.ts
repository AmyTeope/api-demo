import { makeSchema } from 'nexus'
import { join } from 'path'
import { paljs } from '@paljs/nexus'

import * as types from '../../graphql'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, 'generated/nexus-typegen.ts'),
    schema: join(__dirname, 'generated/schema.graphql'),
  },
  prettierConfig: join(__dirname, '../../../package.json'),
  plugins: [paljs()],
})
