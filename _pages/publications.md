---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2026,2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
