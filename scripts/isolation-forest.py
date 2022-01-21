from sklearn.ensemble import IsolationForest

X = [
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
]
clf = IsolationForest(random_state=0).fit(X)
result = clf.predict([
  [200, 300],
  [0, 0.1],
  [0.2, 0.01],
  [0.1, 0.2],
])
print(result)