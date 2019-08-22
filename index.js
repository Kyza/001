var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}
if (isMobile) {
	$("#phone-rotate").css({
		"transition-duration": "1s",
		opacity: 1,
		animation: "rotate 2s infinite"
	});
	setTimeout(() => {
		$("#phone-rotate").css({
			"transition-duration": "2s",
			opacity: 0,
			animation: "rotate 2s infinite"
		});
	}, 2000);
}

function openFullscreen() {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.mozRequestFullScreen) {
    /* Firefox */
    document.body.mozRequestFullScreen();
  } else if (document.body.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    document.body.webkitRequestFullscreen();
  } else if (document.body.msRequestFullscreen) {
    /* IE/Edge */
    document.body.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

function isFullscreen() {
  var element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
  if (element === null) return false;
  return true;
}
// Try to go fullscreen right away.
try {
  openFullscreen();
} catch (e) {}
setTimeout(() => {
  if (isFullscreen()) {
    $("#fullscreen-button > img").attr("src", "https://image.flaticon.com/icons/svg/482/482607.svg"); // Minimize
  } else {
    $("#fullscreen-button > img").attr("src", "https://image.flaticon.com/icons/svg/130/130910.svg"); // Maximize
  }
}, 100);

$("#article-wrapper").css({
  "transition-duration": "0s",
  opacity: 0,
  "pointer-events": "none"
});

fadeOut($("#fade-in"));
var articleShown = false;
$("#article-button > img").click(() => {
  if (articleShown) {
    fadeOut($("#article-wrapper"));
  } else {
    fadeIn($("#article-wrapper"));
  }
  articleShown = !articleShown;
});

$("#fullscreen-button").click(() => {
  if (isFullscreen()) {
    closeFullscreen();
    $("#fullscreen-button > img").attr("src", "https://image.flaticon.com/icons/svg/130/130910.svg");
  } else {
    openFullscreen();
    $("#fullscreen-button > img").attr("src", "https://image.flaticon.com/icons/svg/482/482607.svg");
  }
});

function fadeIn(element) {
  $(element).css({
    "transition-duration": "1s",
    opacity: 1,
    "pointer-events": "auto"
  });
}

function fadeOut(element) {
  $(element).css({
    "transition-duration": "1s",
    opacity: 0,
    "pointer-events": "none"
  });
}

var paths = {
  "beginning": {
    "script": () => {
      waitChain([{
        "callback": () => {
          addLine("The egg, a jet black ellipsoid radiating warmth, sits in an incubator inside of its containment chamber.");
        },
        "time": 0
      }, {
        "callback": () => {
          addLine("There is a low-pitch humming noise coming from the machine.");
        },
        "time": 3000
      }, {
        "callback": () => {
          addLine("It could be a long time before anything interesting happens.");
        },
        "time": 3000
      }, {
        "callback": () => {
          addLine("It is your choice.");
        },
        "time": 3000
      }, {
        "callback": () => {
          addAns("ending5.1", "Do nothing. Wait for the egg to hatch on its own.");
          addAns("d-class-watch", "Send a D-Class personnel to watch the egg.");
          addAns("self-hatch1", "Watch the egg yourself.");
        },
        "time": 3000
      }]);
    }
  },
  "ending5.1": {
    "script": () => {
      waitChain([{
        "callback": () => {
          addLine("You wait months apon months for the egg to hatch.");
        },
        "time": 0
      }, {
        "callback": () => {
          addLine("It never does.");
        },
        "time": 2000
      }, {
        "callback": () => {
          addLine("You return one morning to a pile of ash, the egg had overheated and disintegrated.");
        },
        "time": 2000
      }, {
        "callback": () => {
          addLine(`<span style="font-size: 0.6em; color: red;">! Article Updated !</span>`);

          update("object-class", "<strike>Safe</strike> Neutralized");

          update("special-containment-procedures",
            "SCP-001 is to be contained inside of a cooled high-security vault in Site-██. The vault is equipped with a thermometer to measure the temperature. Any spikes in temperature must be reported to the lead researcher of SCP-001 immediately."
          );

          update("description",
            "SCP-001 is a pile of ash previously taking the form of a pure black egg which measured 0.8x0.8x1.1 meters standing up. SCP-001 was reduced to ash on ██/██/19██ when the temperatures inside of its incubator suddenly reached extreme levels, causing SCP-001 to disintegrate and the incubator to melt."
          );
        },
        "time": 3000
      }, {
        "callback": () => {
          addLine(`<span style="font-size: 0.6em; color: red;">&lt;Connection Severed&gt;</span>`);
        },
        "time": 1000
      }]);
    }
  },
  "d-class-watch": {
    "script": () => {
      waitChain([{
        "callback": () => {
          addLine("You decide to send a D-Class personnel into the containment chamber to watch the egg.");
        },
        "time": 0
      }, {
        "callback": () => {
          addLine("Several months later, D-15 reports unusually high levels of heat inside of SCP-001's incubator.");
        },
        "time": 3000
      }, {
        "callback": () => {
          addAns("d-class-hatch1", "Ignore the report, it's probably fine.");
          addAns("self-hatch2", "Go check on the egg up close.");
          addAns("d-class-hatch2", "Go check on the egg from a distance.");
        },
        "time": 3000
      }]);
    }
  },
  "self-hatch1": {
    "script": () => {
      addLine("You decide to watch the egg yourself, you don't trust those D-Class to alert you in time.");
      addAns("", "stuff");
      addAns("", "stuff");
      addAns("", "stuff");
      addAns("", "stuff");
    }
  },
  "self-hatch2": {
    "script": () => {
      addLine("You decide to check on the egg up close.");
      addAns("", "stuff");
      addAns("", "stuff");
      addAns("", "stuff");
      addAns("", "stuff");
    }
  }
};

function addLine(line) {
  let lineEl = $(document.createElement("div"));
  lineEl.attr("class", "plaything-line");
  lineEl.html(line);
  lineEl.css({
    opacity: 0
  });
  $("#plaything-wrapper").append(lineEl);
  setTimeout(() => {
    fadeIn(lineEl);
  }, 100);
}

function addAns(choice, ans) {
  let ansButton = $(document.createElement("div"));
  ansButton.attr("class", "plaything-answer");
  ansButton.attr("choice", choice);
  ansButton.html(ans);
  ansButton.css({
    opacity: 0
  });
  $("#plaything-wrapper").append(ansButton);
  setTimeout(() => {
    fadeIn(ansButton);
  }, 100);
  ansButton.on("click", () => {
    $(".plaything-answer").off();
    $(".plaything-answer").attr("picked", "false");
    $(".plaything-answer:not([picked='true'])").css({
      "transition-duration": "1s",
      opacity: 0.3
    });
    ansButton.css({
      "transition-duration": "0s",
      opacity: 1
    });
    ansButton.attr("picked", "true");
    start(ansButton.attr("choice"));
  });
}

function waitChain(callbacks) {
  let waitTime = 0;
  for (let i = 0; i < callbacks.length; i++) {
    waitTime += callbacks[i].time;
    setTimeout(callbacks[i].callback, waitTime);
  }
}

function update(thing, content) {
  $("#" + thing).html(content);
}

function start(place) {
  paths[place].script();
}
start("beginning");
