$(function(){
    // バナー用配列
    var bannerArr = ["red", "yellow", "green", "blue", "brown"];

    // 0～1未満の数を生成：値域0～0.9999....
    var num = Math.random();

    // numに5を掛ける：値域0～4.9999....
    num = num * 5;

    // 小数点以下を切り捨てる：値域0～4
    num = Math.floor(num);

    // バナーを表示
    $("aside img").attr("src", "img/" + bannerArr[num] + ".jpg");
});