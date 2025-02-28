---
layout: page
title: MMC
description: Making Meta-Data Count
img: assets/img/project_mmc.png
importance: 2
category: work
---

Machine learning has shown promising results in medical image diagnosis, at times with claims of expert-level performance. The availability of large public datasets have shifted the interest of the medical community to high-performance algorithms. However, little attention is paid to the quality of the data or annotations. Algorithms with high reported performances have been shown to suffer from overfitting or shortcuts, i.e. spurious correlations between artifacts in images and diagnostic labels. Examples include pen marks in skin lesion classification, patient position in detection of COVID-19, and chest drains in pneumothorax classification. Performance may appear high when training and evaluating on data with shortcuts, but degraded when the shortcut is removed. This happens because the algorithm cannot generalize based on the actual features related to the diagnosis.

Our goal is to redefine how meta-data is used and thus improve the robustness of algorithms. 
We plan to:
* investigate what kind of different shortcuts (based on demographics or image artefacts) might occur and how these affect the performance and fairness of the algorithms ⚖️.
* investigate meta-data-aware methods to try to avoid learning biases or shortcuts ⚔️🛡.

Some students have done work related to this project:
* Bianca Ida Pedersen and Max Andreas de Visser investigated shortcuts in 3D lung nodules using the publicly available LIDC-IDRI dataset.
* Casper Anton Poulsen and Michelle Hestbek-Møller explored generating synthetic X-ray images using SyntheX.
* Trine Naja Eriksen and Cathrine Damgaard developed a chest drain detector with their non-expert annotations that generalizes well to expert labels.
* Paula Victoria Menshikoff and Katarina Kraljevic investigated shortcut learning across different demographic attributes for chest X-ray classification.


<h2>People</h2>
[Amelia Jiménez-Sánchez](https://purrlab.github.io/people/jimenez-sanchez/), [Théo Sourget](https://purrlab.github.io/people/sourget/), [Veronika Cheplygina](https://purrlab.github.io/people/cheplygina/).

<h2> Webinar </h2>
<p> We are organizing a webinar series: <a href="https://medical-datasets.github.io/webinar/"><strong>Datasets through the L👀king-Glass</strong></a> to better understand what researchers are doing with their (meta-) data.
</p>

<h2> Workshop </h2>
<p> We organized a 2-days workshop in Nyborg Strand (DK) <a href="https://medical-datasets.github.io/workshop/"><strong>In the Picture: Medical Imaging Datasets</strong></a> focused on the challenges within medical imaging datasets that hinder the development of fair and robust AI algorithms. We had several invited talks, and mostly group sessions that focused on engagement and collaboration.
</p>

<h2>Dataset</h2>
<p> <strong>NEATX</strong>: Non-Expert Annotations of Tubes in X-rays, hosted on <a href="https://zenodo.org/records/14944064/">Zenodo</a>. </p>
<p> This dataset contains 3.5k chest drain annotations for the NIH-CXR14 dataset, and 1k annotations for four different tube types (chest drain, tracheostomy, nasogastric, and endotracheal) in the PadChest dataset by two data science students. </p>

<h2>References</h2>
----------
<div class="publications">
  {% bibliography --query @*[project ~= mmc] %}
</div>

<h2>Funding</h2>
DFF (Independent Research Council Denmark) Inge Lehmann 1134-00017B 
