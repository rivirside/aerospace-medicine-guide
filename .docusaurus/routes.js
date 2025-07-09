import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7af'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/aerospace-medicine',
    component: ComponentCreator('/blog/tags/aerospace-medicine', 'bba'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', '8a2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '0a4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '192'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fca'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '219'),
            routes: [
              {
                path: '/docs/career-paths/civilian-careers',
                component: ComponentCreator('/docs/career-paths/civilian-careers', 'f1e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/career-paths/military-careers',
                component: ComponentCreator('/docs/career-paths/military-careers', 'ec0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/career-paths/overview-military-vs-civilian',
                component: ComponentCreator('/docs/career-paths/overview-military-vs-civilian', '0be'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/career-paths/the-astronaut-pathway',
                component: ComponentCreator('/docs/career-paths/the-astronaut-pathway', '098'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/getting-started/how-to-get-involved-as-a-med-student',
                component: ComponentCreator('/docs/getting-started/how-to-get-involved-as-a-med-student', '6fb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/getting-started/introduction-to-aerospace-medicine',
                component: ComponentCreator('/docs/getting-started/introduction-to-aerospace-medicine', '7f8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/getting-started/is-this-career-for-me',
                component: ComponentCreator('/docs/getting-started/is-this-career-for-me', '5de'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/research/a-students-guide-to-grant-writing',
                component: ComponentCreator('/docs/research/a-students-guide-to-grant-writing', '612'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/research/finding-research-opportunities',
                component: ComponentCreator('/docs/research/finding-research-opportunities', '485'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/research/hot-topics-in-aerospace-research',
                component: ComponentCreator('/docs/research/hot-topics-in-aerospace-research', '7c5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/research/key-research-institutions',
                component: ComponentCreator('/docs/research/key-research-institutions', 'd82'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/resources/directory-companies-institutions',
                component: ComponentCreator('/docs/resources/directory-companies-institutions', '107'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/resources/organizations-societies',
                component: ComponentCreator('/docs/resources/organizations-societies', 'dfe'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/resources/recommended-reading',
                component: ComponentCreator('/docs/resources/recommended-reading', '5ad'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/resources/scholarships-funding',
                component: ComponentCreator('/docs/resources/scholarships-funding', 'cdf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/training-education/building-your-cv-for-applications',
                component: ComponentCreator('/docs/training-education/building-your-cv-for-applications', '6ee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/training-education/civilian-training-pathways',
                component: ComponentCreator('/docs/training-education/civilian-training-pathways', '470'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/training-education/essential-certifications-skills',
                component: ComponentCreator('/docs/training-education/essential-certifications-skills', '46b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/training-education/military-training-pathways',
                component: ComponentCreator('/docs/training-education/military-training-pathways', 'f3c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/training-education/residency-fellowship-overview',
                component: ComponentCreator('/docs/training-education/residency-fellowship-overview', '17b'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
