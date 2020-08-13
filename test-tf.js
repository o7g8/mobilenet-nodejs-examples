// The script will download the most recent MobileNet model. 
// TEST:
// wget http://bit.ly/2JYSal9 -O panda.jpg
// node test-tf.js panda.jpg

const tfnode = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');

const classify = async (imagePath) => {
  const image = fs.readFileSync(imagePath);
  const decodedImage = tfnode.node.decodeImage(image, 3);

  const model = await mobilenet.load();
  const predictions = await model.classify(decodedImage);
  console.log('predictions:', predictions);
}

if (process.argv.length !== 3) 
    throw new Error('Usage: node test-tf.js <image-file>')

classify(process.argv[2])