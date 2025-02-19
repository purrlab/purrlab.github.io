---
layout: page
title: Public Datasets
description: Studying public datasets in scientific literature
img: assets/img/project_publicdatasets.png
importance: 2
category: work
---

<figure style="text-align: center;">     <img src="/assets/img/project_publicdatasets.png" alt="Banner Image" style="width:100%; max-width:400px;">     <figcaption style="font-size: smaller;"> Information is extracted from research papers to perform meta-studies on how public datasets are used and documented.</figcaption> </figure>


<h2>Description</h2>

Medical imaging papers often focus on methodology, but the quality of the algorithms and the validity of the conclusions are highly dependent on the datasets used. As creating datasets requires a lot of effort, researchers often use publicly available datasets. In this project we analysed how these public medical datasets are used and documented in the scientific literature.
Our findings showed the concentration of research papers on few publicly available datasets and the lack of standard to acknowledge the usage of the datasets. We also created open-source tools to collect citations and mentions of datasets in scientific papers.
   
Several students have done work related to this project:
<ul>
<li>Ahmet Akkoç studied how datasets are cited and mentions in pmlr venues</li>
<li>Stinna Winther did a systematic review to identify and study chest x-ray datasets</li>
<li>Christine Lyngbye Galsgaard carried qualitative and quantitative analysis on datasets, affiliations, references and ethics. She for example showed an increase in the usage of public over private datasets</li>
<li>Caroline Vang-Larsen studied URLs in NeuroImage papers from 2022, focusing on their patterns, contexts, and usage to unravel data use and reuse dynamics in neuroimaging. She revealed a high inclusion of URLs in the articles with only a minority link to the specific datasets</li>
<li>Yasmin Sarkhosh made a systematic review of research presented at the 2023 MICCAI conference to analyze the datasets used and understand the extent of demographic data incorporation during model training</li>
</ul> 


<h2>People</h2>
[Théo Sourget](https://tsourget.fr), [Veronika Cheplygina](https://veronikach.com).

<h2>Funding</h2>
Danish Data Science Academy DDSA-V-2022-004 and DFF (Independent Research Council Denmark) Inge Lehmann 1134-00017B

<h2>References</h2>
----------
<div class="publications">
  {% bibliography --query @*[project ~= publicdataset] %}
</div>
