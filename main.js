/*

　マルチタッチサンプル

*/

/*
 * メインシーン
 */
phina.define('MainScene', {
  superClass: 'phina.display.DisplayScene',

  // 初期化
  init: function() {
    // super init
    this.superInit();

    // 背景色
    this.backgroundColor = '#FFF';

    this.label = phina.display.Label('Hello, runstant!').addChildTo(this);
    this.label.x = this.gridX.center();
    this.label.y = this.gridY.center();
    this.label.update = function() {
    }
  },

  update: function() {
    var p = app.pointers;
    this.label.text = "pointers:"+p.length;
  },

  onkeydown: function(e) {
    // space if push space
    if (e.keyCode === 32) {
      this.app.stop();
    }
  },
});

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  app = phina.game.GameApp({
    startLabel: 'main',
  });
  app.enableStats();

  // 実行
  app.run();
});
