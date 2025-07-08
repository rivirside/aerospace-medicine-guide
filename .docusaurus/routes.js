import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/aerospace-medicine-guide/markdown-page',
    component: ComponentCreator('/aerospace-medicine-guide/markdown-page', '52a'),
    exact: true
  },
  {
    path: '/aerospace-medicine-guide/docs',
    component: ComponentCreator('/aerospace-medicine-guide/docs', '5d6'),
    routes: [
      {
        path: '/aerospace-medicine-guide/docs',
        component: ComponentCreator('/aerospace-medicine-guide/docs', '782'),
        routes: [
          {
            path: '/aerospace-medicine-guide/docs',
            component: ComponentCreator('/aerospace-medicine-guide/docs', '4bf'),
            routes: [
              {
                path: '/aerospace-medicine-guide/docs/career-paths/civilian-careers',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/civilian-careers', '642'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/career-paths/military-careers',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/military-careers', 'ad6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/career-paths/overview-military-vs-civilian',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/overview-military-vs-civilian', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/career-paths/the-astronaut-pathway',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/the-astronaut-pathway', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/getting-started/how-to-get-involved-as-a-med-student',
                component: ComponentCreator('/aerospace-medicine-guide/docs/getting-started/how-to-get-involved-as-a-med-student', '8d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/getting-started/introduction-to-aerospace-medicine',
                component: ComponentCreator('/aerospace-medicine-guide/docs/getting-started/introduction-to-aerospace-medicine', 'd45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/getting-started/is-this-career-for-me',
                component: ComponentCreator('/aerospace-medicine-guide/docs/getting-started/is-this-career-for-me', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/intro',
                component: ComponentCreator('/aerospace-medicine-guide/docs/intro', 'c52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/a-students-guide-to-grant-writing',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/a-students-guide-to-grant-writing', '9f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/finding-research-opportunities',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/finding-research-opportunities', 'e77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/hot-topics-in-aerospace-research',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/hot-topics-in-aerospace-research', 'd84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/key-research-institutions',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/key-research-institutions', '2db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/companies-institutions',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/companies-institutions', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/organizations-societies',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/organizations-societies', '892'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/recommended-reading',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/recommended-reading', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/scholarships-funding',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/scholarships-funding', '4c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/building-your-cv-for-applications',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/building-your-cv-for-applications', '7c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/civilian-training-pathways',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/civilian-training-pathways', '9eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/essential-certifications-skills',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/essential-certifications-skills', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/military-training-pathways',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/military-training-pathways', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/residency-fellowship-overview',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/residency-fellowship-overview', '2e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/aerospace-medicine-guide/',
    component: ComponentCreator('/aerospace-medicine-guide/', '058'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
