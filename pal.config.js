/** @type {import('@paljs/types').Config} */

module.exports = {
  backend: {
    doNotUseFieldUpdateOperationsInput: true,
    generator: 'nexus',
  },
  schema: './prisma/schema.prisma'
}
