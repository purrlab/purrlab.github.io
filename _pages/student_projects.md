---
layout: page
permalink: /student_projects/
title: "Student Projects"
description: List of available student projects
nav: true
nav_order: 8
display_categories: [Metaresearch,Multimodal,Transferability]
---

## BSc and MSc projects at ITU


At PURRlab we are doing meta-research on the use of machine learning, often in medical image analysis. To learn more about the research directions, check out our [publications](https://purrlab.github.io/publications/). You can find highlighted example of previous student projects on the [projects page](https://purrlab.github.io/projects/). You can also find more examples on our github [https://github.com/purrlab](https://github.com/purrlab)

More information about what it's like to join the lab, and general resources for students are available in our [Lab guide on Notion](https://vcheplygina.notion.site/Lab-guide-PURRlab-at-ITU-c85f30c838f1447780773a456cf35fcd?pvs=74).

Here are some project ideas available for BSc and MSc students from spring 2026:

<!-- Display categorized projects -->
{%- for category in page.display_categories %}
{%- assign categorized_projects = site.studentprojects | where: "category", category -%}
<h2 class="category">{{ category }}</h2>
<div class="news">
  {% assign projects = categorized_projects | where:"status","current" %}
  {% if projects != blank %}
    {% assign projects_size = projects | size %}
    <div
      class="table-responsive"
      {% if include.limit and page.announcements.scrollable and studentprojects > 3 %}
        style="max-height: 60vw"
      {% endif %}
    >
      <table class="table table-sm table-borderless">
        <div class="row">
            {% for item in projects%}
              <tr>
                <th scope="row"><a class="news-title" href="{{ item.url | relative_url }}">{{ item.title}}</a></th>
              </tr>
            {% endfor %}
        </div>
      </table>
    </div>
  {% else %}
    <p>No project available for this theme yet, check again later or contact us with your own idea if you think it would be a nice fit!</p>
  {% endif %}
</div>
{% endfor %}