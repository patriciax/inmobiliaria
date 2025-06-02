import DefaultLayout from "@/layouts/Default.vue";
import AuthLayout from "@/layouts/Auth.vue";
import DefaultLayoutPublic from "@/layouts/Public.vue";

export const routes = [
    // home routes
    {
        path: '/',
        name: 'Home-1',
        component: () => import('@/views/public/catalog/sale.vue'),
        meta: {
            title: 'Home v.1',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-home-v2',
        name: 'Home-2',
        component: () => import('@/views/real-estate/home-2/index.vue'),
        meta: {
            title: 'Home v.2',
            layout: DefaultLayout
        }
    },
    // catalog routes
    {
        path: '/real-estate-catalog-rent',
        name: 'Property Rent',

        component: () => import('@/views/public/catalog/rent.vue'),
        meta: {
            title: 'Property For Rent',
            layout: DefaultLayoutPublic
        }
    },
    {
        path: '/real-estate-catalog-sale',
        name: 'Property Sale',
        component: () => import('@/views/public/catalog/sale.vue'),
        meta: {
            title: 'Property For Sale',
            layout: DefaultLayoutPublic
        }
    },
    {
        path: '/real-estate-single-v1',
        name: 'Single Property v1',
        component: () => import('@/views/public/catalog/single-1.vue'),
        meta: {
            title: 'Single Property v1',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-single-v2',
        name: 'Single Property v2',
        component: () => import('@/views/real-estate/catalog/single-2.vue'),
        meta: {
            title: 'Single Property v2',
            layout: DefaultLayout
        }
    },

    // account
    {
        path: '/real-estate-account-info',
        name: 'Account Info',
        component: () => import('@/views/real-estate/account/account-info.vue'),
        meta: {
            title: 'Account Personal Info',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-account-security',
        name: 'Account Security',
        component: () => import('@/views/real-estate/account/security.vue'),
        meta: {
            title: 'Account Password & Security',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-account-properties',
        name: 'Account Properties',
        component: () => import('@/views/real-estate/account/properties.vue'),
        meta: {
            title: 'Account My Properties',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-account-wishlist',
        name: 'Account Wishlist',
        component: () => import('@/views/real-estate/account/wishlist.vue'),
        meta: {
            title: 'Account Wishlist',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-account-reviews',
        name: 'Account Reviews',
        component: () => import('@/views/real-estate/account/reviews.vue'),
        meta: {
            title: 'Account Reviews',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-account-notifications',
        name: 'Account Notifications',
        component: () => import('@/views/real-estate/account/notifications.vue'),
        meta: {
            title: 'Account Notifications',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-help-center',
        name: 'Account Help Center',
        component: () => import('@/views/real-estate/account/help-center.vue'),
        meta: {
            title: 'Account Help Center',
            layout: DefaultLayout
        }
    },

    // auth routes
    {
        path: '/signin-light',
        name: 'Sign In Page',
        component: () => import('@/views/real-estate/auth/signin-light.vue'),
        meta: {
            title: 'Sign In Page',
            layout: AuthLayout
        }
    },
    {
        path: '/signup-light',
        name: 'Sign Up Page',
        component: () => import('@/views/real-estate/auth/signup-light.vue'),
        meta: {
            title: 'Sign Up Page',
            layout: AuthLayout
        }
    },

    // vendor routes
    {
        path: '/real-estate-add-property',
        name: 'Add Property',
        component: () => import('@/views/real-estate/vendor/add-property.vue'),
        meta: {
            title: 'Add Property',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-property-promotion',
        name: 'Property Promotion',
        component: () => import('@/views/real-estate/vendor/property-promotion.vue'),
        meta: {
            title: 'Property Promotion',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-vendor-properties',
        name: 'Vendor Property',
        component: () => import('@/views/real-estate/vendor/vendor-properties.vue'),
        meta: {
            title: 'Vendor Property',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-vendor-reviews',
        name: 'Vendor Reviews',
        component: () => import('@/views/real-estate/vendor/vendor-reviews.vue'),
        meta: {
            title: 'Vendor Reviews',
            layout: DefaultLayout
        }
    },

    // pages routes
    {
        path: '/real-estate-about',
        name: 'About',
        component: () => import('@/views/real-estate/about/index.vue'),
        meta: {
            title: 'About',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-blog',
        name: 'Blog Grid',
        component: () => import('@/views/real-estate/blog/grid.vue'),
        meta: {
            title: 'Blog Grid',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-blog-single',
        name: 'Blog Single',
        component: () => import('@/views/real-estate/blog/single.vue'),
        meta: {
            title: 'Blog Single',
            layout: DefaultLayout
        }
    },
    {
        path: '/real-estate-contacts',
        name: 'Contact Us',
        component: () => import('@/views/real-estate/contact/index.vue'),
        meta: {
            title: 'Contact Us',
            layout: DefaultLayout
        }
    },

    // 404 error
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/components/NotFound.vue'),
        meta: {
            title: '404',
        }
      }
]
