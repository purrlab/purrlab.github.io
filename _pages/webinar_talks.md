---
layout: page
permalink: /webinar_talks/
title: Webinar Talks
description: 
nav: false
---


# Datasets through the L👀king-Glass


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


