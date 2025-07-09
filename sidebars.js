// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  defaultSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction-to-aerospace-medicine',
        'getting-started/is-this-career-for-me',
        'getting-started/how-to-get-involved-as-a-med-student',
      ],
    },
    {
      type: 'category',
      label: 'Career Paths',
      items: [
        'career-paths/overview-military-vs-civilian',
        'career-paths/military-careers',
        'career-paths/civilian-careers',
        'career-paths/the-astronaut-pathway',
      ],
    },
    {
      type: 'category',
      label: 'Training & Education',
      items: [
        'training-education/residency-fellowship-overview',
        'training-education/military-training-pathways',
        'training-education/civilian-training-pathways',
        'training-education/essential-certifications-skills',
        'training-education/building-your-cv-for-applications',
      ],
    },
    {
      type: 'category',
      label: 'Research',
      items: [
        'research/finding-research-opportunities',
        'research/key-research-institutions',
        'research/hot-topics-in-aerospace-research',
        'research/a-students-guide-to-grant-writing',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/organizations-societies',
        'resources/scholarships-funding',
        'resources/directory-companies-institutions',
        'resources/recommended-reading',
      ],
    },
  ],
};

export default sidebars;
