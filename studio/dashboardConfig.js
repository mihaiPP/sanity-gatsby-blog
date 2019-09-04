export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6fab5cc2da3971a60b5d27',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iqrphcgb',
                  apiId: '474b4f39-4d52-4de2-9521-6a4aa434b801'
                },
                {
                  buildHookId: '5d6fab5cc965ea81677db315',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6hhhzq5j',
                  apiId: 'fb59285b-8aff-4eff-9280-355bf9abf2a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mihaiPP/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6hhhzq5j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
