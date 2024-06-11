Sure! Here is a similar cheat sheet for HTML with a detailed Table of Contents:

# Cheat Sheet HTML

- [HTML Basics](#html-basics)
  - [DOCTYPE Declaration](#doctype-declaration)
  - [HTML Document Structure](#html-document-structure)
  - [Head Section](#head-section)
  - [Body Section](#body-section)
- [Text Formatting](#text-formatting)
  - [Headings](#headings)
  - [Paragraphs](#paragraphs)
  - [Bold Text](#bold-text)
  - [Italic Text](#italic-text)
  - [Line Breaks](#line-breaks)
- [Lists](#lists)
  - [Ordered Lists](#ordered-lists)
  - [Unordered Lists](#unordered-lists)
  - [Definition Lists](#definition-lists)
- [Links](#links)
- [Images](#images)
- [Tables](#tables)
- [Forms](#forms)
  - [Input Fields](#input-fields)
  - [Radio Buttons](#radio-buttons)
  - [Checkboxes](#checkboxes)
  - [Select Menus](#select-menus)
  - [Textareas](#textareas)
  - [Buttons](#buttons)
- [Semantic Elements](#semantic-elements)
  - [Header](#header)
  - [Nav](#nav)
  - [Main](#main)
  - [Footer](#footer)
  - [Section](#section)
  - [Article](#article)
  - [Aside](#aside)
- [Multimedia](#multimedia)
  - [Audio](#audio)
  - [Video](#video)
- [Meta Tags](#meta-tags)

# HTML Basics

## DOCTYPE Declaration

Defines the document type and HTML version.

```html
<!DOCTYPE html>
```

## HTML Document Structure

Basic structure of an HTML document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
```

## Head Section

Contains metadata, title, and links to CSS and JS.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
```

## Body Section

Contains the content of the HTML document.

```html
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph.</p>
</body>
```

# Text Formatting

## Headings

Defines HTML headings from `<h1>` to `<h6>`.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Paragraphs

Defines a paragraph.

```html
<p>This is a paragraph.</p>
```

## Bold Text

Makes text bold.

```html
<strong>Bold Text</strong>
<b>Bold Text</b>
```

## Italic Text

Makes text italic.

```html
<em>Italic Text</em>
<i>Italic Text</i>
```

## Line Breaks

Inserts a line break.

```html
<p>First line.<br>Second line.</p>
```

# Lists

## Ordered Lists

Defines an ordered list.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

## Unordered Lists

Defines an unordered list.

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

## Definition Lists

Defines a list of terms and descriptions.

```html
<dl>
  <dt>Term 1</dt>
  <dd>Description 1</dd>
  <dt>Term 2</dt>
  <dd>Description 2</dd>
</dl>
```

# Links

Creates a hyperlink.

```html
<a href="https://www.example.com">Visit Example</a>
```

# Images

Inserts an image.

```html
<img src="image.jpg" alt="Description of image">
```

# Tables

Defines a table.

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

# Forms

## Input Fields

Creates input fields for forms.

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

## Radio Buttons

Creates radio buttons.

```html
<form>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
</form>
```

## Checkboxes

Creates checkboxes.

```html
<form>
  <input type="checkbox" id="subscribe" name="subscribe" value="newsletter">
  <label for="subscribe">Subscribe to newsletter</label>
</form>
```

## Select Menus

Creates a drop-down list.

```html
<form>
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </select>
</form>
```

## Textareas

Creates a multi-line text input.

```html
<form>
  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>
</form>
```

## Buttons

Creates clickable buttons.

```html
<button type="button">Click Me!</button>
<input type="submit" value="Submit">
<input type="reset" value="Reset">
```

# Semantic Elements

## Header

Defines the header of a section or page.

```html
<header>
  <h1>Website Header</h1>
</header>
```

## Nav

Defines navigation links.

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
```

## Main

Defines the main content of a document.

```html
<main>
  <h2>Main Content</h2>
  <p>This is the main content of the page.</p>
</main>
```

## Footer

Defines the footer of a section or page.

```html
<footer>
  <p>Footer Content</p>
</footer>
```

## Section

Defines a section in a document.

```html
<section>
  <h2>Section Title</h2>
  <p>Section content goes here.</p>
</section>
```

## Article

Defines an independent, self-contained content.

```html
<article>
  <h2>Article Title</h2>
  <p>Article content goes here.</p>
</article>
```

## Aside

Defines content aside from the content it is placed in.

```html
<aside>
  <h2>Related</h2>
  <p>Related content goes here.</p>
</aside>
```

# Multimedia

## Audio

Embeds an audio file.

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

## Video

Embeds a video file.

```html
<video width="320" height="240" controls>
  <source src="videofile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

# Meta Tags

Meta tags provide metadata about the HTML document. 

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
```

This cheat sheet covers the basic and essential HTML tags and elements you will need for most projects.