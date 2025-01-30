---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

An overview of our publications. The links if available are to the official/published version, but you should always be able to find a preprint on arXiV as well. 

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
