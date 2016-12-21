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

    this.label = phina.display.Label().addChildTo(this);
    this.label.x = this.gridX.center();
    this.label.y = this.gridY.center();

    var color = ['red', 'blue', 'yellow', 'green', 'white'];
    var options = {
        backgroundColor: 'transparent',
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 3,
        radius: 64,
    };
    this.finger = [];
    for (var i = 0; i < 5; i++) {
        options.fill = color[i];
        this.finger[i] = phina.display.CircleShape(options).addChildTo(this);
        this.finger[i].visible = false;
        this.finger[i].label = phina.display.Label({text:""+(i+1), fontSize:64})
          .addChildTo(this.finger[i])
          .setPosition(0, -96);
    }
  },

  update: function() {
    var p = app.pointers;
    this.label.text = "touches: "+p.length;
    for (var i = 0; i < 5; i++) {
        if (i < p.length) {
            this.finger[i].visible = true;
            this.finger[i].setPosition(p[i].x, p[i].y);
            this.finger[i].label.text = p[i].id;
        } else {
            this.finger[i].visible = false;
        }
    }
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
