## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## SEO Guidelines (Strict Bing & Google Constraints)

Always validate and verify character lengths before modifying or creating `<title>` and `<meta name="description">` tags:

1. **Page Title Tag**:
   - **Recommended Target**: 50 to 60 characters (~580–600 px desktop width).
   - **Hard Ceiling**: 65 characters maximum.
   - **Strict Bing Limit**: Must NEVER reach or exceed 70 characters (triggers hard Bing Webmaster SEO error).

2. **Meta Description Tag**:
   - **Recommended Target**: 130 to 155 characters (~920–960 px desktop width).
   - **Hard Ceiling**: 158 characters maximum.
   - **Strict Bing Limits**: Must strictly be between 25 and 160 characters (outside this triggers hard Bing Webmaster SEO error).

3. **Validation Rule**:
   - Always count character lengths and report them when proposing or applying changes to page titles and descriptions.

