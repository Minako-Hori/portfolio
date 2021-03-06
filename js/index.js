window.onload = function () {
    scroll_effect();

    $(window).scroll(function () {
        scroll_effect();
    });

    function scroll_effect() {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('effect-scroll');
            }
        });
    }
};

$(function () {
    // スクロールのオフセット値
    var offsetY = -10;
    // スクロールにかかる時間
    var time = 500;

    // ページ内リンクのみを取得
    $('a[href^=#]').click(function () {
        // 移動先となる要素を取得
        var target = $(this.hash);
        if (!target.length) return;
        // 移動先となる値
        var targetY = target.offset().top + offsetY;
        // スクロールアニメーション
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        // ハッシュ書き換えとく
        window.history.pushState(null, null, this.hash);
        // デフォルトの処理はキャンセル
        return false;
    });
});

// $(document).ready(function () {
    // $('.background').snowfall({
        // image: "image/sakura_hanabira3.png",
        // maxSize: 30,
        // flakeIndex: "888",
        // maxSpeed: 3
    // });
// });
