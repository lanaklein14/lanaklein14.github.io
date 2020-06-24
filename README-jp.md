# ffxiv-the-hunt.net -> Faloop! 連携用ユーザースクリプト

## 機能

### ffxiv-the-hunt.net 用ユーザースクリプト

* CSSの上書き

  Faloop!から報告されたレポートを青色で表示します。またuidの文字列を"Faloop!"に置換します。

  <img src="images/UJSC_huntnet1.png" width="300px">

* "Open Faloop!"リンクの追加

  Faloop!から未報告のSモブレポート(フォーギヴンリベリオンを除く)に対して、報告連携用のリンクを追加します。

  <img src="images/UJSC_huntnet2.png" width="300px">

  このリンクをクリックすると、新規のウィンドウに、次のURL形式でFaloop!を開きます。
  
  https://faloop.app/[worldname]?mobid=[mobid]&time=[timeofdeath]
  
  パラメータ | 説明
  ------------ | -------------
  worldname | 表示するワールド名(小文字)
  mobid | 対象のモブID
  timeofdeath | 対象の討伐時刻(UNIXTIME)。hunt.net側の報告の中央値

### Faloop! 用ユーザースクリプト

* 自動的に「レポート」タブを開き、討伐時刻のデフォルト値をセット

  Faloop!がmobidとtimeのURLクエリパラメータを伴って開かれた場合、自動的に「レポート」タブを開き、討伐時刻のデフォルト値をセットします。
  ユーザーは引き続き入力の確認と報告の実行を手動で実施する必要がありますが、手動による入力値のミスを軽減できます。

  <img src="images/UJSC_faloop.png" width="500px">

## サンプルムービー

https://lanaklein14.github.io/lanaklein14.github.io/hunt-faloop-integration.mp4

## インストール手順 ("User JavaScript and CSS" extensionを使用する場合)

1. 前提拡張機能のインストール
   1. [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) 拡張機能をChromeにインストールする。

1. 連携用custom javascriptsのインポート
   1. "User JavaScript and CSS" 拡張機能の歯車アイコンをクリックしてトップページを表示します。
   1. "Libraries" タブで、次の2つのjavascriptファイルを追加します。
   
      Name | URL
      ------------ | -------------
      side_huntnet.js | https://lanaklein14.github.io/lanaklein14.github.io/side_huntnet.js
      side_faloop.js | https://lanaklein14.github.io/lanaklein14.github.io/side_faloop.js
      
      <img src="images/UJSC_libraries.png" width="500px">

   1. ページを閉じます。

1. ffxiv-the-hunt.net用のルール作成
   1. https://ffxiv-the-hunt.net/ を開きます。
   1. "User JavaScript and CSS" 拡張機能の "+Add new"ボタンをクリックします。
   1. JSペインに"//"と入力してセーブできる状態にします。CSSペインは空で構いません。
   1. Saveボタンの隣にあるボタンをクリックして、"side_huntnet.js"にチェックを付けます。

      <img src="images/UJSC_rule_huntnet.png" width="500px">

   1. Saveボタンをクリックします。
   1. ページを閉じます。
   
1. Faloop!用のルール作成
   1. https://faloop.app/ を開きます。
   1. "User JavaScript and CSS" 拡張機能の "+Add new"ボタンをクリックします。
   1. JSペインに"//"と入力してセーブできる状態にします。CSSペインは空で構いません。
   1. Saveボタンの隣にあるボタンをクリックして、"side_faloop.js"にチェックを付けます。

      <img src="images/UJSC_rule_faloop.png" width="500px">

   1. Saveボタンをクリックします。
   1. ページを閉じます。
