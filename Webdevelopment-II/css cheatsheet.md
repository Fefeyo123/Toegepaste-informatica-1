Here is a similar cheat sheet for CSS with a detailed Table of Contents:

# Cheat Sheet CSS

- [CSS Basics](#css-basics)
  - [Syntax](#syntax)
  - [Selectors](#selectors)
  - [Comments](#comments)
- [Text Styling](#text-styling)
  - [Color](#color)
  - [Font](#font)
  - [Text Alignment](#text-alignment)
  - [Text Decoration](#text-decoration)
- [Box Model](#box-model)
  - [Margins](#margins)
  - [Padding](#padding)
  - [Borders](#borders)
  - [Width and Height](#width-and-height)
- [Backgrounds](#backgrounds)
  - [Background Color](#background-color)
  - [Background Image](#background-image)
  - [Background Position](#background-position)
  - [Background Size](#background-size)
- [Positioning](#positioning)
  - [Static Positioning](#static-positioning)
  - [Relative Positioning](#relative-positioning)
  - [Absolute Positioning](#absolute-positioning)
  - [Fixed Positioning](#fixed-positioning)
  - [Sticky Positioning](#sticky-positioning)
- [Flexbox](#flexbox)
  - [Container Properties](#container-properties)
  - [Item Properties](#item-properties)
- [Grid](#grid)
  - [Grid Container](#grid-container)
  - [Grid Item](#grid-item)
- [Transitions and Animations](#transitions-and-animations)
  - [Transitions](#transitions)
  - [Animations](#animations)
- [Media Queries](#media-queries)
- [Pseudo-classes and Pseudo-elements](#pseudo-classes-and-pseudo-elements)
  - [Pseudo-classes](#pseudo-classes)
  - [Pseudo-elements](#pseudo-elements)

# CSS Basics

## Syntax

Basic structure of CSS rule.

```css
selector {
  property: value;
}
```

## Selectors

Different ways to select elements.

```css
/* Universal selector */
* {
  /* styles */
}

/* Element selector */
p {
  /* styles */
}

/* Class selector */
.classname {
  /* styles */
}

/* ID selector */
#idname {
  /* styles */
}

/* Attribute selector */
input[type="text"] {
  /* styles */
}
```

## Comments

Adding comments in CSS.

```css
/* This is a comment */
```

# Text Styling

## Color

Set the color of text.

```css
p {
  color: red; /* Named color */
  color: #ff0000; /* Hex color */
  color: rgb(255, 0, 0); /* RGB color */
}
```

## Font

Set font properties.

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
```

## Text Alignment

Align text.

```css
p {
  text-align: left; /* left, right, center, justify */
}
```

## Text Decoration

Decorate text.

```css
p {
  text-decoration: none; /* none, underline, overline, line-through */
}
```

# Box Model

## Margins

Set the space outside elements.

```css
p {
  margin: 10px; /* All sides */
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
```

## Padding

Set the space inside elements.

```css
p {
  padding: 10px; /* All sides */
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
```

## Borders

Set the border properties.

```css
p {
  border: 1px solid black; /* width, style, color */
  border-radius: 5px; /* Rounded corners */
}
```

## Width and Height

Set the width and height of elements.

```css
div {
  width: 100px;
  height: 100px;
}
```

# Backgrounds

## Background Color

Set the background color.

```css
div {
  background-color: blue;
}
```

## Background Image

Set the background image.

```css
div {
  background-image: url('image.jpg');
}
```

## Background Position

Set the position of the background image.

```css
div {
  background-position: center; /* top, right, bottom, left, center */
}
```

## Background Size

Set the size of the background image.

```css
div {
  background-size: cover; /* contain, cover, auto, width height */
}
```

# Positioning

## Static Positioning

Default positioning.

```css
div {
  position: static;
}
```

## Relative Positioning

Position relative to its normal position.

```css
div {
  position: relative;
  top: 10px;
  left: 10px;
}
```

## Absolute Positioning

Position relative to the nearest positioned ancestor.

```css
div {
  position: absolute;
  top: 10px;
  left: 10px;
}
```

## Fixed Positioning

Position relative to the viewport.

```css
div {
  position: fixed;
  top: 10px;
  left: 10px;
}
```

## Sticky Positioning

Switch between relative and fixed, depending on scroll position.

```css
div {
  position: sticky;
  top: 0;
}
```

# Flexbox

## Container Properties

Set properties for flex containers.

```css
.container {
  display: flex;
  flex-direction: row; /* row, row-reverse, column, column-reverse */
  justify-content: center; /* flex-start, flex-end, center, space-between, space-around */
  align-items: center; /* flex-start, flex-end, center, baseline, stretch */
}
```

## Item Properties

Set properties for flex items.

```css
.item {
  flex-grow: 1; /* Grow ratio */
  flex-shrink: 1; /* Shrink ratio */
  flex-basis: 100px; /* Initial size */
  align-self: center; /* Overrides align-items */
}
```

# Grid

## Grid Container

Set properties for grid containers.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Define columns */
  grid-template-rows: auto; /* Define rows */
  gap: 10px; /* Space between items */
}
```

## Grid Item

Set properties for grid items.

```css
.item {
  grid-column: 1 / 3; /* Column start / end */
  grid-row: 1 / 2; /* Row start / end */
}
```

# Transitions and Animations

## Transitions

Create smooth transitions.

```css
div {
  transition: background-color 0.5s ease;
}
div:hover {
  background-color: red;
}
```

## Animations

Create animations.

```css
@keyframes mymove {
  from { top: 0px; }
  to { top: 200px; }
}
div {
  position: relative;
  animation: mymove 5s infinite;
}
```

# Media Queries

Responsive design with media queries.

```css
@media screen and (max-width: 600px) {
  div {
    background-color: lightblue;
  }
}
```

# Pseudo-classes and Pseudo-elements

## Pseudo-classes

Styles for different states of an element.

```css
a:hover {
  color: red; /* Change color on hover */
}
```

## Pseudo-elements

Styles for parts of an element.

```css
p::first-line {
  color: blue; /* Style the first line */
}
```

This cheat sheet covers the basic and essential CSS properties and concepts you will need for most projects.