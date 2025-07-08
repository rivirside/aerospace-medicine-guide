// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
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
        'resources/companies-institutions',
        'resources/recommended-reading',
      ],
    },
  ],
};

export default sidebars;