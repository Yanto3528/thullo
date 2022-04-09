import ImageKit from 'imagekit'

declare global {
  // eslint-disable-next-line
  var imagekit: ImageKit
}

let imagekit: ImageKit // eslint-disable-line

const imageKitOptions = {
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT || '',
}

if (process.env.NODE_ENV === 'production') {
  imagekit = new ImageKit(imageKitOptions)
} else {
  if (!global.imagekit) {
    global.imagekit = new ImageKit(imageKitOptions)
  }
  imagekit = global.imagekit
}

export { imagekit }
