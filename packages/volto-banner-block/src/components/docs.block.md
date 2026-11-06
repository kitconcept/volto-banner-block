---
block: banner
---

The banner shows an image with up to two lines of prominent text on top of it.
An editor chooses the image in the page, and the text lines are optional.

The block stores the path of the image in the site, with the alt text for the image and the two text lines.

### Fields

- `url`: the path of the image in the site, without the host, such as `/images/banner-example`.
  It is a string, not an object.
- `alt`: the text describing the image for people who can't see it.
  Leave it out when the image is purely decorative.
- `text`: the first line of text, shown above `additionalText`.
- `additionalText`: the second line of text.
- `styles.blockWidth`: how wide the block is on the page.
  `layout` (the default, when the value is left out) keeps the width of the page layout, and `full` uses the full width of the page.

### Example

```json
{
  "@type": "banner",
  "url": "/images/banner-example",
  "alt": "A group of people in a meeting room",
  "text": "Annual report",
  "additionalText": "Read the highlights of the year",
  "styles": {
    "blockWidth": "full"
  }
}
```
