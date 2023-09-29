---
layout: page
title: CATS
description: Choosing A Transfer Source for Medical Image Classification
img: assets/img/project_cats.png
importance: 2
category: work
---

<h2>Description</h2>
Machine learning (ML) with neural networks has recently made significant progress in medical image diagnosis, with some algorithms now being approved for clinical use. However, in some applications the datasets remain small, for example due to the introduction of new imaging techniques and the cost of annotating the data. In such cases, neural networks can be trained through transfer learning - training on data from a related source domain (such as publicly available data) before using data from a target domain (such as clinical data). 

A popular strategy when working with any images is to use ImageNet, a dataset of natural images such as cats, as the source data. Networks which are already trained on ImageNet are also available, simplifying the access. A surprising result is that despite dissimilar image content, ImageNet can still improve performance for medical targets. However, since medical images have different characteristics (3D, high resolution, few classes, among others), this strategy can hurt the diagnostic performance of the algorithm . Unfortunately comparisons between ImageNet and medical source data are limited, possibly due to the prohibitive computational costs. In this project we investigate how to find a good
source dataset in a way that reduces the overall carbon footprint, by defining dataset similarity measures which reflect the transferability of datasets, as well as studying how researchers make choices about which datasets to use as sources. 

<h2>People</h2>
Dovile Juodelyte, Veronika Cheplygina
  
<h2>Funding</h2>
Novo Nordisk Foundation Starting Package - NNF21OC0068816
