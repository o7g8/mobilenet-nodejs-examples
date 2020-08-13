# Minimal Node.js MobileNet examples

Prerequisites:

- install `node-gyp` (for Mac OS X ensure you have XCode CLI tools <https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md#installing-node-gyp-using-the-xcode-command-line-tools-via-manual-download>).

- `npm install`

`test-tf.js`: script, which downloads the recent MobileNet model and analyzes a given image:

`node test-tf.js panda.jpg`