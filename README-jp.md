# ffxiv-the-hunt.net -> Faloop! 連携用ユーザースクリプト

## はじめに

[重要]2020/8/30に実施されたFaloop 3.0 Updateに合わせて、当スクリプトもアップデートする必要があります。

アップデート手順について、プラグインによっては再読み込み機能などがあるようですが、一度削除してから追加しなおすのが一番手っ取り早いと思います。

また、現在の仕様ではFaloopの自画面で対象のワールドが非表示にしていると、確認ダイアログが表示されません。(修正案検討中)
ホームワールドだけを対象に運用している場合は問題になりませんが、他ワールドのHuntnet報告を適用したい場合などはFaloopの自画面でそのワールドも表示に切り替えるようご注意ください。

## 機能

### ffxiv-the-hunt.net 側の動作

* CSSの上書き

  Faloop!から報告されたレポートを青色で表示します。またuidの文字列を"Faloop!"に置換します。

  <img src="images/UJSC_huntnet1.png" width="300px">

* "Open Faloop!"リンクの追加

  Faloop!から未報告のSモブレポート(フォーギヴンリベリオンを除く)に対して、報告連携用のリンクを追加します。

  <img src="images/UJSC_huntnet2.png" width="300px">

  このリンクをクリックすると、新規のウィンドウに、次のURL形式でFaloop!を開きます。
  
  https://faloop.app/[datacentername]?worldid=[worldid]&mobid=[mobid](&instanceid=[instanceid])&time=[timeofdeath]
  
  パラメータ | 説明
  ------------ | -------------
  datacentername | 表示するデータセンター名(小文字)
  worldid | 対象のワールドID
  mobid | 対象のモブID
  instanceid | 対象のエリアインスタンス(1～3)。対象エリアが複数インスタンスに対応している時だけ指定
  timeofdeath | 対象の討伐時刻(UNIXTIME)。hunt.net側の報告の中央値

### Faloop! 側の動作

* 自動的に「レポート」タブを開き、討伐時刻のデフォルト値をセット、確認ダイアログまで表示

  Faloop!がmobidとtimeのURLクエリパラメータを伴って開かれた場合、自動的に「レポート」タブを開き、討伐時刻のデフォルト値をセット、確認ダイアログまで表示します。
  ユーザーは引き続き手動で最終確定を実施する必要がありますが、手動による入力値のミスを軽減できます。

  <img src="images/UJSC_faloop.png" width="500px">

## サンプルムービー

https://lanaklein14.github.io/lanaklein14.github.io/hunt-faloop-integration.mp4 (deprecated)

## 動作確認環境

  OS | ブラウザ | 前提拡張機能 | コメント
  ------------ | ------------- | ------------- | -------------
  PC | Chrome | Tampermonkey | お勧め
  PC | Firefox | Greasemonkey または Tampermonkey | お勧め
  Android | Firefox | Greasemonkey または Tampermonkey | お勧め
  PC | Chrome | User Javascript and CSS | 
  iOS | Safari | ショートカット(ios13以降) | 

## 導入手順 (PC版Chrome + "Tampermonkey" 拡張機能を使う場合)

1. 前提拡張機能のインストール
   1. [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) 拡張機能をChromeにインストールします。

1. 連携用ユーザースクリプトのインポート
   1. Chromeで [こちら](https://github.com/lanaklein14/lanaklein14.github.io/raw/master/HuntFaloop.user.js) をクリックします。
   1. 次のような確認画面が表示されるので「インストール」をクリックします。

      <img src="images/UJSC_Tampermonkey.png" width="300px">

## 導入手順 (PC/Android版Firefox + "Greasemonkey" or "Tampermonkey" アドオンを使う場合)

1. 前提アドオンのインストール
   1. Firefoxで [Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/) または [Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)
   のアドオンページを開きインストールを実行します。両者のどちらか一方をインストールすればOKです。

1. 連携用ユーザースクリプトのインポート
   1. Firefoxで [こちら](https://github.com/lanaklein14/lanaklein14.github.io/raw/master/HuntFaloop.user.js) をクリックします。
   1. 次のような確認画面が表示されるので「インストール」をクリックします。(例はGreasemonkeyを有効にしている場合)

      <img src="images/UJSC_Greasemonkey.png" width="300px">

## 導入手順 (PC版Chrome + "User JavaScript and CSS" 拡張機能を使う場合)

1. 前提拡張機能のインストール
   1. [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) 拡張機能をChromeにインストールします。

1. 連携用ユーザースクリプトのインポート
   1. "User JavaScript and CSS" 拡張機能の歯車アイコンをクリックしてトップページを表示します。
   1. "Libraries" タブで、次のjavascriptファイルを追加します。
   
      Name | URL
      ------------ | -------------
      HuntFaloop | https://lanaklein14.github.io/lanaklein14.github.io/HuntFaloop.user.js
      
      <img src="images/UJSC_libraries.png" width="500px">

   1. ページを閉じます。

1. ffxiv-the-hunt.net用のルール作成
   1. https://ffxiv-the-hunt.net/ を開きます。
   1. "User JavaScript and CSS" 拡張機能の "+Add new"ボタンをクリックします。
   1. JSペインに"//"と入力してセーブできる状態にします。CSSペインは空で構いません。
   1. Saveボタンの隣にあるボタンをクリックして、"HuntFaloop"にチェックを付けます。

      <img src="images/UJSC_rule_huntnet.png" width="500px">

   1. Saveボタンをクリックします。
   1. ページを閉じます。
   
1. Faloop!用のルール作成
   1. https://faloop.app/ を開きます。
   1. "User JavaScript and CSS" 拡張機能の "+Add new"ボタンをクリックします。
   1. JSペインに"//"と入力してセーブできる状態にします。CSSペインは空で構いません。
   1. Saveボタンの隣にあるボタンをクリックして、"HuntFaloop"にチェックを付けます。

      <img src="images/UJSC_rule_faloop.png" width="500px">

   1. Saveボタンをクリックします。
   1. ページを閉じます。

## 導入手順 (iOS版Safari + ショートカットを使う場合)

ショートカットはiOS13以降から使える標準アプリです。

また、導入にあたってはiOSデフォルトでは許可されていない「信頼されていないショートカットの許可」を(一度)有効にする必要があるので、趣旨を十分理解したうえでご利用ください。

1. ショートカットのインポート
   1. iOSのデバイスで、こちらの [HuntFaloopショートカット](https://www.icloud.com/shortcuts/da3f0bfe7584418c9c10fe5c227c226e) のリンクをクリックします。
   1. 「Get Shortcut」ボタンをクリックして、ショートカットアプリに「HuntFaloop」を取り込みます。

1. ショートカットを受け入れるように許可設定
   1. 下記サイトを参考に、設定⇒ショートカットで「信頼されていないショートカットの許可」を有効にします。
      https://usedoor.jp/howto/digital/iphone-ipad/ios-shortcut-security-kyoka/

      一度、連携の実行を失敗させてからでないと選べない可能性があるので注意してください。
      なお、一度連携を成功させた後であれば、再度許可をOFFに戻しても動作するようです。

1. 連携の実行
   1. Safariで https://ffxiv-the-hunt.net/ を開きます。
   1. 共有ボタンをクリックし、一番下に表示される「HuntFaloop」を選択します。初回はアクセス許可を聞かれるので「許可」します。
   
      面倒ですが、この操作はページをリロードするたびに毎回実行する必要があるようです。(ショートカット機能の仕様)
   1. Open Faloop! リンクから https://faloop.app/ を開きます。
   1. faloopのサイトが表示されたら、こちらでも共有ボタンをクリックし、一番下に表示される「HuntFaloop」を選択します。
   
      面倒ですが、この操作もページをリロードするたびに毎回実行する必要があります。

## 注意事項

* 利用者は、あらかじめFaloop!を「報告者」権限で開けるようにしておく必要があります。
* 討伐時刻の入力可能時刻は、Faloop!側で管理しているモブごとの最新討伐時刻から算出した制限が掛かるため、古い日時のレポートから連携した場合にデフォルト値が上手くセットされない場合があります。
* 討伐時刻の情報は「現在時刻からの差分」で保持しているため、連携で画面を開いた直後は正確な値になりますが、その後放置すると、徐々に時刻がずれていきます。連携して報告を確定する場合は、1分以内を目安に報告完了まで済ませてください。
* hunt.netやFaloop!のバージョンアップによって、スクリプトが突然動かなくなる可能性があります。
