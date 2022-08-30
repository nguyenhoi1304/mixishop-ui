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
import Privacypolicy from '~/pages/Privacypolicy'
import Rules from '~/pages/Rules'
import Sitemap from '~/pages/Sitemap'


const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.notification, component: Notification },
    { path: config.routes.privacypolicy, component: Privacypolicy },
    { path: config.routes.rules, component: Rules },
    { path: config.routes.sitemap, component: Sitemap },
    { path: config.routes.listProducts.list, component: ListProducts },




]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }

