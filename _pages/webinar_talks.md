---
layout: page
permalink: /webinar_talks/
title: Webinar Talks
description: 
nav: false
---


# Datasets through the L👀king-Glass

---
### Dr. Enzo Ferrante (CONICET, Argentina) 
Title: **Building and auditing a large-scale x-ray segmentation dataset with automatic annotations: Navigating fairness without ground-truth**

Abstract: The evolution of deep segmentation networks has empowered the enhancement of extensive x-ray datasets with automatically generated anatomical segmentation masks. When disseminating such enriched datasets, incorporating quality indices is crucial to quantify the reliability of each segmentation mask. Achieving this without the availability of expert medical annotations poses significant challenges. The complexity is further intensified by recent studies indicating potential biases in AI-based medical imaging models related to gender, age, and ethnicity. In this presentation, we will share insights from our journey in developing the CheXMask large-scale database. We will delve into the strategies we implemented for automatic quality control and the methods we formulated for unsupervised bias discovery in the absence of ground-truth annotations. We aim to foster a deeper understanding of the ethical considerations and responsibilities in deploying AI in medical imaging and to encourage the development of more robust and unbiased AI models in healthcare.

Bio: Dr. Ferrante completed his PhD in Computer Sciences at Université Paris-Saclay and INRIA (Paris, France), and worked as a postdoctoral researcher at Imperial College London in the UK. He has also been a visiting student at the CVGL Lab at Stanford University (2014), Fulbright Visiting Researcher at the A. Martinos Center for Biomedical Imaging (Massachusetts General Hospital - Harvard Medical School, 2021) in Boston, and currently he holds a DATAIA Invited Professor position at MICS Lab, Centrale-Supelec, Université Paris-Saclay. Since 2017, he holds a faculty researcher position at Argentina’s National Research Council (CONICET) where he leads the Machine Learning for Biomedical Image Computing lab. He regularly serves as a member of the program committee of important medical imaging conferences like MICCAI, MIDL, ISBI and IPMI, and he has organized several workshops in this context. In 2020 Dr Ferrante received the Young Researcher Award from the National Academy of Sciences of Argentina and the Mercosur Science & Technology Award for his scientific contributions to AI for medical image computing, and in 2022 the Google Award for Inclusion Research. His research interests span artificial intelligence and biomedical image analysis, currently focusing on fairness, domain adaptation and generalization, calibration and anatomical segmentation of medical images.

Video: [S04E03](https://youtu.be/3MOb1jzZXKc?si=bbh76Gi6KvEjyfqj)

---
### Rhys Compton and Lily Zhang (New York University, USA) 
Title: **When more is less: Incorporating additional datasets can hurt performance by introducing spurious correlations**

Abstract: In machine learning, incorporating more data is often seen as a reliable strategy for improving model performance; this work challenges that notion by demonstrating that the addition of external datasets in many cases can hurt the resulting model’s performance. In a large-scale empirical study across combinations of four different open-source chest x-ray datasets, we demonstrate that in 43% of settings, a model trained on data from two hospitals has *poorer* worst group accuracy over both hospitals than a model trained on just a single hospital’s data. This surprising result occurs even though the added hospital makes the training distribution more similar to the test distribution. We explain that this phenomenon arises from the spurious correlation that emerges between the disease and hospital, due to hospital-specific image artifacts. We contextualize our results within the literature on spurious correlations to help explain these outcomes. Our experiments underscore the importance of exercising caution when selecting training data for machine learning models, especially in settings where there is a risk of spurious correlations such as with medical imaging.

Bio: 
* Rhys Compton holds a Master’s in Computer Science from New York University, where he explored machine learning applications in healthcare, specifically looking at domain generalization / spurious correlations in chest X-ray data, which this talk focuses on.
* Lily Zhang is a PhD candidate at New York University in the Center for Data Science. Her research focuses on generative models, out-of-distribution detection and generalization, and applications of machine learning in health and science.

Video: [S04E02](https://youtu.be/hVM2PNsXPhM?si=0fHTBoIWvvF1lfD4)

---
### Dr. Jessica Schrouff (Google DeepMind, UK)
Title: **Detecting shortcut learning for fair medical AI**

Abstract: One potential driver of algorithmic unfairness, shortcut learning, arises when ML models base predictions on improper correlations in the training data. Diagnosing this phenomenon is difficult as sensitive attributes may be causally linked with disease. Using multitask learning, we propose a method to directly test for the presence of shortcut learning in clinical ML systems and demonstrate its application to clinical tasks in radiology and dermatology. Finally, our approach reveals instances when shortcutting is not responsible for unfairness, highlighting the need for a holistic approach to fairness mitigation in medical AI.

Bio: Jessica is a research scientist at Google DeepMind, working on responsible AI through a causal perspective. Previously, she was at Google Research where she investigated responsible machine learning for healthcare. Before joining Alphabet in 2019, she was a Marie Curie post-doctoral fellow at University College London (UK) and Stanford University (USA), developing machine learning techniques for neuroscience discovery and clinical predictions. Throughout her career, Jessica’s interests have lied not only in the technical advancement of machine learning methods, but also in critical aspects of their deployment such as their credibility, fairness, robustness or interpretability. She is also involved in DEI initiatives, such as Women in Machine Learning (WiML) and founded the Women in Neuroscience Repository.

Video: [S04E01](https://youtu.be/-jxId9lxqXM?si=g1fridFI0rk1KpoY)

---

### Cathrine Damgaard & Trine Naja Eriksen (IT University of Copenhagen, Denmark)
Title: Annotation Label Reliability and Pathology Detection in Publicly Available Chest X-ray Datasets

Abstract: Deep learning models are becoming more prevalent for pathology detection in medical image analysis, as more large-scale medical image datasets are published. The models are, however, prone to make errors which a human specialist never would, even though they have been shown to obtain a better overall performance. This could be caused by the models learning unintended shortcuts, or that the datasets used for training the models often have labels obtained from medical reports associated with the images and not the actual images, making the labels less reliable for an image classification task. We explore pathology label reliability by comparing image review annotations from different sources on the same images, as well as tube label reliability by providing 1,011 non-expert annotations on chest X-ray images, indicating the presence of four different tube types.

Bio: Cathrine Damgaard & Trine Naja Eriksen have recently finished their masters at ITU, congrats to both of you! They have been doing great work during their research project and master thesis with us. We’re glad to have them at the webinar sharing their experience collecting chest drain annotations on X-ray images.

---

###  Dr. Andre Pacheco (Federal University of Espírito Santo, Brazil)
Title:**PAD-UFES-20: the challenges and opportunities in creating a skin lesion dataset**

Abstract: The PAD-UFES-20 is a public skin lesion dataset composed of clinical images collected from smartphone devices and a set of patient clinical data containing several features. Because of its unique characteristics, the dataset has been growing in popularity and supporting research across the globe. This presentation explores the nuances of creating this dataset, shedding the light on the challenges faced and its promising potential for future advancements.

Bio: Dr. Andre Pacheco is a researcher in which his interests lie in the intersection of the fields of Artificial Intelligence, Computer Vision and Health Informatics. He holds a Ph.D in Computer Science specialized in medical imaging analysis, in particular, skin cancer detection. Working in the field since 2016, his work has led to multiple publications and contributions. Andre has experience in industry as AI Research Specialist at Samsung Electronics, mainly working on the development of new health/well-being algorithms for smartwatches. Currently, he is an Assistant Professor at Federal University of Espirito Santo, where he recently founded the Laboratory of AI for Health.

Video: [S0302](https://youtu.be/q-DBwWZejMY?si=LvIP9OOLhCQHl1Cw)

---

### Dr. Thijs Kooi (Lunit, South Korea)

Title: **Optimizing annotation cost for AI based medical image analysis**

Abstract: Although techniques like self-supervised pre-training are becoming more mature and mitigate the need for large scale annotations, current computer aided detection and diagnosis (CAD) systems based on deep neural nets still require vast amounts of annotated data to perform well. Annotating medical data is expensive and should therefore be done with care. In this talk, we will provide insights into the performance of a CAD system for the analysis of chest radiographs, trained using different types of annotations and discuss open challenges in the annotation of image data for medical AI systems.

Bio: Thijs received a master in AI at University of Amsterdam in 2012 and a Ph.D. on the topic of computer aided diagnosis for mammography at Radboud University. After his Ph.D. he moved to Merantix in 2017 and later Vara in 2018, where he was involved in the development of a triaging solution for screening mammography. After series A closing and CE certification, he joined Lunit in 2020 as VP of AI research, where he currently works and is responsible for the R&D of the Lunit INSIGHT products.

Video: [S0301](https://youtu.be/qhAYUfQlYfo?si=MWYkLucdnafBYrJn)

---

### Dr. Ujjwal Baid (University of Pennsylvania, USA) 

Title: **Brain tumor segmentation challenge 2023**

Abstract: The talk will be on Brain Tumor Segmentation Challenge design. Data pre-processing steps which are involved during the preparation of the challenge data. Evaluation matrices that were used to rank the challenge participants.

Bio: Ujjwal completed his PhD from Center of Excellence in Signal & Image Processing, SGGSIE&T, Nanded, India in 2020. His major fields of interest include Biomedical Image Analysis, Cancer Imaging, Radiogenomics, and Computational Pathology. He has developed various algorithms for segmentation of brain tumors based on deep learning. His research also revolved around extracting radiomic features for overall survival prediction of patients diagnosed with glioblastoma.

Video: [S02E03](https://youtu.be/_RlcKW0sZ80?si=lM8PxjKasESI25YO)

---

### Dr. Esther E. Bron (Erasmus MC - University Medical Center Rotterdam, the Netherlands)

Title: **Image analysis and machine learning competitions in dementia**

Abstract: Machine learning methods exploiting multi-parametric biomarkers, especially based on neuroimaging, have huge potential to improve early diagnosis of dementia and to predict which individuals are at-risk of developing dementia. To benchmark algorithms in the field of machine learning and neuroimaging in dementia and assess their potential for use in clinical practice and clinical trials, seven grand challenges have been organized in the last decade. Dr. Bron recently published a review paper that analyzes how the grand challenges in the dementia field are complementing each other regarding research questions, datasets, validation approaches, results and impact (https://doi.org/10.1016/j.neuroimage.2022.119083). In this talk, Dr. Esther Bron will present a perspective on how competitions have developed, what we have learnt and what is needed going forward.

Bio: Dr. Esther Bron leads the research line on ‘Neuroimage analysis and Machine learning’ at Erasmus MC, Rotterdam, the Netherlands. Currently, she is PI in several multicenter projects (TAP-Dementia, MyDigiTwin, CVON Heart Brain Connection, Netherlands Consortium of Dementia Cohorts), and coordinator of the Erasmus MC Imaging Office. Dr. Bron (co-)organized two international grand challenges for the objective comparison of algorithms for AD diagnosis (CADDementia challenge) and prediction (TADPOLE challenge).

Video: [S02E02](https://youtu.be/pYl9bBcQA-M?si=Yyrv5CpQ_t4ysRNZ)

---

### Prof. Amber Simpson (Queen’s University, Canada)

Title: **The medical segmentation decathlon**

Abstract: International challenges have become the de facto standard for comparative assessment of image analysis algorithms. Although segmentation is the most widely investigated medical image processing task, the various challenges have been organized to focus only on specific clinical tasks. We organized the Medical Segmentation Decathlon (MSD)—a biomedical image analysis challenge, in which algorithms compete in a multitude of both tasks and modalities to investigate the hypothesis that a method capable of performing well on multiple tasks will generalize well to a previously unseen task and potentially outperform a custom-designed solution. MSD results confirmed this hypothesis, moreover, MSD winner continued generalizing well to a wide range of other clinical problems for the next two years. Three main conclusions can be drawn from this study: (1) state-of-the-art image segmentation algorithms generalize well when retrained on unseen tasks; (2) consistent algorithmic performance across multiple tasks is a strong surrogate of algorithmic generalizability; (3) the training of accurate AI segmentation models is now commoditized to scientists that are not versed in AI model training.

Bio: Amber Simpson is the Canada Research Chair in Biomedical Computing and Informatics, and Associate Professor jointly appointed in the Department of Biomedical and Molecular Sciences and School of Computing at Queen’s University. She is an Affiliate of the Vector Institute for AI as well as a Senior Investigator at the Canadian Cancer Trials Group. Dr. Simpson is the Director of the Centre for Health Innovation, a joint venture with Kingston Health Sciences Centre and Queen’s. She received her PhD in Computer Science from Queen’s and was a postdoctoral fellow in the Department of Biomedical Engineering at Vanderbilt University. Recently recruited from a faculty position at Memorial Sloan Kettering Cancer Center in New York, she holds research funding from the National Institutes of Health as well funding from all three Canadian research councils. Dr. Simpson is an American Association of Cancer Research and Pancreatic Cancer Action Network award holder and a charter member of NIH study section, which recognizes her innovations in biomedical research. She specializes in biomedical data science, focusing on developing novel computational strategies for improving human health.

Video: [S02E01](https://youtu.be/2sbWrXO6gAc?si=6dzOFJRDibGLeB7c)

---

###  Prof. Colin Fleming (Ninewells Hospital, Dundee, UK) 

Title: Characteristics of skin lesions datasets

Abstract: The evidence-base for effectiveness of AI interventions in dermatology is limited in part due to studies being undertaken conditions which do not reflect real-life clinical settings. The majority of public datasets used for training are limited to images and disease labels, without use of additional metadata. The NHS Scotland AI skin cancer consortium seeks to improve opportunities for skin cancer AI development and this talk will outline approaches presently in use in the UK to create higher quality datasets from real world prospective data capture, employing standardised DICOM metadata.’

Bio: Colin Fleming is a Consultant Dermatologist, Mohs’ Surgeon, Honorary Professor of Dermatology and Innovation Lead in NHS Tayside, and is based at Ninewells Hospital and Medical School, Dundee. He has been a Consultant in Dundee since 1999 and has set up multiple services for skin cancer patients, including the NOSCAN Macmillan Mohs service. He is a former President of the British Society of Dermatological Surgery, former President of the Scottish Dermatology Society, and was Operational Medical Director in NHS Tayside 2018-2021. He has interests in health informatics, and has been active in development of electronic patient records, and created Dermabase, a web based diagnostic database for dermatology. He is Innovation Lead for NHS Tayside and research lead of the NHS Scotland AI skin cancer consortium, which seeks to establish diagnosis by AI of skin cancer in Scotland within 25 minutes by 2025.

Video: [S01E03](https://youtu.be/MlBxlL5WUuU?si=4rIVRIpZSOgmJIva)

---

### David Wen (Oxford University Clinical Academic Graduate School, University of Oxford, Oxford, UK)
Title: **Characteristics of open access skin cancer image datasets: implications for equitable digital health**. 

Abstract: Open-access datasets are increasingly used to develop machine learning algorithms for disease diagnosis, particularly skin cancer. However, prior to our systematic review, the content and characteristics of such datasets were not well understood. Our review aimed to evaluate open-access skin image datasets used to train algorithms for skin cancer diagnosis by exploring dataset characteristics and associated image metadata. This talk will outline the methodology and results of our systematic review, and discuss its implications for patient care and health equality.

MEDLINE, Google, and Google Dataset searches were performed to identify datasets, and their characteristics and metadata were extracted. Overall, 21 retrospective datasets containing 106,950 skin lesion images were identified. Among the 14 datasets reporting country of origin, eleven (79%) originated from Europe, North America and Oceania exclusively. Only two datasets (9%) reflected clinical practice, containing paired dermoscopic and macroscopic images. Clinical information was available regarding age for 81,662 images (76%), sex for 82,848 (77%), and body site for 79,561 (74%). Histopathological diagnoses were available for 69% of malignant lesions and 20% of all images. 1,415 images (1.3%) had ethnicity data. 2,236 images (2.1%) had Fitzpatrick skin-type data, of which only eleven (0.5%) were from darker-skinned individuals (type V-VI).

This systematic review revealed limited and variable reporting of key characteristics and metadata among datasets. Datasets had restricted population representation with substantial under-representation of darker skin types. This has implications for the performance of algorithms developed using these datasets in real-life clinical settings. Similar biases have also been identified in radiological and ophthalmological image datasets. Quality standards outlining minimum characteristics and metadata reporting for medical image datasets are urgently needed. Diverse image collection is required to build unbiased datasets, ensuring developed algorithms benefit individuals of all backgrounds and varying skin types.

Bio: Dr. David Wen is a National Institute for Health Research (NIHR) dermatology academic clinical fellow at the University of Oxford and Oxford University Hospitals, United Kingdom. His research interests include use of artificial intelligence to improve skin cancer diagnosis and genotype-phenotype correlation in genetic skin disease.  David completed pre-clinical medical training at the University of Cambridge, clinical training at the University of Oxford, and subsequently undertook general medical training in London at Ealing and Chelsea and Westminster Hospitals. This was followed by a dermatology fellowship in epidermolysis bullosa at Solihull Hospital where he completed an MRes in Clinical Health Research at the University of Birmingham.

Video: [S01E02](https://youtu.be/E4inBrMLVog?si=JFOktO-oNQLIA3iu)

---

### Roxana Daneshjou (Stanford University, USA) 

Title: Challenges with equipoise and fairness in AI/ML datasets in dermatology

Abstract: Clinical artificial intelligence (AI) algorithms have the potential to improve clinical care, but fair, generalizable algorithms depend on the clinical data on which they are trained and tested. To assess whether data sets used for training diagnostic AI algorithms addressing skin disease are adequately described and to identify potential sources of bias in these data sets. In this scoping review, PubMed was used to search for peer-reviewed research articles published between January 1, 2015, and November 1, 2020, with the following paired search terms: deep learning and dermatology, artificial intelligence and dermatology, deep learning and dermatologist, and artificial intelligence and dermatologist. Studies that developed or tested an existing deep learning algorithm for triage, diagnosis, or monitoring using clinical or dermoscopic images of skin disease were selected, and the articles were independently reviewed by 2 investigators to verify that they met selection criteria. Data set audit criteria were determined by consensus of all authors after reviewing existing literature to highlight data set transparency and sources of bias. A total of 70 unique studies were included. Among these studies, 1 065 291 images were used to develop or test AI algorithms, of which only 257 372 (24.2%) were publicly available. Only 14 studies (20.0%) included descriptions of patient ethnicity or race in at least 1 data set used. Only 7 studies (10.0%) included any information about skin tone in at least 1 data set used. Thirty-six of the 56 studies developing new AI algorithms for cutaneous malignant neoplasms (64.3%) met the gold standard criteria for disease labeling. Public data sets were cited more often than private data sets, suggesting that public data sets contribute more to new development and benchmarks. This scoping review identified 3 issues in data sets that are used to develop and test clinical AI algorithms for skin disease that should be addressed before clinical translation: (1) sparsity of data set characterization and lack of transparency, (2) nonstandard and unverified disease labels, and (3) inability to fully assess patient diversity used for algorithm development and testing.

Bio: Roxana Daneshjou received her undergraduate degree at Rice University in Bioengineering. She subsequently completed her MD PhD at Stanford University. During this time, she was awarded several fellowships. She has completed Dermatology residency at Stanford in the research track, and now she practices dermatology as a clinical scholar in Stanford’s department of Dermatology, and also conducts artificial intelligence research in Biomedical Data Science. Her research interests are in developing diverse data sets and fair algorithms for applications in Dermatology and Artificial Intelligence.

Video: [S01E01](https://youtu.be/zLxYUtToXGg?si=DTNmBwPGqqQRasRf)