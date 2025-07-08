import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/aerospace-medicine-guide/markdown-page/',
    component: ComponentCreator('/aerospace-medicine-guide/markdown-page/', 'e36'),
    exact: true
  },
  {
    path: '/aerospace-medicine-guide/docs/',
    component: ComponentCreator('/aerospace-medicine-guide/docs/', '5ab'),
    routes: [
      {
        path: '/aerospace-medicine-guide/docs/',
        component: ComponentCreator('/aerospace-medicine-guide/docs/', 'e76'),
        routes: [
          {
            path: '/aerospace-medicine-guide/docs/',
            component: ComponentCreator('/aerospace-medicine-guide/docs/', '856'),
            routes: [
              {
                path: '/aerospace-medicine-guide/docs/career-paths/civilian-careers/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/civilian-careers/', '815'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/career-paths/military-careers/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/military-careers/', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/career-paths/overview-military-vs-civilian/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/overview-military-vs-civilian/', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/career-paths/the-astronaut-pathway/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/career-paths/the-astronaut-pathway/', 'e7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/getting-started/how-to-get-involved-as-a-med-student/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/getting-started/how-to-get-involved-as-a-med-student/', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/getting-started/introduction-to-aerospace-medicine/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/getting-started/introduction-to-aerospace-medicine/', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/getting-started/is-this-career-for-me/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/getting-started/is-this-career-for-me/', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/intro/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/intro/', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/a-students-guide-to-grant-writing/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/a-students-guide-to-grant-writing/', 'daf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/finding-research-opportunities/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/finding-research-opportunities/', '99a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/hot-topics-in-aerospace-research/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/hot-topics-in-aerospace-research/', '2bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/research/key-research-institutions/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/research/key-research-institutions/', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/companies-institutions/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/companies-institutions/', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/organizations-societies/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/organizations-societies/', '437'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/recommended-reading/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/recommended-reading/', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/resources/scholarships-funding/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/resources/scholarships-funding/', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/building-your-cv-for-applications/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/building-your-cv-for-applications/', '1a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/civilian-training-pathways/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/civilian-training-pathways/', 'b97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/essential-certifications-skills/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/essential-certifications-skills/', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/military-training-pathways/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/military-training-pathways/', '385'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/aerospace-medicine-guide/docs/training-education/residency-fellowship-overview/',
                component: ComponentCreator('/aerospace-medicine-guide/docs/training-education/residency-fellowship-overview/', 'd2f'),
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
