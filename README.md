## Custom Workbox Service Worker for React Apps
A templated custome service worker for your react apps created by "create-react-app"

### Setting up

 - Create a new empty js file, **sw.js** in the **public** folder.
 - Copy the code snippet [in this folder](https://github.com/mayeedwin/custom-service-worker-react-app/blob/master/src/sw.js) to it.
 - Replace the code snippet in **serviceWorker.js** with the code snippet in the new [serviceWorker.js here](https://github.com/mayeedwin/custom-service-worker-react-app/blob/master/src/config/serviceWorker.js)
 
 ### Build your React PWA
 
 On running `npm build`, **sw.js** will be copied into the build folder with the 
 new custom [Workbox] config for cache strategies.
 
 Use this [this VS Code Extension](https://marketplace.visualstudio.com/items?itemName=mayeedwin.vscode-pwa) I have created to easily get the Workbox Code Snippets
 for use in your Service Workers.
 
 Enjoy!
