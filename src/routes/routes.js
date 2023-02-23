import config from '~/config'
//Layout
// import { HeaderOnly } from '~/layouts'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Search from '~/pages/Search'
import Notification from '~/pages/Notification'
import ListProducts from '~/pages/ListProducts'
import Privacypolicy from '~/pages/Privacypolicy'
import Rules from '~/pages/Rules'
import Sitemap from '~/pages/Sitemap'
import Productdetails from '~/pages/Productdetails/Productdetails'
import Register from '~/pages/Register'
import Login from '~/pages/Login'


const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.productdetail, component: Productdetails },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register, /*layout: HeaderOnly*/ },
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

