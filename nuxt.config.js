export default {
	mode: 'spa',
	/*
  ** Headers of the page
  */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [ 'ant-design-vue/dist/antd.css', '@assets/scss/colors.scss' ],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [ '@/plugins/antd-ui', '@/plugins/api/api-service' ],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [
		'@nuxtjs/moment',

		// With options
		[
			'@nuxtjs/moment',
			{
				/* module options */
			}
		]
	],
	/*
  ** Nuxt.js modules
  */
	modules: [ '@nuxtjs/style-resources', '@nuxtjs/auth', '@nuxtjs/axios', '@nuxtjs/toast' ],
	axios: {
		baseURL: ''
	},
	toast: {
		position: 'top-center',
		duration: 2000
	},
	auth: {
		strategies: {
			local: {
				endpoints: {
					login: { url: '/token/generate-token', method: 'post', propertyName: 'token' },
					logout: false,
					// user: { url: '/user/user', method: 'get', propertyName: 'data' }
				},
				tokenRequired: true,
				tokenType: 'Bearer'
			}
			// facebook: {
			//   client_id: 'your facebook app id',
			//   userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email',
			//   scope: ['public_profile', 'email']
			// },
			// google: {
			//   client_id: 'your gcloud oauth app client id'
			// },
		},
		redirect: {
			login: '/login',
			logout: '/',
			// user: '/profile',
			// callback: '/',
			home: '/'
		}
	},
	router : {
		middleware: ['auth'],
	  },
	styleResources: {
		scss: [ './assets/scss/*.scss' ]
	},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
