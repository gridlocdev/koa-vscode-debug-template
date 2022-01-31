# Koa VSCode Debug Template

I created this minimal template to quickly scaffold a VSCode debug-able Koa environment from scratch.

This template uses `nodemon` to restart the dev server when changes occur, and has some pre-built VSCode launch tasks to attach the built-in debugger to the `nodemon` process so that VSCode can hit breakpoints.

## Dependencies

- VSCode
- NodeJS (v8.0+) + NPM

## Instructions

1. Open Visual Studio Code
2. Navigate to the folder where you'd like to put your new project in
3. Open the Integrated Terminal
4. Run `npx degit gridlocdev/koa-vscode-debug-template <your-project-name>`
5. Run  `code -r <your-project-name>`
6. Re-open the Integrated Terminal
7. Run `npm install`
8. Open the _Run and Debug_ sidebar tab
9. Click the label _Show all automatic debug configurations_
10. Select `Node.js`
11. Select `Run Script: dev`
