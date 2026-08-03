---
title: LifeThink
icon: fas fa-compass
order: 3
---

Notes beyond work: travel, sports, pets, games, and personal reflections.

{% assign posts = site.categories['LifeThink'] %}
{% if posts and posts.size > 0 %}
## Latest Posts

{% for post in posts limit: 12 %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
No posts yet.
{% endif %}
