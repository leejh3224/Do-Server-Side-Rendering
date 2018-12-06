# Do Server Side Rendering

## Table of contents

    -   Getting Started
    -   What is SSR?
    -   Cons & Pros of SSR
    -   Babel & Webpack for SSR
    -   Hello, SSR
    -   Styling SSR app
    -   Integrating Redux/ReduxSaga
    -   Use out-of-the-box SSR framework, NEXT.js
    -   Recommended VScode settings

## Getting Started

If all you want is working SSR code sample, you don't have to read all this.

```
yarn build && yarn start or
npm run build && npm start
```

Above command will create directory `ssr` under root directory.

And you're good to go.

Go take a look at localhost:3000.

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

## Babel & Webpack for SSR

I'm not gonna explain what Babel or Webpack is in detail.

And will focus on 'how to use them'.

-   Why we bother with 'fancy frontend tools'?

    A: That's because of subtle mismatch between Node/React module system.
    Node.js uses `module.exports` also known as `common.js`.
    In contrary to Node.js, React.js uses module system called `ESM` or `Ecmascript Module`.
    So, in order to run frontend codes in server side, you have to convert your
    code into something that Node.js can undertand.

Babel:

It turns your frontend code into the code that Node.js can understand so that run it.

There are so many js jargons, but I'll try hard to explain those in plain english.

First off you should add `.babelrc` file in your root directory.

As the name gives you some sense, it is way Babel parses and compiles your code.

There are some plugins/presets we should install.

We'll use `@babel/preset-env` and `@babel/preset-react`.

Make a file named `.babelrc` and copy & paste below code into it.

```json
{
    "presets": ["@babel/env", "@babel/react"]
}
```

Webpack:

Webpack is a js module bundler.

What is module bundler? You can think of it as tool that makes dependency tree for you.

So if x.js requires y.js file or vise versa, webpack will handle this for you.

It is also required to load static assets like html, css, images into your js projects.

For our SSR example project, configuration file will not be complex and hundres lines of code.

```js
const path = require('path')

module.exports = {
    // mode is added since webpack version 4.
    // it gives you out of the box default configurations.
    mode: 'development',
    // entry literally means where to start bundle your files
    entry: {
        // we need two entries. One for SSR and one for client side rendering
        client: './src/client.jsx',
        bundle: './src/bundle.jsx',
    },
    // Directory for compiled js files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        // babel loader uses .babelrc
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
}
```

Ok, it's done for Babel and Webpack, hoorayyyy!

## Hello, SSR

done

## Styling SSR app

Use `styled-components` and `RenderToNodeStream` api.

Read documents thoroughly.

## Integrating Redux/ReduxSaga

will do it soon

## Use out-of-the-box SSR framework, Next.js

Sometimes, it is better to start with frameworks like Next.js which offers pre configured SSR settings for you.

However, you should consider that Next.js is pretty opinionated framework and there are less documents/resources for

configuring tools like redux.

## Recommended VScode settings

extensions:

    -   JS Paramter Annotation
    -   Auto Rename Tag
    -   Prettier
    -   Theme: Ayu
