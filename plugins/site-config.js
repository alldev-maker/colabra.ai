export default defineNuxtPlugin(async function (nuxtApp) {
  // const sanity = useSanity()

  // console.log('here', nuxtApp)
  // const featuredPodcast = await app.$sanity.fetch(`
  // *[_type=="podcast_show"]|order(title asc)[0]{
  //   "title": title+" podcast",
  //   "path": "/podcasts/"+slug.current+"/"
  // }`)

  // const siteConfig = {
  //   name: 'Colabra',
  //   icon: {
  //     favicon: './src/assets/favicon.png',
  //     touchicon: './src/assets/favicon.png',
  //   },
  //   url: 'https://www.colabra.ai',
  //   settings: {
  //     web: 'https://www.colabra.ai',
  //     twitter: 'https://www.twitter.com/ColabraHQ',
  //     nav: {
  //       links: [
  //         {
  //           path: null,
  //           title: 'Solutions',
  //           slug: 'solutions',
  //           children: [
  //             [
  //               // col one
  //               {
  //                 // row one
  //                 title: 'r&d cloud',
  //                 bottom: {
  //                   title: 'See all features',
  //                   path: '/pricing/#features',
  //                 },
  //                 items: [
  //                   {
  //                     icon: 'star-four-points-outline',
  //                     title: 'R&D AI Copilot',
  //                     description: 'Make better decisions',
  //                     path: '/ai-copilot',
  //                   },
  //                   {
  //                     icon: 'notebook-outline',
  //                     title: 'Knowledge management',
  //                     description: 'Collaborate on experiments',
  //                     path: '/electronic-lab-notebook',
  //                   },
  //                   {
  //                     icon: 'bullseye',
  //                     title: 'Project management',
  //                     description: 'Plan, assign, and track progress',
  //                     path: '/project-management',
  //                   },
  //                   // {
  //                   //   icon: 'beaker',
  //                   //   title: 'Inventory management',
  //                   //   description: 'Avoid bottlenecks and reduce waste',
  //                   //   path: '/inventory-management',
  //                   // },
  //                   // {
  //                   //   icon: 'clipboard-check-outline',
  //                   //   title: 'Protocols & SOPs',
  //                   //   description: 'Standardize operating procedures',
  //                   //   path: '/research-protocols',
  //                   // },
  //                   // {
  //                   //   icon: 'row-col-grid',
  //                   //   title: 'Equipment management',
  //                   //   description: 'Control access and analyze usage',
  //                   //   path: '/equipment-management',
  //                   // },
  //                   // {
  //                   //   icon: 'chart',
  //                   //   title: 'Lab intelligence',
  //                   //   description: 'Optimize your research workflows',
  //                   //   path: '/lab-intelligence',
  //                   // },
  //                 ],
  //               },
  //               {
  //                 title: 'more',
  //                 items: [
  //                   {
  //                     icon: 'security',
  //                     path: '/compliance/',
  //                     title: 'Security & compliance',
  //                   },
  //                   {
  //                     icon: 'hexagon-multiple-outline',
  //                     path: '/microsoft/',
  //                     title: 'Microsoft partnership',
  //                   },
  //                   {
  //                     icon: 'transit-connection-variant',
  //                     path: '/partners/',
  //                     title: 'Colabra Partner Network',
  //                   },
  //                   {
  //                     icon: 'school-outline',
  //                     path: '/academia/',
  //                     title: 'Colabra for Academia',
  //                   },
  //                   {
  //                     icon: 'rocket-launch-outline',
  //                     path: '/startups/',
  //                     title: 'Colabra for Startups',
  //                   },
  //                 ],
  //               },
  //             ],
  //             [
  //               {
  //                 title: 'integrations',
  //                 bottom: {
  //                   title: 'See all integrations',
  //                   path: '/integrations/',
  //                 },
  //                 items: [
  //                   ['Microsoft Teams', 'microsoft-teams'],
  //                   ['Github', 'github'],
  //                   ['TetraScience', 'tetrascience'],
  //                   ['Office 365', 'office-365'],
  //                   ['OneDrive', 'onedrive'],
  //                   ['Tableau', 'tableau'],
  //                   ['Deepnote', 'deepnote'],
  //                   ['Azure AD', 'azure-ad'],
  //                 ].map((i) => ({
  //                   title: i[0],
  //                   path: `/integrations/${i[1]}`,
  //                 })),
  //               },
  //               // {
  //               //   title: 'more',
  //               //   items: [
  //               //     {
  //               //       title: 'Compliance',
  //               //       path: '/compliance/',
  //               //       icon: 'security',
  //               //     },
  //               //   ],
  //               // },
  //             ],
  //           ],
  //         },
  //         // {
  //         //   path: null,
  //         //   title: 'Industries',
  //         //   slug: 'industries',
  //         //   children: [
  //         //     [
  //         //       {
  //         //         items: [
  //         //           {
  //         //             icon: '/navigation/barley.svg',
  //         //             path: '/food-science/',
  //         //             title: 'Food science',
  //         //           },
  //         //           {
  //         //             icon: '/navigation/hex.svg',
  //         //             path: '/materials-science/',
  //         //             title: 'Material science',
  //         //           },
  //         //           {
  //         //             icon: '/navigation/spider-web.svg',
  //         //             path: '/battery-engineering/',
  //         //             title: 'Synthetic biology',
  //         //           },
  //         //           {
  //         //             icon: '/navigation/pill.svg',
  //         //             path: '/health-longevity/',
  //         //             title: 'Health & longevity',
  //         //           },
  //         //         ],
  //         //       },
  //         //       {
  //         //         title: 'more',
  //         //         items: [
  //         //           {
  //         //             icon: '/navigation/school-hat.svg',
  //         //             path: '/academia/',
  //         //             title: 'Academia',
  //         //           },
  //         //           {
  //         //             icon: '/navigation/rocket.svg',
  //         //             path: '/startups/',
  //         //             title: 'Startup program',
  //         //           },
  //         //         ],
  //         //       },
  //         //     ],
  //         //   ],
  //         // },
  //         {
  //           path: null,
  //           title: 'Resources',
  //           slug: 'resources',
  //           children: [
  //             [
  //               {
  //                 title: 'best practices',
  //                 items: [
  //                   {
  //                     icon: 'file-chart-outline',
  //                     path: '/whitepapers/',
  //                     title: 'Whitepapers',
  //                   },
  //                   {
  //                     icon: 'newspaper',
  //                     path: '/blog/',
  //                     title: 'Modern Lab blog',
  //                   },
  //                   featuredPodcast
  //                     ? {
  //                         icon: 'headphones',
  //                         ...featuredPodcast,
  //                       }
  //                     : null,
  //                   {
  //                     icon: 'lightbulb-outline',
  //                     title: 'Lab management course',
  //                     path: '/course/',
  //                   },
  //                 ].filter((i) => !!i), // return all valid items
  //               },
  //               {
  //                 title: 'using colabra',
  //                 items: [
  //                   {
  //                     icon: 'lifebuoy',
  //                     path: 'https://docs.colabra.ai/',
  //                     title: 'Documentation',
  //                     external: true,
  //                   },
  //                   {
  //                     icon: 'flare',
  //                     path: '/changelog/',
  //                     title: 'Product updates',
  //                   },
  //                   {
  //                     icon: 'account-circle-outline',
  //                     path: '/case-studies/',
  //                     title: 'Customer stories',
  //                   },
  //                 ],
  //               },
  //               {
  //                 title: 'more',
  //                 items: [
  //                   { path: '/about/', title: 'About Colabra' },
  //                   {
  //                     path: 'mailto:hello@colabra.ai',
  //                     title: 'Contact us',
  //                     external: true,
  //                   },
  //                 ],
  //               },
  //             ],
  //           ],
  //         },
  //         {
  //           path: '/pricing/',
  //           title: 'Pricing',
  //           slug: 'pricing',
  //           children: [],
  //         },
  //       ],
  //     },
  //     footer: {
  //       product: [
  //         { path: '/pricing/', title: 'Pricing' },
  //         { path: '/integrations/', title: 'Integrations' },
  //         { path: '/partners/', title: 'Colabra Partner Network' },
  //         { path: '/microsoft/', title: 'Microsoft partnership' },
  //         { path: '/case-studies/', title: 'Case studies' },
  //         { path: '/compliance/', title: 'Compliance' },
  //         { path: '/alternatives/', title: 'Comparisons' },
  //       ],
  //       resources: [
  //         { path: '/blog/', title: 'Blog' },
  //         { path: '/method/', title: 'Method' },
  //         { path: '/podcasts/', title: 'Podcasts' },
  //         { path: '/course/', title: 'Lab management course' },
  //         { path: '/glossary/', title: 'Glossary' },
  //         {
  //           path: 'https://docs.colabra.ai/',
  //           title: 'Documentation',
  //           target: true,
  //           rel: true,
  //         },
  //         {
  //           path: '/changelog/',
  //           title: 'Changelog',
  //         },
  //       ],
  //       help_contact: [
  //         { path: '/about/', title: 'About' },
  //         {
  //           path: 'https://jobs.colabra.ai/',
  //           title: 'Careers',
  //           target: true,
  //           rel: true,
  //         },
  //         { path: '/demo/', title: 'Schedule demo' },
  //         { path: 'mailto:hello@colabra.ai', title: 'Email us' },
  //         {
  //           path: 'https://twitter.com/ColabraHQ',
  //           title: 'Twitter',
  //           target: true,
  //           rel: true,
  //         },
  //         {
  //           path: 'https://status.colabra.ai',
  //           title: 'Status',
  //           target: true,
  //           rel: true,
  //         },
  //       ],
  //     },
  //   },
  // }

  // nuxtApp.provide('site', siteConfig)
  nuxtApp.provide('site', {})
})
