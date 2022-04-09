import { NextApiHandler } from 'next'

import { imagekit } from '@/lib/imagekit'

const handler: NextApiHandler = (req, res) => {
  const authenticationParams = imagekit.getAuthenticationParameters()

  res.json(authenticationParams)
}

export default handler
