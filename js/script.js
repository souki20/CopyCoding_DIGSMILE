'use strict';

{
  // 「$(function(){ ... })」はjavascriptを予約するという意味
  // htmlが読み込まれる前に実行されないように予約の状態にしておく必要がある
  // 最初に「$()」がつくのはjQueryの書き方だからエラーが出る


  // ＃＃＃＃＃
  // 今回はシンプルな JavaScriptの書き方で書く
  // ＃＃＃＃＃


  // classを取得
  // ＊classを取得した場合、返ってくる値は配列なので使う場合は、何番目なのかを指定する必要がある。[0]など
  var sl = document.getElementsByClassName('site-logo');
  var hn = document.getElementsByClassName('header-nav');

  // 赤ちゃんの背景と黒色の背景の高さを取得
  var bgMainHeight = document.getElementById('bgMain').clientHeight;
  var bgBlackHeight = document.getElementById('bgBlack').clientHeight;


  // navという関数を定義
  // 今回は、もともと白色のものをスクロールしたら黒色に変化させる
  // なので黒色になるclassの要素を付けたり消したりしている
  function nav() {
    document.addEventListener('scroll', () => {
      
      //window.scrollY はjavascriptの書き方
      // windowの垂直方向にスクロールした値を返す 
      if (window.scrollY < bgMainHeight -50 ) {

        // classListはjavascriptの書き方
        // 色を変化させるものがヘッダー内にある場合は、黒色になるクラスを外す
        sl[0].classList.remove('logo-black');
        sl[1].classList.remove('logo-black');
        sl[2].classList.remove('logo-black');
      }else {
        sl[0].classList.add('logo-black');
        sl[1].classList.add('logo-black');
        sl[2].classList.add('logo-black');
      }

      if (window.scrollY < bgBlackHeight -50 ) {
        hn[0].classList.remove('nav-black');
        hn[1].classList.remove('nav-black');
      }else {
        hn[0].classList.add('nav-black');
        hn[1].classList.add('nav-black');
      }
    })
  }

// ＃＃＃＃＃
// ハンバーガーメニューを開いた時の設定

  var hmbMenuId = document.getElementById('musk');
  var btn = document.getElementById('btn');

  var hmbMenuClass = document.getElementsByClassName('hamburger-menu')[0];
  var musk = document.getElementsByClassName('musk')[0];
  var hmbmusk = document.getElementsByClassName('hmb-musk')[0];

  var bars = document.getElementById('bars');
  var show = document.getElementById('show');

  // ハンバーガーメニューを開いた時にスクロールできないようにする

  // 「preventDefault()」はブラウザ側で用意されているイベントをブロックするという性質があります。
// 今回の処理では、スクロール処理（touchmoveとmousewheel）をブロックします。
function scroll_control(event) {
  event.preventDefault();
}

// 「touchmove」と「mousewheel」のイベントを先ほどのscroll_control関数を使ってブロックしています。
  // スクロールできないように
  function noscroll() {
    document.addEventListener("mousewheel", scroll_control,{passive:false});
    document.addEventListener("touchmove", scroll_control,{passive:false});
  }
  // スクロールできないイベントを削除
  function returnscroll() {
    document.removeEventListener("mousewheel", scroll_control,{passive:false});
    document.removeEventListener("touchmove", scroll_control,{passive:false});
  }

// MENUのボタンのバーとクロスをボタンが押された時で区別する関数
// 関数が呼び出されて時にhmb-musk,openそれぞれのクラスをつけたり外したりし
// ハンバーガーメニューが開かれた時とそうでない時に場合分した。
  function navmenu() {
    musk.classList.toggle('hmb-musk')
    hmbMenuClass.classList.toggle('open');
    if(hmbMenuId.className == "musk hmb-musk") {
      noscroll();
      bars.classList.add('hide');
      cross.classList.add('show');
    } else{
      returnscroll();
      bars.classList.remove('hide');
      cross.classList.remove('show');
    }
  }

// ボタンがクリックされた時の処理
  function hamburger() {
    btn.addEventListener('click', () => {
      if ( window.scrollY < bgBlackHeight -50 ) {
        navmenu();
      } else {
        navmenu();
        // メニューボタンを押した時のMENUの色を変更
        if(hmbMenuId.className == "musk hmb-musk") {
          hn[0].classList.remove('nav-black');
          hn[1].classList.remove('nav-black');  
        } else {
          hn[0].classList.add('nav-black');
          hn[1].classList.add('nav-black');  
        }
      }
    })
  }


  // 関数を呼び出している
  nav();
  hamburger();
}