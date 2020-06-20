$(() => {
  let $audio = $("audio"),
      $theme = $(".theme"),
      $title = $("#title"),
      $controls = $("#controls"),
      $options = $("#options"),
      $minutes = $("#minutes"),
      $seconds = $("#seconds"),
      $start = $("#start"),
      $pause = $("#pause"),
      $reset = $("#reset"),
      $incrSession = $("#incrSession"),
      $sessionInput = $("#sessionInput"),
      $decrSession = $("#decrSession"),
      $incrBreak = $("#incrBreak"),
      $breakInput = $("#breakInput"),
      $decrBreak = $("#decrBreak"),
      breakLength = 5 * 60,
      breakMax = 10,
      breakMin = 1,
      sessionLength = 30 * 60,
      sessionMax = 60,
      sessionMin = 5,
      sessionNum = 0,
      countdown,
      countType,
      remainingTime = sessionLength;

  init();

  function init(){
    $audio.prop("volume", 0);
    $incrSession.click(() => incrSession());
    $decrSession.click(() => decrSession());
    $incrBreak.click(() => incrBreak());
    $decrBreak.click(() => decrBreak());
    $sessionInput.on("change", e => updateSessioin(e.target.value));
    $breakInput.on("change", e => updateBreak(e.target.value));
    $start.click(() => {if (countType === "break"){ startBreak(); } else {startSession(); } });
    $pause.click(() => pause());
    $reset.click(() => reset());
    $theme.click(() => audioSelect(e));
  }
  function startSession(){
    sessionNum++;
    countType = "session";
  }  
});
