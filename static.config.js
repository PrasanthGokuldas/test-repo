//https://github.com/react-static/react-static/blob/master/docs/config.md for configurations
import path from 'path'
import axios from 'axios'

export default {
  // plugins: ['react-static-plugin-sass'],
  // siteRoot: 'https://mysite.com',
  getSiteData: () => ({
    title: 'React Static',
    sitename: "Asddasdasdsa"
  }),
  getRoutes: async () => {
    // const { data: posts } = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )

    return [
      {
        path: '/'
      },
      // {
      //   path: '/blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     template: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        path: '404',
        template: 'src/pages/404',
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    [
      'react-static-plugin-favicons',
      {
        inputFile: path.resolve('./favicon', 'android-chrome-192x192.png'),
        // outputDir: path.join('./favicon', 'dist')
      },
    ],
    [
      "react-static-plugin-sass",
      {
        includePaths: 'src/pages/sass/', // always includes `src/`
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
