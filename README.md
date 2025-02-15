<p align="center">
  <img style="width: 25%" src="https://github.com/user-attachments/assets/a9ef43a6-51bf-4526-8295-a6c3ca11c016" />
  <h1 align="center">GitHub Lowlands Community</h1>
</p>

## Blog Posts

### Blog Page
Check out our [blog page](blog.html) for the latest articles, comments, likes, and more.

### Subscription and Follow
Subscribe and follow our GitHub Pages to get notified when new articles are published.

### Social Media Sharing
Share our articles on BlueSky, LinkedIn, X, and other platforms using the social media sharing buttons on each blog post.

## Enabling GitHub Pages

To enable GitHub Pages in the repository settings, follow these steps:

* Go to the repository on GitHub.
* Click on the "Settings" tab.
* Scroll down to the "Pages" section in the left sidebar.
* Under "Source", select the branch you want to use for GitHub Pages (e.g., `main`).
* Click "Save" to apply the changes.
* Optionally, configure a custom domain if you have one.
* Your site will be published at `https://<username>.github.io/<repository-name>/`.

## Structuring the `_posts` Directory

To structure the `_posts` directory for your blog, follow these steps:

* Create a `_posts` directory in the root of your repository.
* Inside the `_posts` directory, create Markdown files (`.md`) for each blog post.
* Name each Markdown file using the format `YYYY-MM-DD-title.md`, where `YYYY-MM-DD` is the date of the post and `title` is a short, descriptive title for the post.
* At the beginning of each Markdown file, include front matter in YAML format to provide metadata for the post. The front matter should include at least the following fields:
  * `title`: The title of the blog post.
  * `date`: The publication date of the blog post in `YYYY-MM-DD` format.
  * `author`: The author of the blog post.
  * `tags`: A list of tags associated with the blog post.
* Write the content of the blog post in Markdown format after the front matter.

Example structure:
```
_posts/
  2023-09-01-welcome-to-our-blog.md
  2023-09-02-another-interesting-post.md
```

Example front matter for a blog post:
```yaml
---
title: "Welcome to Our Blog"
date: 2023-09-01
author: "John Doe"
tags: ["introduction", "welcome"]
---
```

## Using Jekyll for GitHub Pages

To use Jekyll for GitHub Pages, follow these steps:

* Install Jekyll on your local machine by following the instructions on the Jekyll website.
* Create a new Jekyll site by running `jekyll new myblog` in your terminal. This will generate a new Jekyll site in a directory called `myblog`.
* Navigate to the `myblog` directory and start the Jekyll server by running `bundle exec jekyll serve`. This will start a local server at `http://localhost:4000` where you can preview your site.
* Customize your Jekyll site by editing the files in the `myblog` directory. You can modify the `_config.yml` file to configure various settings for your site, such as the title, description, and theme.
* Add your blog posts to the `_posts` directory in the `myblog` directory. Each post should be a Markdown file with a filename in the format `YYYY-MM-DD-title.md`.
* Once you are satisfied with your Jekyll site, push the contents of the `myblog` directory to your GitHub repository.
* Enable GitHub Pages in the repository settings by following the steps mentioned earlier.
* Your Jekyll site will be published at `https://<username>.github.io/<repository-name>/`.

## Using Liquid Templates in Jekyll

To use Liquid templates in Jekyll, follow these steps:

* Liquid is a templating language used in Jekyll to create dynamic content. It allows you to use variables, filters, and logic in your templates.
* In your Jekyll site, you can use Liquid in your HTML files, Markdown files, and `_layouts` files.
* To use Liquid in your templates, enclose your Liquid code in `{% %}` for tags and `{{ }}` for output.

### Basic usage

* Use `{{ variable }}` to output the value of a variable.
* Use `{% if condition %} ... {% endif %}` to add conditional logic.
* Use `{% for item in collection %} ... {% endfor %}` to loop through a collection.
* Use filters to modify the output of variables, e.g., `{{ variable | filter }}`.

### Example

* Create a `_layouts` directory in the root of your repository.
* Add a `default.html` file in the `_layouts` directory to define the default layout for your site.
* Use Liquid tags and output in the `default.html` file to create a dynamic layout.

Example `default.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ page.title }}</title>
</head>
<body>
  <header>
    <h1>{{ site.title }}</h1>
  </header>
  <main>
    {{ content }}
  </main>
  <footer>
    <p>&copy; {{ site.time | date: "%Y" }} {{ site.author }}</p>
  </footer>
</body>
</html>
```

### Using Liquid in posts

* In your `_posts` directory, you can use Liquid to add dynamic content to your blog posts.
* Use front matter to define variables for each post, and use Liquid to output these variables in your post templates.

Example front matter in a post:
```yaml
---
title: "My First Post"
date: 2023-09-01
author: "John Doe"
---
```

Example post content:
```markdown
# {{ page.title }}

Published on {{ page.date | date: "%B %d, %Y" }} by {{ page.author }}

Welcome to my first blog post!
```

By using Liquid templates in Jekyll, you can create dynamic and customizable content for your GitHub Pages blog. For more detailed information, refer to the Liquid documentation.
