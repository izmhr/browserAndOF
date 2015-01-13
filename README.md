## これは

詳細は下記エントリーで紹介しております

[html から node.js を介して oF の画像処理をコントロールし、ブラウザ上で閲覧する](http://izmiz.hateblo.jp/entry/2015/01/13/224700)

## セットアップ

### 環境

- Windows7/8.1
- Node.js
- Chrome/Firefox

oF でウェブカメラに対して画像処理をするプロジェクト [izmhr/ycaptureInOF](https://github.com/izmhr/ycaptureInOF) と同時に使います。

### 手順

oF でウェブカメラに対して画像処理をするプロジェクト [izmhr/ycaptureInOF](https://github.com/izmhr/ycaptureInOF) を、そちらのREADMEに従ってビルド・起動して下さい 

1. このプロジェクトをclone
2. `npm install` express, node-osc, socket.io を導入します
3. `index.js` 12行目付近、 osc で使うポートを、oF 側のプロジェクトとあわせてください
4. `node index.js` で起動
5. ブラウザで localhost:3000 にアクセス
