# Streamlabs Frontend Take Home Assignment
## NOTE:
- The Frontend assignment has been written in the context of an electron application
- The canvas is responsive, with a 16:9 ratio
- There are two images that can be drag with the mouse
- Each image can be push to the top with mouse selection
- The position of each image is stored in a database in the client computer. The locations are restored on the app at next startup
- During image drag, the image border changes to color green, 2px width
- The images are not allowed to leave the parent canvas
- If the window is resized, the images are reposition so that they stay inside the canvas. The final locations are restored on the app next startup

# Streamlabs Backend Take Home Assignment

- Download OBS
### For Mac:
- git clone --recursive https://github.com/obsproject/obs-studio.git
- cd obs-studio
- ./CI/full-build-macos.sh -b
- cd build
### To create shared libs
- cd UI
- modify CMakeLists.txt. Change add_executable for add_library with the SHARED option

## NOTE:

- The OBS executable has been configured with a Twitch key for video streaming
- The OBS app starts when the frontend comes up. It is configured to stream to Twitch
- The executable is called from main.js in assesment-streamlab-electron
- alternatively, a native module has been built, from where OBS can be called
- cmake-js is the tool of choice to make the electron native module


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/marcelocanga/assesment-streamlab-electron.git
# Go into the repository
cd assesment-streamlab-electron
# Install dependencies
npm install
# Run the app
npm start
```

## Selected Resources for this assignment 

- https://nodejs.org/api/addons.html - Nodejs addons
- https://www.electronjs.org - Electron js
- https://github.com/obsproject/obs-studio - OBS-studio github repository
- https://github.com/stream-labs/streamlabs-obs - Streamlabs OBS app
- https://nodeaddons.com/automating-a-c-program-from-a-node-js-web-app - How to write a node-js addon module
- https://github.com/cmake-js/cmake-js.git - Builder of native modules for electron
- https://www.npmjs.com/package/shelljs - Unix shell commands for Node.js
- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
