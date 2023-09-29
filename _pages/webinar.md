---
layout: page
permalink: /webinar/
title: Webinar
description: 
nav: true
nav_order: 5
---

# Datasets through the L👀king-Glass

Datasets through the L👀king-Glass is a webinar series focusing on the data aspects on learning-based methods. Our aim is to build a community of scientists interested in understanding how the data we use affects the algorithms and society as a whole, instead of only optimizing for a performance metric. We draw inspiration from a variety of topics, such as data curation to build datasets, meta-data, shortcuts, fairness, ethics and philosophy in AI.

All previous talks where the authors have agreed to share the talk, can be found in our [YouTube playlist](https://www.youtube.com/playlist?list=PL_BSB_M_evSmfj9zSvqYVgTcJFtVdJc3y&jct=73eqNJ8tawTN4k4iARpU2xjGklC4Sg). 

#### Next webinar: Shortcuts and bias
Date: **4 December 2023 at 4pm CET**

Where: **Zoom** [[Registration]](https://itucph.zoom.us/meeting/register/u5UvceqvqjsoHtROZsAioF9k1wgy8054kXru)

Add to: [Google Calendar](https://itucph.zoom.us/meeting/u5UvceqvqjsoHtROZsAioF9k1wgy8054kXru/calendar/google/add) / [Outlook Calendar](https://itucph.zoom.us/meeting/u5UvceqvqjsoHtROZsAioF9k1wgy8054kXru/ics) / [Yahoo Calendar](https://shorturl.at/cor25)

##### **Dr. Jessica Schrouff** (Google DeepMind, UK)
 * **Title**: Detecting shortcut learning for fair medical AI
 * **Abstract**: One potential driver of algorithmic unfairness, shortcut learning, arises when ML models base predictions on improper correlations in the training data. Diagnosing this phenomenon is difficult as sensitive attributes may be causally linked with disease. Using multitask learning, we propose a method to directly test for the presence of shortcut learning in clinical ML systems and demonstrate its application to clinical tasks in radiology and dermatology. Finally, our approach reveals instances when shortcutting is not responsible for unfairness, highlighting the need for a holistic approach to fairness mitigation in medical AI.
  * **Bio**: Jessica is a research scientist at Google DeepMind, working on responsible AI through a causal perspective. Previously, she was at Google Research where she investigated responsible machine learning for healthcare. Before joining Alphabet in 2019, she was a Marie Curie post-doctoral fellow at University College London (UK) and Stanford University (USA), developing machine learning techniques for neuroscience discovery and clinical predictions. Throughout her career, Jessica's interests have lied not only in the technical advancement of machine learning methods, but also in critical aspects of their deployment such as their credibility, fairness, robustness or interpretability. She is also involved in DEI initiatives, such as Women in Machine Learning (WiML) and founded the Women in Neuroscience Repository.

##### **Dr. Enzo Ferrante** (CONICET, Argentina)
 * **Title**: Building and auditing a large-scale x-ray segmentation dataset with automatic annotations: Navigating fairness without ground-truth
 * **Abstract**: The evolution of deep segmentation networks has empowered the enhancement of extensive x-ray datasets with automatically generated anatomical segmentation masks. When disseminating such enriched datasets, incorporating quality indices is crucial to quantify the reliability of each segmentation mask. Achieving this without the availability of expert medical annotations poses significant challenges. The complexity is further intensified by recent studies indicating potential biases in AI-based medical imaging models related to gender, age, and ethnicity. In this presentation, we will share insights from our journey in developing the CheXMask large-scale database. We will delve into the strategies we implemented for automatic quality control and the methods we formulated for unsupervised bias discovery in the absence of ground-truth annotations. We aim to foster a deeper understanding of the ethical considerations and responsibilities in deploying AI in medical imaging and to encourage the development of more robust and unbiased AI models in healthcare.
  * **Bio**: Dr. Ferrante completed his PhD in Computer Sciences at Université Paris-Saclay and INRIA (Paris, France), and worked as a postdoctoral researcher at Imperial College London in the UK. He has also been a visiting student at the CVGL Lab at Stanford University (2014), Fulbright Visiting Researcher at the A. Martinos Center for Biomedical Imaging (Massachusetts General Hospital - Harvard Medical School, 2021) in Boston, and currently he holds a DATAIA Invited Professor position at MICS Lab, Centrale-Supelec, Université Paris-Saclay. Since 2017, he holds a faculty researcher position at Argentina's National Research Council (CONICET) where he leads the Machine Learning for Biomedical Image Computing lab. He regularly serves as a member of the program committee of important medical imaging conferences like MICCAI, MIDL, ISBI and IPMI, and he has organized several workshops in this context. In 2020 Dr Ferrante received the Young Researcher Award from the National Academy of Sciences of Argentina and the Mercosur Science & Technology Award for his scientific contributions to AI for medical image computing, and in 2022 the Google Award for Inclusion Research. His research interests span artificial intelligence and biomedical image analysis, currently focusing on fairness, domain adaptation and generalization, calibration and anatomical segmentation of medical images. 
 * **Website**: [https://eferrante.github.io](https://eferrante.github.io)

##### **Rhys Compton** and **Lily Zhang** (New York University, USA)
 * **Title**: When more is less: Incorporating additional datasets can hurt performance by introducing spurious correlations
  * **Abstract**: In machine learning, incorporating more data is often seen as a reliable strategy for improving model performance; this work challenges that notion by demonstrating that the addition of external datasets in many cases can hurt the resulting model's performance. In a large-scale empirical study across combinations of four different open-source chest x-ray datasets and 9 different labels, we demonstrate that in 43% of settings, a model trained on data from two hospitals has poorer worst group accuracy over both hospitals than a model trained on just a single hospital's data. This surprising result occurs even though the added hospital makes the training distribution more similar to the test distribution. We explain that this phenomenon arises from the spurious correlation that emerges between the disease and hospital, due to hospital-specific image artifacts. We highlight the trade-off one encounters when training on multiple datasets, between the obvious benefit of additional data and insidious cost of the introduced spurious correlation. In some cases, balancing the dataset can remove the spurious correlation and improve performance, but it is not always an effective strategy. We contextualize our results within the literature on spurious correlations to help explain these outcomes. Our experiments underscore the importance of exercising caution when selecting training data for machine learning models, especially in settings where there is a risk of spurious correlations such as with medical imaging. The risks outlined highlight the need for careful data selection and model evaluation in future research and practice.
    * **Bio**: TBA

#### Previous talks:
* S01E01 - **[Dr. Roxana Daneshjou](https://profiles.stanford.edu/roxana-daneshjou)** (Stanford University School of Medicine, Stanford, CA, USA). 27th Feb 2023. **Challenges with equipoise and fairness in AI/ML datasets in dermatology**. [Video](https://youtu.be/zLxYUtToXGg).
* S01E02 - **[Dr. David Wen]()** (Oxford University Clinical Academic Graduate School, University of Oxford, Oxford, UK). 27th Feb 2023. **Characteristics of open access skin cancer image datasets: implications for equitable digital health**. [Video](https://youtu.be/E4inBrMLVog).
* S01E03 - **[Prof. Colin Fleming]()** (Ninewells Hospital, Dundee, UK). 27th Feb 2023. **Characteristics of skin lesions datasets**. [Video](https://youtu.be/MlBxlL5WUuU).
* S02E01 - **[Prof. Amber Simpson](http://simpsonlab.org)** (Queen's University, Canada). 5th June 2023. **The medical segmentation decathlon**. [Video](https://www.youtube.com/watch?v=2sbWrXO6gAc&list=PL_BSB_M_evSmfj9zSvqYVgTcJFtVdJc3y&index=3).
* S02E02 - **[Dr. Esther E. Bron](https://estherbron.com)** (Erasmus MC - University Medical Center Rotterdam, the Netherlands). 5th June 2023. **Image analysis and machine learning competitions in dementia**. [Video](https://www.youtube.com/watch?v=pYl9bBcQA-M&list=PL_BSB_M_evSmfj9zSvqYVgTcJFtVdJc3y&index=4).
* S02E03 - **[Dr. Ujjwal Baid](https://www.med.upenn.edu/cbica/ujjwalbaid.html)** (University of Pennsylvania, USA). 5th June 2023. **Brain tumor segmentation challenge 2023**. [Video](https://www.youtube.com/watch?v=_RlcKW0sZ80&list=PL_BSB_M_evSmfj9zSvqYVgTcJFtVdJc3y&index=5).
* S03E01 - **[Dr. Thijs Kooi](https://www.thijskooi.com/)** (Lunit, South Korea). 18th September 2023. **Optimizing annotation cost for AI based medical image analysis**. [Video](https://youtu.be/qhAYUfQlYfo).
* S03E02 - **[Dr. Andre Pacheco](http://pachecoandre.com.br/)** (Federal University of Espírito Santo, Brazil). 18th September 2023. **PAD-UFES-20: the challenges and opportunities in creating a skin lesion dataset**. [Video](https://youtu.be/q-DBwWZejMY).

### Organizers
[Amelia Jiménez-Sánchez](https://ameliajimenez.github.io) & [Veronika Cheplygina](https://veronikach.com) at IT University of Copenhagen (Denmark). This project has received funding from the Independent Research Fund Denmark - Inge Lehmann number 1134-00017B.

### Newsletter
If you want to receive information about upcoming seminars, please sign up to our mailing list. We pick the GDPR-compliant [Brevo (formerly Sendinblue)](https://www.brevo.com) as our mail provider. If you have any concerns relating to our data handling, please read our [privacy notice](https://purrlab.github.io/privacy-notice/).

**Please be aware that many mail providers are tagged as junk, and the confirmation email might end up in your spam folder**. Double check if your confirmation email is there. The sender will be PURRlab @ IT University of Copenhagen (amji @ itu.dk). Please add this sender to your contacts. If you have any problems subscribing to our mailing list, please contact Amelia.

<iframe width="540" height="605" src="https://d38ce30a.sibforms.com/serve/MUIEAPSRZjlFAdfMz8MsZO53v-A_vcHHQocx0NLiINtS4SpGngY-yCP3vJmtqARnIWjToJZv00KQeUrPlREILOYNuPOQq8l9WoXu6Qls_6IvXBWDCH_1qRu5Ef7LUhHYLSHoD-t0KNhf9Hu_6frv5Mdmr1UwyYt__pIObhWMU1EIpyqZ-D4T0PAPI79wxYR-knKueJF4WmOAmptH" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
