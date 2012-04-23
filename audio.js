(function() {

  window.audio = {};

  //window.audio.pills = new Audia("lib/pills.ogg");
  //
  window.audio.test = new Audia("ludum8bit.ogg");

  window.audio.music = new Audia({
    src: "ludum8bit.ogg",
    loop: true,
    volume: 1.0
  });

  window.playAudio = function(name, fallback) {
    return name.play();
  };

}).call(this);
