---
layout: page
title: People
permalink: /people/
description: 
nav: true
nav_order: 2
horizontal: false
display_categories: [Current, Past]
---

<!-- pages/people.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.people | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include people.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.people | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include people.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>


<h2>MSc students at ITU</h2>
<ul>
  <li>Niclas Classen (spring 2025) - Colon reconstruction in CT scans  </li>
  <li>Ioana-Daria Vasile (spring 2025) – Colon reconstruction in CT scans  </li>
  <li>Anders Havbro Hjulmand (fall 2024, spring 2025) – DNA foundation models </li>
  <li>Eisuke Okuda (fall 2024, spring 2025) – DNA foundation models </li>
  <li>Andreas Flensted Olsen (fall 2024, spring 2025) – DNA foundation models </li>
  <li>Bianca Ida Pedersen, Max Andreas de Visser (fall 2024) – Shortcuts in chest CT scans </li>
  <li>Veron Hoxha (fall 2024) – Dataset duplication on Kaggle </li>
  <li>Michelle Hestbek-Møller (spring 2024) - Generating Synthetic X-ray Images from CT scans using SyntheX </li>
  <li>Casper Anton Poulsen (spring 2024) - Generating Synthetic X-ray Images from CT scans using SyntheX </li>
  <li>Jorge del Pozo Lerida (spring 2024) - Automatic Detection of Cerebral Microbleeds </li>
  <li>Caroline Vang-Larsen (fall 2023) - Study data use and reuse dynamics in neuroimaging using URLs in NeuroImage papers</li>
  <li>Cathrine Damgaard (spring 2023) - Annotation label reliability and pathology detection in publicly available chest X-ray datasets</li>
  <li>Trine Naja Eriksen (spring 2023) - Annotation label reliability and pathology detection in publicly available chest X-ray datasets</li>
  <li>Stinna Ødgaard Winther (spring 2023) - Systematic review to identify and study chest x-ray datasets</li>
  <li>Ahmet Akkoç (fall 2022) - Datasets citations and mentions in PMLR venues</li>
  <li>Christine Kaarde Galsgaard (fall 2022) - Qualitative and quantitative analysis on datasets, affiliations, references and ethics</li>
  <li>Nikolaj Kjøller Bjerregaard (spring 2022) - Recognizing furigana in Japanese texts and comic books</li>
</ul>

<h2>BSc students at ITU</h2>
<ul>
<li>Gabriela Zhelyazkova (spring 2025) - Impact of clinical features on the performance of machine learning models classifying pleural effusion</li>
<li>Mirka Katuscáková (spring 2024) - Influence of pen markings in skin lesion classification</li> 
<li>Yasmin Sarkhosh (spring 2024) - Investigation into demographic representation in Healthcare AI</li> 
<li>Lars Andreas Metsälä Wulff (spring 2024) - Robustness and sex differences in skin cancer detection: logistic regression vs CNNs</li> 
<li>Nikolette Zoe Pedersen (spring 2024) - Robustness and sex differences in skin cancer detection: logistic regression vs CNNs</li> 
<li>Regitze Julie Sydendal (spring 2024) - Robustness and sex differences in skin cancer detection: logistic regression vs CNNs</li> 
<li>Jannik Elsässer (spring 2024) - Recognizing sea grass in underwater images</li>
<li>Chrisanna Kate Cornish (spring 2023) - Investigating the carbon cost of machine learning competitions that use medical image datasets</li>
<li>Danielle Marie Dequin (spring 2023) - Investigating the carbon cost of machine learning competitions that use medical image datasets</li>
<li>Kasper Thorhauge Grønbek (spring 2022) - Hidden features in chest X-ray images</li>
<li>Andreas Skovdal (spring 2022) - Hidden features in chest X-ray images</li>
<li>Frederik Bechmann Faarup (spring 2022) - Hidden features in mammography images</li>
</ul>

<h2>MSc students at TU Eindhoven</h2>
<ul>
  <li>Irma van den Brandt (2020) - Transfer learning from (non)-medical datasets</li>
  <li>Britt Michels (2019-2020) - Evaluation of medical image segmentation</li>
  <li>Colin Nieuwlaat (2019-2020) - Transfer learning & dataset shift</li>
  <li>Rumjana Romanova (2019-2020) - Stability of deep multiple instance learning</li>
  <li>Tom van Sonsbeek (2018-2019) - Meta-learning for medical image segmentation</li>
  <li>Linde Hesse (2018-2019) - Lung nodule detection in spectral CT</li>
</ul>
