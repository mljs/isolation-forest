import { IsolationForest } from '../IsolationForest';

describe('IsolationForest test', () => {
  it('should return anomaly scores in correct range', () => {
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
    let anomalyDetector = new IsolationForest({ nEstimators: 50 });
    anomalyDetector.train(X);
    let result = anomalyDetector.predict([
      [200, 300],
      [0, 0.1],
      [0.2, 0.1],
      [0.1, 0.2],
    ]);
    expect(result[0]).toBeGreaterThan(0.5);
    expect(result[1]).toBeLessThan(0.5);
    expect(result[2]).toBeLessThan(0.5);
    expect(result[3]).toBeLessThan(0.5);
  });
});
