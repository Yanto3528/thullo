import ImageKit from 'imagekit-javascript'

export const imagekitClient = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT || '',
  authenticationEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_AUTHENTICATION_ENDPOINT || '',
})
