import bcrypt from 'bcrypt'
import { prisma } from './index'

import { users } from '../data'

async function main() {
  const newUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      return { ...user, password: hashedPassword }
    })
  )

  await prisma.user.createMany({
    data: newUsers,
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
