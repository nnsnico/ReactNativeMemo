# ReactNativeMemo
ReactNative + Redux + Redus-sagaでクロスプラットフォームなメモアプリを作成したい

## Component階層
* ```AppContainer // root階層```
   - ```HomeScreen // リストとメモの追加のタブを管理する```
      * ```AddListScreen // メモの追加を行う```
      * ```ListScreen // タイトルのみをリストに表示``` 
   - ```DetailScreen // タイトルと詳細が表示されるDetailComponent```

## 開発環境
* Visual Studio Cocde 1.19.3
* node v8.8.1(npm v5.4.1)
* react native
* react navigation
* redux
* redux-saga
* immutable
* Typescript

