# Streamlabs Frontend Take Home Assignment

- The Frontend assignment has been written in the context of an electron application
- The canvas is responsive, with a 16:9 ratio
- There are two images that can be drag with the mouse
- The images are push to top on mouse selection
- The position of each image is stored in the client desktop. The last image locations are restored on app startup
- During drag, the image border changes to green, 2px width
- The images do not leave the parent canvas
- If the window is resized, the images are kept inside the canvas, and the new position is stored

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

- The OBS executable has been configured with a Twitch key for streaming
- The executable is called from main.js in assesment-streamlab-electron
- alternatively, a native module has been built, from where OBS can be called

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

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs


