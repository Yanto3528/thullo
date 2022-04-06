import { prisma } from './index'

import { users } from '../data'

async function main() {
  await prisma.user.createMany({
    data: users,
  })
}

main()
  .catch((e) => {
    // eslint-disable-next-line
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
