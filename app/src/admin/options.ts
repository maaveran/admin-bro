import { AdminBroOptions } from 'admin-bro'
import { models } from '../databases/sequelize/models'
import * as UserAdmin from './resources/user'
import * as BlogPostAdmin from './resources/blog-post'
import * as MediaAdmin from './resources/media'
import * as BrandAdmin from './resources/brand'
import * as ProductAdmin from './resources/product'

const rootPath = '/admin'

export const options: AdminBroOptions = {
  rootPath,
  version: {
    admin: true,
  },
  resources: [
    { resource: models.User, ...UserAdmin },
    { resource: models.BlogPost, ...BlogPostAdmin },
    { resource: models.Media, ...MediaAdmin },
    { resource: models.Brand, ...BrandAdmin },
    { resource: models.Product, ...ProductAdmin },
  ],
}
