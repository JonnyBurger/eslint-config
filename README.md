# Jonny's ESLint config

I have a lot of projects that I am working on.  
I am thinking of how I can speed up my workflow and create many apps fast.

So I decided to make a ESLint configuration that I use for all of my projects.

Every commit that is tagged with v1.x.x. automatically gets published to npm!

## Installing

> This config is thought for my personal projects, so I am modifying the config over time to suit all projects that are mine.

```
npm install --save-dev @jonny/eslint-config eslint-plugin-import eslint-plugin-react babel-eslint eslint-plugin-react-native eslint-plugin-promise @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```js
// .eslintrc
{
    "extends": "@jonny"
}
```
