import { NextApiRequest } from 'next'
import jwt from 'jsonwebtoken'

interface UserPayload {
  id: number
}

export const isAuthenticated = (req: NextApiRequest) => {
  const { token } = req.cookies
  if (!token) {
    return false
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload

    return decodedUser
  } catch (error) {
    return false
  }
}
