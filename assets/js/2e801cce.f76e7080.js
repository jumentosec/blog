"use strict";(self.webpackChunkstart_blog=self.webpackChunkstart_blog||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"readme-first","metadata":{"permalink":"/readme-first","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-19-readme/index.mdx","source":"@site/blog/2024-01-19-readme/index.mdx","title":"README","description":"So, you want to make your first post here! Read below the guidelines on how to make it happen!","date":"2024-01-19T00:00:00.000Z","formattedDate":"January 19, 2024","tags":[{"label":"blogging","permalink":"/tags/blogging"}],"readingTime":1.405,"hasTruncateMarker":true,"authors":[{"name":"Nullniverse","title":"JumentoSEC Maintainer","url":"https://github.com/nullniverse","imageURL":"https://github.com/nullniverse.png","key":"nullniverse"}],"frontMatter":{"slug":"readme-first","title":"README","authors":["nullniverse"],"tags":["blogging"]},"unlisted":false},"content":"So, you want to make your first post here! Read below the guidelines on how to make it happen!\\n\\n\\n\x3c!--truncate--\x3e\\n\\n## 1. Clone this Repo\\n\\nStart by cloning locally [this repo](https://github.com/jumentosec/blog.jumentosec.lol) and create \\na new branch from `main`.\\n\\nMake sure you have allowed signed commits [(1)](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)[(2)](https://blog.nullniverse.xyz/posts/signed-commits) on your account before pushing your new branch and opening a PR.\\n\\n## 2. Conventions\\n\\n1. Use a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view, respecting other\'s postings.\\n1. Add yourself to the `authors.yml` file if it is your first post (Welcome!).\\n1. Add a new folder with the following naming pattern: `YYYY-MM-DD-post-title` inside the `blog/` folder.\\nThe blog post date can be extracted from filenames, such as: `2019-05-30-welcome/index.mdx`\\n1. Inside it, create a new `index.mdx` - note that the name MUST be index.mdx and we are enforcing .mdx extensions throughout this project\'s posts. Read more below...\\n1. Images should be inserted inside your post\'s folder and inserted like this: ![Docusaurus Plushie](./fluffy_donkey.png)\\n1. Don\'t forget to use tags in the headings of your posts. This way we can sort content better for our readers (:\\n\\n## References\\n\\nBlog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts. **Don\'t abuse this feature!**\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::\\n\\nWe have allowed the support to write TeX text inside postings for your convenience:\\n\\nLet $f\\\\colon[a,b]\\\\to\\\\R$ be Riemann integrable. Let $F\\\\colon[a,b]\\\\to\\\\R$ be\\n$F(x)=\\\\int_{a}^{x} f(t)\\\\,dt$. Then $F$ is continuous, and at all $x$ such that\\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F\'(x)=f(x)$.\\n\\nPlease, check [KaTeX](https://katex.org/) documentations for more details."}]}')}}]);