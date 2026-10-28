---
layout: page
permalink: /blog/
title: Blog
description: Notes on research, simulations and machine learning.
nav: true
nav_order: 7
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

{% if page.pagination.enabled %}
{% assign postlist = paginator.posts %}
{% else %}
{% assign postlist = site.posts %}
{% endif %}

{% comment %} Tag pages exist only when jekyll-archives enables them in the site config; until then tags are plain words {% endcomment %}
{% assign archives = site['jekyll-archives'].enabled %}
{% if archives == true or archives == 'all' or archives contains 'tags' %}
{% assign link_tags = true %}
{% else %}
{% assign link_tags = false %}
{% endif %}

<div class="blog">
  {% if postlist.size == 0 %}
    <p class="blog__empty">No posts yet.</p>
  {% else %}
    <ul class="post-list">
      {% for post in postlist %}
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        <li>
          <time class="post-list__date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %d, %Y' }}</time>
          <div class="post-list__body">
            <h2 class="post-list__title">
              {% if post.redirect == blank %}
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              {% elsif post.redirect contains '://' %}
                <a href="{{ post.redirect }}">{{ post.title }}</a>
              {% else %}
                <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
              {% endif %}
            </h2>
            {% if post.description %}
              <p class="post-list__description">{{ post.description }}</p>
            {% endif %}
            <p class="post-list__meta">
              {{ read_time }} min read
              {%- if post.external_source %} · {{ post.external_source }}{% endif -%}
              {%- for tag in post.tags %}
                ·
                {% if link_tags -%}
                  <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
                {%- else -%}
                  {{ tag }}
                {%- endif -%}
              {%- endfor %}
            </p>
          </div>
        </li>
      {% endfor %}
    </ul>
    {% if page.pagination.enabled and paginator.total_pages > 1 %}
      {% include pagination.liquid %}
    {% endif %}
  {% endif %}
</div>
