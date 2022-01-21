const IF = require('../lib/index.js');

let X = [
  [200, 50],
  [0.3, 0.1],
  [0.5, 0.3],
  [0.2, 0.1],
  [0.1, 0.1],
  [0.2, 0.05],
  [0.3, 0.3],
  [0.4, 0.2],
  [0.3, 0.4],
  [0.1, 0.1],
  [0.05, 0.1],
];
let anomalyDetector = new IF.IsolationForest();
anomalyDetector.train(X);
let result = anomalyDetector.predict([
  [200, 300],
  [0, 0.1],
  [0.2, 0.1],
  [0.1, 0.2],
]);
console.log(result);
