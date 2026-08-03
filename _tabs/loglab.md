---
title: LogLab
icon: fas fa-flask
order: 2
---

Notes on learning, research, engineering, and side projects.

Topics include integrated circuits, RISC-V, FPGA, AI acceleration, programming, and developer tools.

{% assign posts = site.categories['LogLAB'] %}
{% if posts and posts.size > 0 %}
## Latest Posts

{% for post in posts limit: 12 %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
No posts yet.
{% endif %}
