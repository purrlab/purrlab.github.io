---
layout: page
title: People
permalink: /people/
description: 
nav: true
nav_order: 2
horizontal: false
display_categories: 
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


<h2>Students</h2>
<ul>
  <li>Chrisanna Kate Cornish (BSc thesis 2023)</li>
  <li>Danielle Marie Dequin (BSc thesis 2023)</li>
  <li>Cathrine Damgaard (MSc thesis 2023)</li>
  <li>Trine Naja Eriksen (MSc thesis 2023)</li>
  <li>Stinna Ødgaard Winther (MSc thesis 2023)</li>
  <li>Ahmet Akkoç (MSc project 2023)</li>
  <li>Christine Kaarde Galsgaard (MSc thesis 2022)</li>
  <li>Nikolaj Kjøller Bjerregaard (MSc thesis 2022)</li>
  <li>Kasper Thorhauge Grønbek (BSc thesis 2022)</li>
  <li>Andreas Skovdal (BSc thesis 2022)</li>
  <li>Frederik Bechmann Faarup (BSc thesis 2022)</li>
</ul>
