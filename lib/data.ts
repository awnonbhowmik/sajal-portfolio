export interface NewsItem {
  type: "publication" | "course" | "award" | "talk";
  text: string;
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  url?: string;
}

export interface TeachingCourse {
  code: string;
  name: string;
}

export interface TeachingInstitution {
  name: string;
  location: string;
  role: string;
  courses: TeachingCourse[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}

export interface JobEntry {
  title: string;
  institution: string;
  period: string;
}

export interface ServiceEntry {
  name: string;
  url?: string;
}

export const socialLinks = [
  {
    label: "ORCID",
    url: "https://orcid.org/0000-0003-1784-2741",
  },
  {
    label: "Google Scholar",
    url: "https://scholar.google.co.uk/citations?user=TH5CuuUAAAAJ&hl=en",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sajal-chakroborty-7752a6179/",
  },
  {
    label: "WPI Profile",
    url: "https://www.wpi.edu/people/faculty/schakroborty",
  },
];

export const bioText = `I am a Postdoctoral Scholar in the Department of Mathematical Sciences at Worcester Polytechnic Institute, Worcester, Massachusetts, USA. I earned my Ph.D. in Mathematics and MS in Statistics from Texas Tech University (TTU), USA. My current research focuses on Statistical Machine Learning and Data Science. I also have research experience in Operations research, Optimization, and Mathematical Modeling in Biology. I enjoy my teaching equally as I enjoy my research. I have more than five years of teaching experience. I have taught several courses at Texas Tech University. I always enjoy working with first-generation students, especially from underrepresented communities. Thank you for taking the time to read my profile.`;

export const recentNews: NewsItem[] = [
  {
    type: "publication",
    text: "New Publication: Sajal Chakroborty, Ram Iyer, A. Alexandre Trindade, On the Use of M-quantiles for Outlier Detection in Multidimensional Data, accepted for publication in the journal \"Mathematical Methods of Statistics\", Springer.",
  },
  {
    type: "publication",
    text: "New Publication: Joshua DeOliveira, Sajal Chakroborty, Walter Gerych, Elke Rundensteiner, Neural Tangent Kernels under Stochastic Data augmentation, accepted for publication in the Proceedings of the AAAI Conference on Artificial Intelligence, 2026.",
  },
  {
    type: "course",
    text: "Course: I will teach MA 595: Advanced Mathematical Statistics in Spring 2026 (C and D term) at WPI.",
  },
  {
    type: "course",
    text: "Course: I will teach MA 2621: Probability for Applications in Spring 2026 (C-term) at WPI.",
  },
  {
    type: "course",
    text: "Course: I will teach MA 2611: Applied Statistics-I in Spring 2026 (D-term) at WPI.",
  },
  {
    type: "award",
    text: 'Award: Our paper titled "MXene Material Property Prediction via Transfer Learning with Graph Neural Networks" received the Best Paper Award at the IEEE International Conference on AI and Data Analytics (ICAD), 2025. Out of 47 accepted papers, only three received this honor.',
  },
  {
    type: "publication",
    text: 'New Publication: Our paper titled "MXene Material Property Prediction via Transfer Learning with Graph Neural Networks" has been accepted for publication at the IEEE International Conference on AI and Data Analytics (ICAD), 2025.',
  },
  {
    type: "publication",
    text: 'New Publication: Our paper titled "A Comprehensive Methodological Framework for 3D Head Anthropometric Shape Modeling of a Small Dataset" has been published in the journal Ergonomics (Taylor & Francis).',
  },
  {
    type: "publication",
    text: 'New Publication: Our paper titled "A Hybrid Deep Learning Framework for Early Detection of Mpox Using Image Data" has been published in the journal Healthcare Analytics (Elsevier).',
  },
  {
    type: "talk",
    text: 'Talk: I will give a talk in the "Faculty Lunch Talks" seminar on 04/23/2025 in the Department of Mathematical Sciences at WPI.',
  },
];

export const journalPapers: Publication[] = [
  {
    authors: "Joshua DeOliveira, Sajal Chakroborty, Walter Gerych, Elke Rundensteiner",
    title: "Neural Tangent Kernels under Stochastic Data augmentation",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence, 2026. (accepted)",
  },
  {
    authors: "Sajal Chakroborty",
    title: "A hybrid deep learning framework for early detection of Mpox using image data",
    venue: "Healthcare Analytics (2025): 100396.",
  },
  {
    authors: "Leonardo H. Wei, S. Sudeesh, Sajal Chakroborty, and Suman K. Chowdhury",
    title: "A comprehensive methodological framework for 3D head anthropometric shape modeling of a small dataset",
    venue: "Ergonomics (2025): 1-16.",
  },
  {
    authors: "Eric Warnemunde Vertina, Sajal Chakroborty, Emily Sutherland, N. Aaron Deskins, and Oren Mangoubi",
    title: "MXene Material Property Prediction via Transfer Learning with Graph Neural Networks",
    venue: "2025 IEEE International Conference on AI and Data Analytics (ICAD), pp. 1-7. IEEE, 2025 (Honorable Mention Award--top 6% of accepted papers).",
  },
  {
    authors: "Eric Warnemunde Vertina, Emily Sutherland, Sajal Chakroborty, N. Aaron Deskins, and Oren Mangoubi",
    title: "Machine-Learning-Enabled High-Throughput MXene Property Prediction",
    venue: "2025 IEEE 15th International Conference Nanomaterials: Applications & Properties (NAP), pp.1-6. IEEE, 2025.",
  },
  {
    authors: "Sajal Chakroborty and M. Babul Hasan",
    title: "A Parametric Approach to Solve Bounded-Variable LFP by Converting into LP",
    venue: "International Journal of Operations Research, Vol. 13, No. 2, (2016), P. 47-57.",
  },
  {
    authors: "Sajal Chakroborty and M. Babul Hasan",
    title: "A Proposed Technique for Solving Scenario Based Multi-Period Stochastic Optimization Problems with Computer Application",
    venue: "International Journal of Mathematical Sciences and Computing, Vol. 2, No. 4, (2016), P. 12-23.",
  },
  {
    authors: "H. K. Das and Sajal Chakroborty",
    title: "Analyzing on the Decomposition Based Pricing Procedure for Solving Two Person Zero Sum Game Problems Through Computer Algebra",
    venue: "International Journal of Computer Applications, Vol. 156, No. 12, (2016), P. 37-47.",
  },
];

export const preprints: Publication[] = [
  {
    authors: "Sajal Chakroborty, Ram Iyer, and Alex Trindade",
    title: "On the use of the M-quantiles for outlier detection in multivariate data.",
    venue: "arXiv preprint",
    url: "https://arxiv.org/pdf/2401.01628.pdf",
  },
  {
    authors: "Leonardo H Wei, Sudeesh Subramanian, Sajal Chakroborty, Suman Chowdhury",
    title: "A Comprehensive Methodological Framework for Anthropometric Head Shape Modeling Using Small Dataset.",
    venue: "bioRxiv preprint",
    url: "https://www.biorxiv.org/content/biorxiv/early/2024/06/03/2024.06.02.597069.full.pdf",
  },
  {
    authors: "Sajal Chakroborty",
    title: "H-MpoxNet: A Hybrid Deep Learning Framework for Mpox Detection from Image Data.",
    venue: "medRxiv preprint",
    url: "https://www.medrxiv.org/content/10.1101/2024.11.26.24318006v1.full.pdf",
  },
  {
    authors: "Sajal Chakroborty, Fahad Mostafa",
    title: "Implementation of Holling Type-II Functional Response for COVID-19 Disease Modeling.",
    venue: "SSRN preprint",
    url: "https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=4953603",
  },
];

export const dissertation = {
  title: "Some New Tools for Multivariate Statistics and Machine Learning from Potential Theory.",
  url: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=TH5CuuUAAAAJ&sortby=pubdate&citation_for_view=TH5CuuUAAAAJ:_Qo2XoVZTnwC",
};

export const msThesis = {
  title: "Gross-Gauss Measure on Infinite-Dimensional Reproducing Kernel Hilbert Spaces.",
  url: "https://scholar.google.co.uk/citations?view_op=view_citation&hl=en&user=TH5CuuUAAAAJ&sortby=pubdate&citation_for_view=TH5CuuUAAAAJ:_kc_bZDykSQC",
};

export const teachingData: TeachingInstitution[] = [
  {
    name: "Worcester Polytechnic Institute",
    location: "MA, USA",
    role: "Post-Doctoral Scholar",
    courses: [
      { code: "MA 595", name: "Advanced Mathematical Statistics" },
      { code: "MA 2621", name: "Probability For Applications" },
      { code: "MA 2611", name: "Applied Statistics I" },
      { code: "MA 2610", name: "Applied Statistics for the Life Sciences" },
      { code: "MA 1020", name: "Calculus I with Preliminary Topics" },
    ],
  },
  {
    name: "Texas Tech University",
    location: "TX, USA",
    role: "Instructor of Record",
    courses: [
      { code: "MATH 2450", name: "Calculus III with Applications" },
      { code: "MATH 2300", name: "Statistical Methods" },
      { code: "MATH 1550", name: "Precalculus" },
      { code: "MATH 1452", name: "Calculus II with Applications" },
      { code: "MATH 1451", name: "Calculus I with Applications" },
      { code: "MATH 1331", name: "Introductory Mathematical Analysis II" },
      { code: "MATH 1330", name: "Introductory Mathematical Analysis I" },
      { code: "MATH 1320", name: "College Algebra" },
    ],
  },
  {
    name: "East West University",
    location: "Dhaka, Bangladesh",
    role: "Lecturer",
    courses: [
      { code: "MATH 104", name: "Co-ordinate Geometry and Vector Analysis" },
      { code: "MATH 102", name: "Differential Equations and Special Functions" },
      { code: "MATH 101", name: "Differential and Integral Calculus" },
    ],
  },
  {
    name: "United International University",
    location: "Dhaka, Bangladesh",
    role: "Lecturer",
    courses: [
      { code: "MATH 203", name: "Linear Algebra and Matrices" },
      { code: "MATH 153", name: "Complex Variables" },
      { code: "MATH 003", name: "Elementary Calculus" },
    ],
  },
];

export const educationData: EducationEntry[] = [
  {
    degree: "Ph.D. in Mathematics",
    institution: "Texas Tech University, Texas, USA",
    year: "August 2024",
  },
  {
    degree: "M.S. in Statistics",
    institution: "Texas Tech University, Texas, USA",
    year: "August 2022",
  },
  {
    degree: "M.S. in Pure Mathematics",
    institution: "University of Dhaka, Bangladesh",
    year: "May 2015",
  },
  {
    degree: "B.S. in Mathematics",
    institution: "University of Dhaka, Bangladesh",
    year: "September 2013",
  },
];

export const jobData: JobEntry[] = [
  {
    title: "Post-Doctoral Scholar",
    institution: "Mathematical Sciences, Worcester Polytechnic Institute, Worcester, Massachusetts",
    period: "August 2024 to present",
  },
  {
    title: "Graduate Part-Time Instructor",
    institution: "Texas Tech University, Texas, USA",
    period: "September 2018 to August 2024",
  },
  {
    title: "Lecturer",
    institution: "East West University, Dhaka, Bangladesh",
    period: "September 2015 to September 2018",
  },
  {
    title: "Lecturer",
    institution: "United International University, Dhaka, Bangladesh",
    period: "January 2015 to August 2015",
  },
];

export const grantsAwards: string[] = [
  "Professional development stipend for completing the Faculty On-Ramp to Teaching (FORT) program, Morgan Teaching and Learning Center, Worcester Polytechnic Institute (Academic year: 2024–25).",
  "Helen DeVitt Jones Excellence in Graduate Teaching Award, Texas Tech University, USA (Academic year: 2023-24).",
  "Teaching Effectiveness and Career Enhancement (TEACH) Fellowship (Academic year: 2023-24).",
  "SIAM Teaching Award, Texas Tech University, USA (Academic year: 2022-23).",
  "SIAM TTU Student Chapter Graduate Student Research Day Award, Texas Tech University, USA (Academic year: 2022-23).",
  "Dr. Shelby Hildebrand Graduate Math Fellowship, Texas Tech University, USA (Academic year: 2022-23).",
  "AT and T Chancellor's fellowship, Texas Tech University, USA (Academic year: 2018-22).",
  "Graduate Teaching Assistantship, Texas Tech University, USA (Academic year: 2018-24).",
  "Bangladesh Sweden Travel Grant (BSTF), Bangladesh Sweden Trust Fund.",
  "Best Paper Award, 18th International Mathematics Conference, Independent University, Dhaka, Bangladesh.",
  "Dean's award of science faculty, University of Dhaka, Bangladesh.",
  "National Science and Technology (NST) fellowship, Ministry of Science and Technology Bangladesh.",
];

export const reviewerJournals: ServiceEntry[] = [
  {
    name: "Chaos, Solitons & Fractals, Elsevier",
    url: "https://www.sciencedirect.com/journal/chaos-solitons-and-fractals",
  },
  {
    name: "Healthcare Analytics, Elsevier",
    url: "https://www.sciencedirect.com/journal/healthcare-analytics",
  },
  {
    name: "Machine Learning with Applications, Elsevier",
    url: "https://www.sciencedirect.com/journal/machine-learning-with-applications",
  },
  {
    name: "Mathematical and Computer Modelling of Dynamical Systems, Taylor & Francis",
    url: "https://www.tandfonline.com/journals/nmcm20",
  },
  {
    name: "BMC Infectious Diseases, Springer Nature",
    url: "https://link.springer.com/journal/12879",
  },
];
