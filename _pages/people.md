---
layout: page
title: People
permalink: /people/
description: 
nav: true
nav_order: 2
horizontal: false
display_categories: Current, Past
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
  <li>Niclas Classen - Colon reconstruction in CT scans (spring 2025) </li>
  <li>Ioana-Daria Vasile – Colon reconstruction in CT scans (spring 2025) </li>
  <li>Anders Havbro Hjulmand (fall 2024, spring 2025) – DNA foundation models </li>
  <li>Eisuke Okuda (fall 2024, spring 2025) – DNA foundation models </li>
  <li>Andreas Flensted Olsen (fall 2024, spring 2025) – DNA foundation models </li>
  <li>Bianca Ida Pedersen, Max Andreas de Visser (fall 2024) – Shortcuts in chest CT scans </li>
  <li>Veron Hoxha (fall 2024) – Dataset duplication on Kaggle </li>
  <li>Michelle Hestbek-Møller (spring 2024) </li>
  <li>Casper Anton Poulsen (spring 2024) </li>
  <li>Jorge del Pozo Lerida (spring 2024) </li>
  <li>Caroline Vang-Larsen (fall 2023)</li>
  <li>Cathrine Damgaard (spring 2023)</li>
  <li>Trine Naja Eriksen (spring 2023)</li>
  <li>Stinna Ødgaard Winther (spring 2023)</li>
  <li>Ahmet Akkoç (fall 2022)</li>
  <li>Christine Kaarde Galsgaard (fall 2022)</li>
  <li>Nikolaj Kjøller Bjerregaard (spring 2022)</li>
</ul>

<h2>BSc students at ITU</h2>
<ul>
<li>Gabriela Zhelyazkova (spring 2025)</li>
<li>Mirka Katuscáková (spring 2024)</li> 
<li>Yasmin Sarkhosh (spring 2024)</li> 
<li>Lars Andreas Metsälä Wulff (spring 2024)</li> 
<li>Nikolette Zoe Pedersen (spring 2024)</li> 
<li>Regitze Julie Sydendal (spring 2024)</li> 
<li>Jannik Elsässer (spring 2024)</li>
<li>Chrisanna Kate Cornish (spring 2023)</li>
<li>Danielle Marie Dequin (spring 2023)</li>
<li>Kasper Thorhauge Grønbek (spring 2022)</li>
<li>Andreas Skovdal (spring 2022)</li>
<li>Frederik Bechmann Faarup (spring 2022)</li>
</ul>

<h2>MSc students at TU Eindhoven</h2>
<ul>
  <li>Irma van den Brandt (2020)</li>
  <li>Britt Michels (2019-2020)</li>
  <li>Colin Nieuwlaat (2019-2020)</li>
  <li>Rumjana Romanova (2019-2020)</li>
  <li>Tom van Sonsbeek (2018-2019)</li>
  <li>Linde Hesse (2018-2019)</li>
</ul>
