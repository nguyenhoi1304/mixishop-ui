import config from '~/config'
//Layout
import { HeaderOnly } from '~/layouts'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Live from '~/pages/Live'
import Notification from '~/pages/Notification'
import ListProducts from '~/pages/ListProducts'


const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.notification, component: Notification },
    { path: config.routes.listProducts.list, component: ListProducts },
    { path: config.routes.listProducts.souvenir, component: ListProducts },
    { path: config.routes.listProducts.mixishirt, component: ListProducts },
    { path: config.routes.listProducts.baloshirt, component: ListProducts },
    { path: config.routes.listProducts.CSGOshirt, component: ListProducts },
    { path: config.routes.listProducts.PUBGshirt, component: ListProducts },
    { path: config.routes.listProducts.refundshirt, component: ListProducts },



]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }

