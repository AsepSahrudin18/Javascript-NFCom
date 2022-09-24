$(document).ready(function () {
  // unggas
  $(".klik_ayam").click(function () {
    $(".myToggle").toggle();
    const audio = new Audio("./audio/ayam.mp3");
    audio.play();
  });

  $(".klik_bebek").click(function () {
    $("#bebek").toggle();
    const audio = new Audio("./audio/bebek.mp3");
    audio.play();
  });

  $(".klik_burung").click(function () {
    $("#burung").toggle();
    const audio = new Audio("./audio/burung.mp3");
    audio.play();
  });

  $(".klik_angsa").click(function () {
    $("#angsa").toggle();
    const audio = new Audio("./audio/angsa.mp3");
    audio.play();
  });

  // hewan ternak
  $(".klik_kambing").click(function () {
    $("#kambing").toggle();
    const audio = new Audio("./audio/kambing.mp3");
    audio.play();
  });

  $(".klik_domba").click(function () {
    $("#domba").toggle();
    const audio = new Audio("./audio/domba.mp3");
    audio.play();
  });

  $(".klik_sapi").click(function () {
    $("#sapi").toggle();
    const audio = new Audio("./audio/sapi.mp3");
    audio.play();
  });

  $(".klik_kerbau").click(function () {
    $("#kerbau").toggle();
    const audio = new Audio("./audio/kerbau.mp3");
    audio.play();
  });

  // binatang buas
  $(".klik_serigala").click(function () {
    $("#serigala").toggle();
    const audio = new Audio("./audio/serigala.mp3");
    audio.play();
  });

  $(".klik_macan").click(function () {
    $("#macan").toggle();
    const audio = new Audio("./audio/macan.mp3");
    audio.play();
  });

  $(".klik_kera").click(function () {
    $("#kera").toggle();
    const audio = new Audio("./audio/kera.mp3");
    audio.play();
  });

  $(".klik_beruang").click(function () {
    $("#beruang").toggle();
    const audio = new Audio("./audio/beruang.mp3");
    audio.play();
  });
});
