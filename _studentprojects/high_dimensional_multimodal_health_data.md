---
layout: post
title: "Investigating High-dimensional Multimodal Health Data"
status: current
inline: false
---
**Supervisors:** Beatrix (daily supervisor), Veronika (co-supervisor / co-examiner)


Much health data is inherently high-dimensional. Take for example the Padchest dataset [1] which contains x-ray images from thousands of patients together with reports of findings and diagnoses. The images alone are 2000 times 2000 pixels or more, and even if you use machine learning methods to make dense representations of the images, you will still end up with each representation having hundreds of dimensions. Any representations you make of the reports will also have hundreds of dimensions.  


When working with high-dimensional health data, we are often interested in which patients are similar. This similarity is often measured by some kind of distance between their recorded data and using this distance to find out which patients are in the same group or neighbourhood. However, when finding neighbours in high dimensional data, we often run into so-called ``hubs''[2,3], data points which a in the nearest neighbours of a disproportionate amount of other data points.  Often this is not because the hubs are close to many other elements in any semantic sense, which makes it difficult to arrange the data into meaningful groups. 


The goal of this project is to consider how high-dimensional multimodal health data is affected by hubness, and to figure out when it will or will not be a problem. Some specific directions could be:

- Will different kinds of distances give less hubness or ensure that the hubness we get is meaningful? There are many other kinds of distances than Euclidean and [4] showed that under reasonable assumptions probability distance will not give rise to problematic hubness in language models. Can we find other distances less prone to bad hubness? See e.g. [distances from Pattern Recognition Tools](https://37steps.com/prdisdata/).
- t-SNE and UMAP are methods often used for data visualization which use adaptive/local distance scaling rather than raw Euclidean distances for calculating their neighbours. Is this enough to mitigate hubness? 
- It is possible to have lower dimensional data in a higher dimensional space? [3] suggest that it is the intrinsic and not the ambient dimension of the data which decides whether there will be hubness. Which methods for measuring this intrinsic dimensionality work best for predicting hubness? 
- Other questions on the topic that the students find especially interesting / define themselves after discussion with the supervisors. 

Ideally, the project group should consist of two students. Students must be from either the data science or computer science programs. 


## References

[1] Aurelia Bustos, Antonio Pertusa, Jose-Maria Salinas, and Maria De La Iglesia-Vaya. Padchest: A large chest x-ray image dataset with multi-label annotated reports. Medical image analysis, 66:101797, 2020. 

[2] Francois Pachet and Jean-Julien Aucouturier. Improving timbre similarity: How high is the sky. Journal of negative results in speech and audio sciences, 1(1):1–13, 2004. 

[3] Milos Radovanovic, Alexandros Nanopoulos, and Mirjana Ivanovic. Hubs in space: Popular nearest neighbors in high-dimensional data. Journal of machine learning research, 11(sept):2487–2531, 2010.

[4] Beatrix Miranda Ginn Nielsen, Iuri Macocco, and Marco Baroni. Prediction hubs are context-informed frequent tokens in llms. In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 23715–23745, 2025.
