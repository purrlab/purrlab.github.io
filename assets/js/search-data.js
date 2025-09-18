// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "On-going research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-join",
          title: "Join",
          description: "How to join the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Contact details",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-purrlab-moves-to-itu-copenhagen-denmark",
          title: 'PURRlab moves to ITU Copenhagen, Denmark!',
          description: "",
          section: "News",},{id: "news-bethany-and-dovile-join-purrlab",
          title: 'Bethany and Dovile join PURRlab!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20220101_cats/";
            },},{id: "news-amelia-joins-the-lab-sparkles-smile",
          title: 'Amelia joins the lab! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-théo-sourget-from-university-of-rouen-visits-us-from-february-27th-to-march-31st",
          title: 'Théo Sourget from University of Rouen visits us from February 27th to March...',
          description: "",
          section: "News",},{id: "news-paper-on-shortcuts-at-isbi2023",
          title: 'Paper on shortcuts at ISBI2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20230420_isbi/";
            },},{id: "news-presentations-at-health-data-science-day",
          title: 'Presentations at Health Data Science Day',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20230607_healthsci/";
            },},{id: "news-dovile-s-paper-was-accepted-at-tmlr-amelia-will-be-presenting-her-work-with-msc-students-trine-and-cathrine-at-the-iccv-datacomp-workshop-in-paris-next-week-come-say-hi",
          title: 'Dovile’s paper was accepted at TMLR! Amelia will be presenting her work with...',
          description: "",
          section: "News",},{id: "news-théo-sourget-now-joins-us-as-a-research-assistant-welcome-théo",
          title: 'Théo Sourget now joins us as a research assistant, welcome Théo!',
          description: "",
          section: "News",},{id: "news-yucheng-lu-joins-us-as-a-postdoctoral-researcher-welcome-yucheng",
          title: 'Yucheng Lu joins us as a postdoctoral researcher, welcome Yucheng!',
          description: "",
          section: "News",},{id: "news-several-of-us-will-be-at-the-d3a-conference-presenting-posters-about-shortcuts-robustness-in-transfer-learning-and-citations-of-medical-imaging-datasets-please-stop-by-if-you-are-interested-in-our-work",
          title: 'Several of us will be at the D3A conference, presenting posters about shortcuts,...',
          description: "",
          section: "News",},{id: "news-two-new-preprints-are-out-on-citation-practices-and-sharing-datasets-on-community-platforms-both-about-medical-imaging-datasets",
          title: 'Two new preprints are out, on citation practices and sharing datasets on community...',
          description: "",
          section: "News",},{id: "news-we-have-another-new-preprint-to-share-this-time-on-model-robustness-in-transfer-learning",
          title: 'We have another new preprint to share, this time on model robustness in...',
          description: "",
          section: "News",},{id: "news-théo-s-paper-on-citation-practices-was-accepted-at-midl",
          title: 'Théo’s paper on citation practices was accepted at MIDL!',
          description: "",
          section: "News",},{id: "news-veronika-théo-oral-presentation-poster-on-friday-ralf-and-yucheng-will-be-attending-midl-2024-in-paris-come-and-say-hello",
          title: 'Veronika, Théo (oral presentation + poster on Friday!), Ralf and Yucheng will be...',
          description: "",
          section: "News",},{id: "news-several-of-us-will-be-attending-the-second-edition-of-the-d3a-conference-on-22-23-october-in-nyborg-please-stop-by-the-poster-session-to-see-our-recent-work",
          title: 'Several of us will be attending the second edition of the D3A conference...',
          description: "",
          section: "News",},{id: "news-our-work-copycats-the-many-lives-of-a-publicly-available-medical-imaging-dataset-has-been-accepted-at-neurips-2024-datasets-and-benchmarks-track",
          title: 'Our work “Copycats: the many lives of a publicly available medical imaging dataset”...',
          description: "",
          section: "News",},{id: "news-veronika-and-amelia-will-be-at-neurips-2024-come-to-say-hi-at-wiml-workshop-and-visit-our-poster-on-friday-13-dec",
          title: 'Veronika and Amelia will be at NeurIPS 2024, come to say hi at...',
          description: "",
          section: "News",},{id: "news-a-new-preprint-on-shortcut-learning-in-cnn-models-for-medical-imaging-is-available",
          title: 'A new preprint on shortcut learning in CNN models for medical imaging is...',
          description: "",
          section: "News",},{id: "news-two-new-preprints-are-available-on-eelgrass-detection-and-on-dataset-transferability-in-medical-image-classification-it-also-marks-the-end-of-2024-a-great-year-summarized-here",
          title: 'Two new preprints are available on Eelgrass Detection and on dataset transferability in...',
          description: "",
          section: "News",},{id: "news-new-preprint-in-the-picture-medical-imaging-datasets-artifacts-and-their-living-review-a-living-review-that-continuously-tracks-public-datasets-and-their-associated-research-artifacts-across-multiple-medical-imaging-applications",
          title: 'New preprint! In the Picture: Medical Imaging Datasets, Artifacts, and their Living Review:...',
          description: "",
          section: "News",},{id: "news-laura-weihl-has-joined-purrlab-for-projects-related-to-underwater-image-classification",
          title: 'Laura Weihl has joined PURRlab for projects related to underwater image classification!',
          description: "",
          section: "News",},{id: "news-dovile-juodelyte-is-defended-her-phd-thesis-from-cats-to-cts-cross-domain-transfer-in-medical-image-classification-on-14-february-2025",
          title: 'Dovile Juodelyte is defended her PhD thesis “From Cats to CTs: Cross-Domain Transfer...',
          description: "",
          section: "News",},{id: "news-new-dataset-neatx-non-expert-annotations-of-tubes-in-x-rays-available-on-zenodo",
          title: 'New dataset! NEATX: Non-Expert Annotations of Tubes in X-rays, available on  Zenodo.',
          description: "",
          section: "News",},{id: "news-veronika-started-her-new-position-as-full-professor-at-itu-today-thanks-to-everyone-for-the-support",
          title: 'Veronika started her new position as Full Professor at ITU today! Thanks to...',
          description: "",
          section: "News",},{id: "news-our-work-in-the-picture-medical-imaging-datasets-artifacts-and-their-living-review-has-been-accepted-to-acm-facct-2025-amelia-and-veronika-will-be-in-athens-come-to-say-hi",
          title: 'Our work “In the Picture: Medical Imaging Datasets, Artifacts, and their Living Review”...',
          description: "",
          section: "News",},{id: "news-new-dataset-centric-paper-augmenting-chest-x-ray-datasets-with-non-expert-annotations-has-been-accepted-at-miua-2025",
          title: 'New dataset-centric paper “Augmenting Chest X-ray Datasets with Non-Expert Annotations” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-mask-of-truth-model-sensitivity-to-unexpected-regions-of-medical-images-has-been-published-in-the-journal-of-imaging-informatics-in-medicine",
          title: 'Our paper “Mask of Truth: Model Sensitivity to Unexpected Regions of Medical Images”...',
          description: "",
          section: "News",},{id: "news-théo-sourget-starts-as-a-phd-student-to-work-on-the-project-cheetah-challenges-of-evaluating-teams-and-algorithms",
          title: 'Théo Sourget starts as a PhD Student to work on the project “CHEETAH:...',
          description: "",
          section: "News",},{id: "news-we-have-two-poster-presentations-at-the-miccai-faimi-workshop-one-by-théo-on-clip-based-models-and-one-by-msc-students-regitze-nikolette-and-andreas-on-robustness-in-skin-lesion-classification",
          title: 'We have two poster presentations at the MICCAI FAIMI workshop: one by Théo...',
          description: "",
          section: "News",},{id: "people-veronika-cheplygina",
          title: 'Veronika Cheplygina',
          description: "Dr. Veronika Cheplygina&#39;s research focuses on limited labeled scenarios in machine learning, in particular in medical image analysis. She received her Ph.D. from Delft University of Technology in 2015. After a postdoc at the Erasmus Medical Center, in 2017 she started as an assistant professor at Eindhoven University of Technology. In 2020, failing to achieve various metrics, she left the tenure track of search of the next step where she can contribute to open and inclusive science. In 2021 she started as an associate professor at IT University of Copenhagen, and from 2025 is a full professor at the same university. Next to research and teaching, Veronika blogs about academic life at https://www.veronikach.com. She also loves cats, which you will often encounter in her work.",
          section: "People",handler: () => {
              window.location.href = "/people/cheplygina/";
            },},{id: "people-amelia-jiménez-sánchez",
          title: 'Amelia Jiménez-Sánchez',
          description: "Amelia is a Postdoctoral Researcher at the IT University of Copenhagen. Her research interests are in the broad areas of medical imaging, representation learning and data science. She has experience developing algorithms to deal with label noise, limited amounts of data and class-imbalance, problems that are fairly common in medical datasets. She is working on the project “Making Metadata Count”. Before joining ITU, she received a degree in Telecommunications Engineering from the University of Granada, a Master of Science in Biomedical Computing from the Technical University of Munich and her Ph.D. from Pompeu Fabra University.",
          section: "People",handler: () => {
              window.location.href = "/people/jimenez-sanchez/";
            },},{id: "people-dovile-juodelyte",
          title: 'Dovile Juodelyte',
          description: "Dovile was a PhD Fellow working on transfer learning in medical imaging. She holds a BSc degree in data science from the IT University of Copenhagen. Prior to her transition to data science, she attained a MSc degree in Economics from Vilnius University and worked as a financial analyst. She was working on the project ‘CATS - Choosing a Transfer Source for Medical Image Classification’ and defended her PhD thesis on 14 February 2025. Her research interests lie at the intersection of medical imaging, representation learning, and data science, with a particular focus on understanding the inner workings of transfer learning and generalization.",
          section: "People",handler: () => {
              window.location.href = "/people/juodelyte/";
            },},{id: "people-yucheng-lu",
          title: 'Yucheng Lu',
          description: "Yucheng Lu earned his BS degree in optical information science and technology from Hangzhou Dianzi University in 2016. Subsequently, he attained his Ph.D. in multimedia engineering from Dongguk University in 2022. From 2022 to 2023, he served as a research professor at Korea University. In December 2023, he joined PURRlab as a postdoctoral researcher. His primary areas of focus encompass transfer learning, image processing, and medical image analysis.",
          section: "People",handler: () => {
              window.location.href = "/people/lu/";
            },},{id: "people-ralf-raumanns",
          title: 'Ralf Raumanns',
          description: "Ralf Raumanns is a software engineer and data scientist with nearly 20 years of experience in R&amp;D and medical applications at Philips and Maastricht University. He lectures at Fontys University Venlo and does PhD research at TU/e Eindhoven, and ITU Copenhagen, focusing on deep learning and fairness in medical diagnostics. He earned his Bachelor&#39;s degree in Computer Science and Master&#39;s degree in Data Science from Maastricht University.",
          section: "People",handler: () => {
              window.location.href = "/people/raumanns/";
            },},{id: "people-théo-sourget",
          title: 'Théo Sourget',
          description: "Théo Sourget is a PhD Student at the IT University of Copenhagen working on the evaluation of machine learning algorithms and data quality. His background is in data science in general, but he specialised himself in medical image analysis with various project on both classification and segmentation. During these projects, he also explored data generation techniques with and without deep learning. Before joining ITU, he obtained a bachelor&#39;s degree in computer science and a master&#39;s degree in data science from the University of Rouen. He then worked as a Research Assistant in PURRlab and in the MICS laboratory at CentraleSupélec Paris on the robustness of AI in healthcare and the study of public medical datasets in research papers.",
          section: "People",handler: () => {
              window.location.href = "/people/sourget/";
            },},{id: "people-laura-weihl",
          title: 'Laura Weihl',
          description: "Laura Weihl is a PhD student with a background in Mathematics, Computer Science, and Machine Learning, specialising in enhancing underwater vision systems. Her research primarily revolves around advancing perception of static underwater cameras and autonomous underwater vehicles. Her recent work includes leveraging Neural Radiance Fields (NeRF) for 3D reconstructions to create testing environments for visual simultaneous localization and mapping (vSLAM) and applying transfer learning techniques to detect and analyze seagrass in underwater footage. Driven by a growing interest in environmental conservation, she is now focusing on how these technologies can be used for biodiversity monitoring to assess and support environmental health. When not immersed in code, you can find her playing piano or singing in a choir, blending art with science to explore the depths of both the ocean and human expression.",
          section: "People",handler: () => {
              window.location.href = "/people/weihl/";
            },},{id: "projects-hints",
          title: 'HINTS',
          description: "From black box to intelligible machine learning for the accurate diagnosis of medical images",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_hints/";
            },},{id: "projects-cats",
          title: 'CATS',
          description: "Choosing A Transfer Source for Medical Image Classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_cats/";
            },},{id: "projects-mmc",
          title: 'MMC',
          description: "Making Meta-Data Count",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_mmc/";
            },},{id: "projects-public-datasets",
          title: 'Public Datasets',
          description: "Studying public datasets in scientific literature",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_publicdatasets/";
            },},{id: "projects-beyond-medical-imaging",
          title: 'Beyond medical imaging',
          description: "Image processing and (weakly) supervised learning in other datasets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_beyond/";
            },},{id: "projects-cheetah",
          title: 'CHEETAH',
          description: "CHallenges of Evaluating Teams and Algorithms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_cheetah/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
