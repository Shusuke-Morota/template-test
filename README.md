# static-site-template

静的サイト制作のための開発環境です。

## 特徴

- assets のビルドに Vite を使用
- 静的サイトジェネレーターに Eleventy を使用
- HTML テンプレートエンジンに Nunjucks を使用
- Node.js の version 管理に Volta を使用
- husky と lint-staged を使用して pre-commit を実行

## 注意点

- SourceTree を使用して commit, push する場合、husky の pre-commit が通りません。
  `~/`に`.huskyrc`を作成し、npx の場所に PATH を通して下さい。(Volta を使用している場合、下記記述でいけるはず。)

```sh
$ touch ~/.huskyrc
$ vi ~/.huskyrc
```

.huskyrc に下記を記述

```
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```

## 使い方

localhost の起動とファイルの変更監視

```sh
$ yarn dev
```

本番環境用にファイルを build

```sh
$ yarn build
```

本番環境用に build したファイルをプレビューできる静的サーバーを起動

事前に`yarn build`を実行しておく必要があります

```sh
$ yarn preview
```
