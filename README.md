# Do Server Side Rendering

## Table of contents

    -   Getting Started
    -   What is SSR?
    -   Cons & Pros of SSR
    -   Alternatives
    -   Babel & Webpack for SSR
    -   Hello, SSR
    -   Styling SSR app
    -   Integrating Router/Redux/ReduxSaga
    -   SSR frameworks
    -   Recommended VScode settings
    -   References

## Getting Started

```bash
# install node_modules in root and link local modules in [package]
yarn && cd packages/[package]

# go to root and run
# if Error: Cannot find module 'path/to/package' happens,
# execute yarn run#[package_number] again
cd ../.. && yarn run#[packages/package_number]
```

Everything's ready! Go take a look at localhost:3000.

## What is SSR?

Before the age of cool frontend frameworks like Angular, React, Vue,

most of the applications(websites) were rendered on server side.

As the time passed, many people started to use frontend frameworks and thus client side rendering.

However, client side rendering has some drawbacks like slow first loading time or poor SEO.

And SSR comes to the rescue!

## Cons & Pros of SSR

Pros: SEO & First time UX

if you look at console(Chrome Dev Tools ), click tab named `Sources`.
You can check rendered output without JS there.

As you can see, if the html is rendered on client side, you can't see anything on screen before
the bundle.js is loaded.

However, with SSR, html page with style is loaded before the bundle so that you can see html/css even
before the bundle.js is done loading.

It definitely enhances UX (user experiece), because you don't have to wait until huge JS bundle is done loading.

This also helps Google Bots to crawl your site.

You can see how google sees your sites by checking this site. ([BROWSEO](http://www.browseo.net/))

Cons:

1. Complicated implementation / Few resources to see and try

SSR api has changed quite a lot for less than two years.

Like any other frontend tools/skills, SSR implementation has been changed a lot.

There are so many blogs/sites that misleads you with out dated information, so unless you're

good at handling babel/webpack or SSR in overall, you'll be lost in the middle of tutorials.

2.  Hard to deal with data hydration

Most of the mid to large size React projects uses Redux for state management. (Redux is de facto standard for state management in React community)

So it is required to hydrate and fetch data on server side, however, its implementation is also really tricky.

3. Increased burden on your server

Client Side Rendered apps, typically using CRA, doesn't require a server to work because they are static websites.

However, if you want to render your apps on server side, you have to pay for them.

## Alternatives

SSR is not that easy. You should master some tools like webpack/babel + SSR libraries.

And also your project will become hard to manage due to increased complexity of the project.

So what you should think about before you just dive into SSR stuff is that "Do you really need SSR?".

SSR is great. It helps Google Bots (+ other search engines) to crawl your site more easily so that your sites will have higher chance to be searched thus boost the number of visitors.

However, it doesn't mean that client side rendered pages are not at all crawled by Bots.

And faster first paint (moment when users can see some html/css) doesn't always increase UX.

Why? Because users have to wait js bundles to be loaded for some interactions like cliking a button or opening a tab.

So even if your html comes really quick but js bundles takes 10 or more seconds to be loaded, it will definitely harm UX.

Then what are the alternatives?

-   Client Side Rendering with code-splitting/bundle optimization: code-splitting will help you reduce your main bundle size so that it loads faster.
    And some bundle optimization techniques like gzip compression, splitting vendor chunks, etc will increase performace too.

-   Facebook/Instagram style loading animation: some meaningful css animation will help your users happy to sit and wait for your content to be loaded.

## Babel & Webpack for SSR

-   Why we bother with 'fancy frontend tools'?

    A: That's because of subtle mismatch between Node/React module system.
    Node.js uses `module.exports` also known as `common.js`.
    In contrary to Node.js, React.js uses module system called `ESM` or `Ecmascript Module`.
    So, in order to run frontend codes in server side, you have to convert your
    code into something that Node.js can undertand.

## Hello, SSR

check /packages/hello-ssr

## Styling SSR app

check [styled-components#Advanced](https://www.styled-components.com/docs/advanced#server-side-rendering)

useful tools:

-   babel-plugin-styled-components: makes classnames more readable so that make it easy to debug styles

If you use scss/css-modules, check `sassy-ssr` package.

## Integrating Router/Redux/ReduxSaga

check /packages/router-redux-ssr

## SSR frameworks

-   Next.js: more like opinionated SSR framework
-   Razzle: more like CRA with SSR + HMR (Hot Module Reloading)
-   Gatsby
-   React-static

## Recommended VScode settings

extensions:

    -   JS Paramter Annotation
    -   Auto Rename Tag
    -   Prettier
    -   Theme: Ayu
    -   vecode-styled-components
    -   ESLint

## References

### SSR

-   [Server-side rendering your React app in three simple steps](https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e)
-   [Server-side Rendering - Totally Tooling Tips](https://www.youtube.com/watch?time_continue=16&v=RAhYnK0v3rk)
-   [Is SSR with React worth it?](http://blog.jakoblind.no/is-ssr-worth-it/)

### Code Splitting

-   [Webpack (v4) Code Splitting using SplitChunksPlugin](https://itnext.io/react-router-and-webpack-v4-code-splitting-using-splitchunksplugin-f0a48f110312)
-   [The 100% correct way to split your chunks with Webpack](https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758)

## Issues

-   React Loadable or other code-splitting libraries doesn't work well on server side with webpack 4

```

```
