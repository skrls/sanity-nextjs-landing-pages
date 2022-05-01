export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '626dfc1ff34b1978f2c1a25e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ppjx7pop',
                  apiId: '03904706-a7f3-4e04-b347-f557a6605cb5'
                },
                {
                  buildHookId: '626dfc20299e4573a86926f0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fveukbs7',
                  apiId: '82c6ffe2-9b9b-4665-ba0a-3455eb5f27fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skrls/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fveukbs7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
