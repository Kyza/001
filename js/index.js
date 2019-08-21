$("#article-wrapper").css({
  "transition-duration": "0s",
  opacity: 0,
  "pointer-events": "none"
});

fadeOut($("#fade-in"));
var articleShown = false;
$("#article-button > img").click(() => {
  console.log(articleShown);
  if (articleShown) {
    fadeOut($("#article-wrapper"));
  } else {
    fadeIn($("#article-wrapper"));
  }
  articleShown = !articleShown;
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
          addLine("There is a low-pitch humming noise coming from the incubator.");
        },
        "time": 3000
      }, {
        "callback": () => {
          addLine("It could be a long time before anything interesting happens.");
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
          addLine(`<span style="font-size: 1.7em;">Ending 5.1: Neutralized</span>`);

          update("object-class", "<strike>Safe</strike> Neutralized");

          update("special-containment-procedures",
            "SCP-001 is to be contained inside of an insulated high-security vault in Site-██. The vault is equipped with a thermometer to measure the temperature. Any spikes in temperature must be reported to the lead researcher of SCP-001 immediately."
          );

          update("description",
            "SCP-001 is a pile of ash previously taking the form of a pure black egg which measured 0.8x0.8x1.1 meters standing up. SCP-001 was reduced to ash on ██/██/2019 when the temperatures inside of its incubator suddenly reached extreme levels, causing SCP-001 to disintegrate."
          );
        },
        "time": 3000
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
          addLine("Several months later, D-15 reports unusually high levels of heat inside of SCP-001s incubator.");
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
  fadeIn(lineEl);
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
  fadeIn(ansButton);
  ansButton.on("click", () => {
    $(".plaything-answer").off();
    $(".plaything-answer:not([picked='true'])").css({
      "transition-duration": "1s",
      opacity: 0.3,
      "pointer-events": "none"
    });
    ansButton.css({
      "transition-duration": "0s",
      opacity: 1,
      "pointer-events": "none"
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
