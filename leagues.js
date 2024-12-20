document.addEventListener("DOMContentLoaded", () => {
  const _0x4fed02 = {
    'Premier-League': 0x7,
    'La-Liga': 0xb,
    'France-League': 0x23,
    'Bundesliga': 0x19,
    'Italy-League': 0x11,
    'Holland-League': 0x39,
    'Portugal-League': 0x49,
    'Brasil-League': 0x71,
    'Egypt-League': 0x228,
    'Morocco-League': 0x22d,
    'Saudi-League': 0x289,
    'Algeria-League': 0x230,
    'Emirates-League': 0x225,
    'Tunisia-League': 0x22a,
    'Syria-League': 0x234,
    'Palestine-League': 0x17bf,
    'Iraqi-League': 0x1aa6,
    'Qatar-League': 0x198,
    'Eefa-Europa-League': 0x23d,
    'Eefa-Champions-League': 0x23c,
    'Africa-Cup-of-Nations-League': 0xa7,
    'Caf-Champions-League': 0x270,
    'Caf-Confederation-Cup-League': 0x273,
    'Caf-Wc-Qualification-League': 0x285,
    'Caf-Super-Cup-League': 0x15cd,
    'Asian-Cup-League': 0x1834,
    'Gulf-Cup-of-Nations-League': 0x154c,
    'Afc-Wc-Qualification-League': 0x25d,
    'Afc-Champions-League-Elite': 0x26f,
    'Arab-Club-Champions-Cup-League': 0x1ab8,
    'Saudi-Super-Cup-League': 0x1814,
    'Saudi-Kings-Cup-League': 0x157d,
    'Uefa-Wc-League': 0x152d,
    'South-America-Wc-League': 0x265,
    'North-America-Wc-League': 0x263,
    'Leagues-Cup-League': 0x1c4a,
    'Argentine-League': 0x48,
    'MLS-League': 0x68,
    'Uefa-Conference-League': 0x1e05,
    'La-Copa-League': 0xd,
    'Uefa-Nations-League': 0x1b68,
    'Euro-League': 0x18ac
  };
  const _0x28276d = document.querySelector("#STING-WEB-Laegues-API");
  const _0x4cd20f = document.createElement("span");
  _0x4cd20f.classList.add("STING-WEB-Clear");
  _0x28276d.appendChild(_0x4cd20f);
  document.querySelector(".STING-WEB-Clear").innerHTML = "<style>@keyframes loadingAnimation { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } } .STING-WEB-Loading-Lazy-LS-Top, .STING-WEB-Loading-Lazy-LS-Center span, .STING-WEB-Loading-Lazy-LS-Bottom .RowRow span { position: relative; overflow: hidden; } .STING-WEB-Loading-Lazy-LS-Top::after, .STING-WEB-Loading-Lazy-LS-Center span::after, .STING-WEB-Loading-Lazy-LS-Bottom .RowRow span::after { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%); animation: loadingAnimation 1.5s infinite; }</style>\n  <div class=\"STING-WEB-Loading-Lazy-LS\">\n    <div class=\"STING-WEB-Loading-Lazy-LS-Top\" style=\"width: 92%; margin: 20px auto; max-width: 1000px; border-radius: 8px; background: #00000026; align-items: center; justify-content: center; gap: 20px; padding: 20px 10px; display: flex; height: 60px;\"></div>\n    <div class=\"STING-WEB-Loading-Lazy-LS-Center\" style=\"display: flex; justify-content: space-around; width: 97%; margin: 0 auto; margin-bottom: 20px; gap: 12px;\">\n      <span style=\"width: 100%; border: 0; border-radius: 6px; background-color: #00000026; font-size: 15px; height: 40px; color: #100d48; padding: 2px; font-weight: 600;\"></span>\n      <span style=\"width: 100%; border: 0; border-radius: 6px; background-color: #00000026; font-size: 15px; height: 40px; color: #100d48; padding: 2px; font-weight: 600;\"></span>\n      <span style=\"width: 100%; border: 0; border-radius: 6px; background-color: #00000026; font-size: 15px; height: 40px; color: #100d48; padding: 2px; font-weight: 600;\"></span>\n    </div>\n  <div class=\"STING-WEB-Loading-Lazy-LS-Bottom\" style=\"display: grid; gap: 16px;\">\n    <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px; margin: 15px 0;\"> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n      <div class=\"RowRow\" style=\"display: flex; justify-content: space-around; align-items: center; gap: 12px;\"> <span style=\"width: 8%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 100%; background: #00000026; height: 45px; width: 45px; border-radius: 50px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> <span style=\"width: 12%; background: #00000026; height: 25px; border-radius: 6px;\"></span> </div>\n  </div>\n</div>";
  document.querySelectorAll("#STING-WEB-Laegues-API > div").forEach(_0xf6ef00 => {
    const _0x5c2645 = _0xf6ef00.getAttribute("lang") === 'ar' ? 0x1b : 0x1;
    const _0x38ac87 = _0x4fed02[_0xf6ef00.className];
    if (_0x38ac87) {
      const _0x383054 = "https://api.sting-web.com/npm/v2/get-all-leagues/?leagues=" + _0x38ac87 + "&lang=" + _0x5c2645;
      fetch(_0x383054).then(_0x5b386a => {
        if (!_0x5b386a.ok) {
          throw new Error("HTTP error! Status: " + _0x5b386a.status);
        }
        return _0x5b386a.json();
      }).then(_0x4ba2c6 => {
        const _0x1d2b1e = _0x4ba2c6.standings[0x0].competitionId;
        const _0x6b20b7 = _0x4ba2c6.standings[0x0].displayName;
        const _0x17582a = {
          0x1b: {
            'Name': " ",
            'Year': " - ( 2024 / 2025 ) "
          },
          0x1: {
            'Name': " ",
            'Year': " - ( 2024 / 2025 ) "
          }
        };
        const _0x15256e = _0x17582a[_0x5c2645];
        const _0x5f1c9e = {
          0x1b: {
            'standings': "ترتيب الفرق",
            'stats': "ترتيب الهدافين",
            'matchat': "المباريات"
          },
          0x1: {
            'standings': "Standings",
            'stats': "Top Scorers",
            'matchat': "Matches"
          }
        };
        const _0x149beb = _0x5f1c9e[_0x5c2645];
        const _0x52671e = "\n          <style>#STING-WEB-Laegues-API { width: 97%; margin: 0 auto; } .STING-WEB-League-API-Top { width: 92%; margin: 20px auto; max-width: 1000px; border-radius: 8px; background: #f1f3f4; align-items: center; justify-content: center; gap: 20px; padding: 20px 10px; display: flex; } .STING-WEB-League-API-Top-Right { width: 50px; height: 50px; } .STING-WEB-League-API-Top-Right > img { width: 100%; height: 100%; object-fit: contain; } .STING-WEB-Name-League-API { text-align: center; font-size: 1.1rem; color: #100d48; } .STING-WEB-Buttons-Toggle { display: flex; justify-content: space-around; width: 97%; margin: 0 auto; margin-bottom: 20px; gap: 12px; } .STING-WEB-Buttons-Toggle > button { width: 100%; border: 0; border-radius: 6px; background-color: #f1f3f4; font-size: 15px; height: 40px; cursor: pointer; color: #100d48; padding: 2px; font-weight: 600; } .STING-WEB-Buttons-Toggle > button:hover { background: #00000034; } .OpenNow { background: #100d48 !important; color: #fff !important; } .STING-WEB-Table-LE-v2 { width: 100%; text-align: center; font-size: 14px; color: #000; } .STING-WEB-Table-LE-v2 > thead { height: 40px; } .STING-WEB-Table-LE-v2 > tbody > tr { height: 30px; } .STING-WEB-Table-LE-v2 > tbody > tr > td { border-top: 1px solid #dadce0; } .STING-WEB-Table-LE-v2 > tbody > tr > .IMGS { width: 5%; height: 30px; } .STING-WEB-Table-LE-v2 > tbody > tr > .IMGS > img { width: 100%; height: 100%; object-fit: contain; } .STING-WEB-Table-LE-v2 > tbody > tr > .Name { font-size: 14px; text-align: start; padding: 0 10px; } .STING-WEB-Standings > table > tbody > tr > td { position: relative; } .STING-WEB-Standings > table > tbody > tr > td:nth-child(1)::before { content: \"\"; width: 2px; background: transparent; border-radius: 50px; right: 0; position: absolute; top: 0; bottom: 0; margin-left: 5px; } .STING-WEB-Standings > table > tbody > tr:nth-child(1) > td:nth-child(1)::before { background: green !important; } .STING-WEB-Standings > table > tbody > tr:nth-child(2) > td:nth-child(1)::before { background: green !important; } .STING-WEB-Standings > table > tbody > tr:nth-child(3) > td:nth-child(1)::before { background: green !important; } .STING-WEB-Standings > table > tbody > tr:nth-child(4) > td:nth-child(1)::before { background: green !important; } .STING-WEB-Standings > table > tbody > tr:nth-child(5) > td:nth-child(1)::before { background: rgb(3, 169, 244) !important; } .STING-WEB-Standings > table > tbody > tr:nth-child(18) > td:nth-child(1)::before { background: #ff5200 !important; } .STING-WEB-Standings > table > tbody > tr:nth-child(19) > td:nth-child(1)::before { background: #ff5200 !important; } .STING-WEB-Standings > table > tbody > tr:nth-child(20) > td:nth-child(1)::before { background: #ff5200 !important; } .STING-WEB-Table-LE-v2 tbody, .STING-WEB-Table-LE-v2 tbody tr, .STING-WEB-Table-LE-v2 tbody td { text-align: center; } .STING-WEB-PHONE { display: none; } .STING-WEB-Table-LE-v2 > tbody > tr > td:nth-child(1) { width: 10%; } .STING-WEB-Table-LE-v2 > tbody > tr > td { width: 5%; line-height: 22px; height: 40px; } tbody tr:nth-child(2n) { background: #c5c5d32e; } @media (max-width: 720px) { .STING-WEB-PHONE { display: block; } .STING-WEB-PC { display: none; } } .Night .STING-WEB-League-API-Top, .Night .STING-WEB-Buttons-Toggle > button, .Dark .STING-WEB-League-API-Top, .Dark .STING-WEB-Buttons-Toggle > button, .dark .STING-WEB-League-API-Top, .dark .STING-WEB-Buttons-Toggle > button, [data-theme=\"dark\"] .STING-WEB-League-API-Top, [data-theme=\"dark\"] .STING-WEB-Buttons-Toggle > button, #tie-body .STING-WEB-Buttons-Toggle > button, #tie-body .STING-WEB-League-API-Top { background: #00000059; color: #fff !important; } .Night .STING-WEB-Name-League-API, .Night .STING-WEB-Standings > table > thead > tr, .Night .STING-WEB-Standings > table > tbody > tr, .Night .STING-WEB-Stats > table > tbody > tr, .Night .STING-WEB-Stats > table > thead > tr, .Night .STING-WEB-Table-LE-v2, .Dark .STING-WEB-Name-League-API, .Dark .STING-WEB-Standings > table > thead > tr, .Dark .STING-WEB-Standings > table > tbody > tr, .Dark .STING-WEB-Stats > table > tbody > tr, .Dark .STING-WEB-Stats > table > thead > tr, .Dark .STING-WEB-Table-LE-v2, .dark .STING-WEB-Name-League-API, .dark .STING-WEB-Standings > table > thead > tr, .dark .STING-WEB-Standings > table > tbody > tr, .dark .STING-WEB-Stats > table > tbody > tr, .dark .STING-WEB-Stats > table > thead > tr, .dark .STING-WEB-Table-LE-v2, [data-theme=\"dark\"] .STING-WEB-Name-League-API, [data-theme=\"dark\"] .STING-WEB-Standings > table > thead > tr, [data-theme=\"dark\"] .STING-WEB-Standings > table > tbody > tr, [data-theme=\"dark\"] .STING-WEB-Stats > table > tbody > tr, [data-theme=\"dark\"] .STING-WEB-Stats > table > thead > tr, [data-theme=\"dark\"] .STING-WEB-Table-LE-v2, #tie-body .STING-WEB-Name-League-API, #tie-body .STING-WEB-Standings > table > thead > tr, #tie-body .STING-WEB-Standings > table > tbody > tr, #tie-body .STING-WEB-Stats > table > tbody > tr, #tie-body .STING-WEB-Stats > table > thead > tr, #tie-body .STING-WEB-Table-LE-v2 { color: #fff !important; } .Night .OpenNow, .Dark .OpenNow, .dark .OpenNow, [data-theme=\"dark\"] .OpenNow, #tie-body .OpenNow { background: #100d48 !important; }.STING-WEB-TOPUP { display: grid; gap: 8px; margin: 10px; } .STING-WEB-TOPUP span { position: relative; font-size: 15px; font-weight: 600; display: flex; gap: 12px; } .STING-WEB-TOPUP span:before { content: \"\"; width: 4px; border-radius: 50px; }</style>\n\n          <div class=\"STING-WEB-League-API\">\n            <div class=\"STING-WEB-League-API-Top\">\n              <div class=\"STING-WEB-League-API-Top-Right\">\n                  <img src=\"https://imagecache.365scores.com/image/upload/f_png,w_68,h_68,c_limit,q_auto:eco,dpr_2,d_Countries:Round:2.png/v5/Competitions/light/" + _0x1d2b1e + "\" alt=\"" + _0x15256e.Name + " " + _0x6b20b7 + " " + _0x15256e.Year + "\"/>\n              </div>\n              <div class=\"STING-WEB-League-API-Top-Left\">\n                  <h2 class=\"STING-WEB-Name-League-API\">" + _0x15256e.Name + " " + _0x6b20b7 + " " + _0x15256e.Year + "</h2>\n              </div>\n            </div>\n            <div class=\"STING-WEB-Buttons-Toggle\">\n                <button class=\"STING-WEB-ShowStandings OpenNow\">" + _0x149beb.standings + "</button>\n                <button class=\"STING-WEB-ShowStats\">" + _0x149beb.stats + "</button>\n                <button class=\"STING-WEB-ShowMatches\">" + _0x149beb.matchat + "</button>\n            </div>\n           \n          </div>\n          ";
        const _0x332a76 = document.createElement("div");
        _0x332a76.classList.add("STING-WEB-Header-Leagues");
        _0x28276d.prepend(_0x332a76);
        _0x332a76.innerHTML = _0x52671e;
        const _0x540205 = document.createElement("div");
        _0x540205.classList.add("STING-WEB-Results");
        _0x28276d.appendChild(_0x540205);
        function _0x2cf317() {
          const _0x2cea90 = {
            0x1b: {
              'position': 'م',
              'logo': '',
              'team': "الفريق",
              'played': "لعب",
              'win': "فاز",
              'losse': "خسر",
              'draw': "تعادل",
              'Farek': "+/-",
              'points': "النقاط",
              'playedMobile': 'ل',
              'winMobile': 'ف',
              'losseMobile': 'خ',
              'drawMobile': 'ت'
            },
            0x1: {
              'position': '#',
              'logo': '',
              'team': "Club",
              'played': "Played",
              'win': "Won",
              'losse': "Lost",
              'draw': "Drawn",
              'Farek': "+/-",
              'points': "PTS",
              'playedMobile': 'MP',
              'winMobile': 'W',
              'losseMobile': 'L',
              'drawMobile': 'D'
            }
          };
          const _0xd072e = _0x2cea90[_0x5c2645];
          if (_0x38ac87 === 0x1b68 || _0x38ac87 === 0xa7 || _0x38ac87 === 0x270 || _0x38ac87 === 0x273 || _0x38ac87 === 0x1834 || _0x38ac87 === 0x18ac || _0x38ac87 === 0x285 || _0x38ac87 === 0x154c || _0x38ac87 === 0x25d || _0x38ac87 === 0x1ab8 || _0x38ac87 === 0x263 || _0x38ac87 === 0x26f || _0x38ac87 === 0x1c4a) {
            const _0x52dcd1 = {
              0x1b68: 0x4,
              0xa7: 0x4,
              0x270: 0x4,
              0x273: 0x4,
              0x1834: 0x4,
              0x18ac: 0x4,
              0x285: 0x6,
              0x154c: 0x4,
              0x25d: 0x6,
              0x1ab8: 0x4,
              0x263: 0x5,
              0x26f: 0xc,
              0x1c4a: 0x3
            };
            const _0x3319d9 = _0x52dcd1[_0x38ac87];
            let _0xc26afa = '';
            const _0x29e3b1 = _0x4ba2c6.standings[0x0].rows;
            for (let _0x31805c = 0x0; _0x31805c < _0x29e3b1.length; _0x31805c += _0x3319d9) {
              const _0x5ad485 = _0x29e3b1.slice(_0x31805c, _0x31805c + _0x3319d9);
              _0xc26afa += "\n                        <h2 style=\"font-size: 13px; color: #00000091; margin-right: 10px;\">مجموعة " + (Math.floor(_0x31805c / _0x3319d9) + 0x1) + "</h2>\n                        <style>\n                            .STING-WEB-Standings>table>tbody>tr:nth-child(3)>td:nth-child(1)::before,\n                            .STING-WEB-Standings>table>tbody>tr:nth-child(4)>td:nth-child(1)::before { background: #ffffff00 !important; }\n                        </style>\n                        <table class=\"STING-WEB-Table-LE-v2\">\n                            <thead>\n                                <tr>\n                                    <th>" + _0xd072e.position + "</th>\n                                    <th>" + _0xd072e.logo + "</th>\n                                    <th style=\"width: 25%;\">" + _0xd072e.team + "</th>\n                                    <th>\n                                        <span class=\"STING-WEB-PC\">" + _0xd072e.played + "</span>\n                                        <span class=\"STING-WEB-PHONE\">" + _0xd072e.playedMobile + "</span>\n                                    </th>\n                                    <th>" + _0xd072e.Farek + "</th>\n                                    <th style=\"background: #00800030;border-radius: 6px;\">\n                                        <span class=\"STING-WEB-PC\">" + _0xd072e.win + "</span>\n                                        <span class=\"STING-WEB-PHONE\">" + _0xd072e.winMobile + "</span>\n                                    </th>\n                                    <th style=\"background: #ff000030;border-radius: 6px;\">\n                                        <span class=\"STING-WEB-PC\">" + _0xd072e.losse + "</span>\n                                        <span class=\"STING-WEB-PHONE\">" + _0xd072e.losseMobile + "</span>\n                                    </th>\n                                    <th style=\"background: #a9710930;border-radius: 6px;\">\n                                        <span class=\"STING-WEB-PC\">" + _0xd072e.draw + "</span>\n                                        <span class=\"STING-WEB-PHONE\">" + _0xd072e.drawMobile + "</span>\n                                    </th>\n                                    <th>" + _0xd072e.points + "</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                    ";
              _0x5ad485.forEach(_0x44a6f5 => {
                const _0x381bb4 = _0x44a6f5.position || '-';
                const _0x4b1b54 = _0x44a6f5.competitor?.['id'] || "default1";
                const _0x3d4813 = _0x44a6f5.competitor?.["name"] || "غير معروف";
                const _0x566230 = _0x44a6f5.gamePlayed || '-';
                const _0x2dfb6b = _0x44a6f5.gamesWon || '-';
                const _0x43c5dc = _0x44a6f5.gamesLost || '-';
                const _0x284bbe = _0x44a6f5.gamesEven || '-';
                const _0x5add1f = _0x44a6f5["for"] || '-';
                const _0x3ee4e2 = _0x44a6f5.against || '-';
                const _0x3d3a26 = _0x44a6f5.points || '-';
                _0xc26afa += "\n                            <tr>\n                                <td>" + _0x381bb4 + "</td>\n                                <td class=\"IMGS\">\n                                    <img src=\"https://imagecache.365scores.com/image/upload/f_png,w_32,h_32,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v3/Competitors/" + _0x4b1b54 + "\" alt=\"" + _0x3d4813 + "\"/>\n                                </td>\n                                <td style=\"width: 25%;\" class=\"Name\">" + _0x3d4813 + "</td>\n                                <td>" + _0x566230 + "</td>\n                                <td>" + _0x3ee4e2 + ':' + _0x5add1f + "</td>\n                                <td style=\"background: #00800030;border-radius: 6px;\">" + _0x2dfb6b + "</td>\n                                <td style=\"background: #ff000030;border-radius: 6px;\">" + _0x43c5dc + "</td>\n                                <td style=\"background: #a9710930;border-radius: 6px;\">" + _0x284bbe + "</td>\n                                <td style=\"font-weight: 600;font-size: 18px;\">" + _0x3d3a26 + "</td>\n                            </tr>\n                        ";
              });
              _0xc26afa += "</tbody></table><br>";
            }
            _0x540205.classList.add("STING-WEB-Standings");
            const _0x21a6a6 = document.querySelector(".STING-WEB-Standings");
            if (_0x21a6a6) {
              _0x21a6a6.innerHTML = _0xc26afa;
              document.querySelector(".STING-WEB-Clear")?.["remove"]();
            } else {
              console.error("Could not find the .STING-WEB-Standings element.");
            }
          } else {
            let _0x2f485d = "\n                    <table class=\"STING-WEB-Table-LE-v2\">\n                        <thead>\n                            <tr>\n                                <th>" + _0xd072e.position + "</th>\n                                <th>" + _0xd072e.logo + "</th>\n                                <th style=\"width: 25%;\">" + _0xd072e.team + "</th>\n                                <th>\n                                    <span class=\"STING-WEB-PC\">" + _0xd072e.played + "</span>\n                                    <span class=\"STING-WEB-PHONE\">" + _0xd072e.playedMobile + "</span>\n                                </th>\n                                <th>" + _0xd072e.Farek + "</th>\n                                <th style=\"background: #00800030;border-radius: 6px;\">\n                                    <span class=\"STING-WEB-PC\">" + _0xd072e.win + "</span>\n                                    <span class=\"STING-WEB-PHONE\">" + _0xd072e.winMobile + "</span>\n                                </th>\n                                <th style=\"background: #ff000030;border-radius: 6px;\">\n                                    <span class=\"STING-WEB-PC\">" + _0xd072e.losse + "</span>\n                                    <span class=\"STING-WEB-PHONE\">" + _0xd072e.losseMobile + "</span>\n                                </th>\n                                <th style=\"background: #a9710930;border-radius: 6px;\">\n                                    <span class=\"STING-WEB-PC\">" + _0xd072e.draw + "</span>\n                                    <span class=\"STING-WEB-PHONE\">" + _0xd072e.drawMobile + "</span>\n                                </th>\n                                <th>" + _0xd072e.points + "</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                ";
            if (_0x4ba2c6.standings[0x0].rows) {
              _0x4ba2c6.standings[0x0].rows.forEach(_0x51157b => {
                const _0xf3635a = _0x51157b.position || "غير متوفر";
                const _0x4e5e1c = _0x51157b.competitor?.['id'] || "default1";
                const _0x24b8b9 = _0x51157b.competitor?.["name"] || "غير معروف";
                const _0x13ac2d = _0x51157b.gamePlayed || '-';
                const _0x2f111b = _0x51157b.gamesWon || '-';
                const _0x44597e = _0x51157b.gamesLost || '-';
                const _0x4bbe99 = _0x51157b.gamesEven || '-';
                const _0x2fc437 = _0x51157b["for"] || '-';
                const _0x3b35b7 = _0x51157b.against || '-';
                const _0x24b3a5 = _0x51157b.points || '-';
                _0x2f485d += "\n                            <tr>\n                                <td>" + _0xf3635a + "</td>\n                                <td class=\"IMGS\">\n                                    <img src=\"https://imagecache.365scores.com/image/upload/f_png,w_32,h_32,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/" + _0x4e5e1c + "\" alt=\"" + _0x24b8b9 + "\"/>\n                                </td>\n                                <td style=\"width: 25%;\" class=\"Name\">" + _0x24b8b9 + "</td>\n                                <td>" + _0x13ac2d + "</td>\n                                <td>" + _0x3b35b7 + ':' + _0x2fc437 + "</td>\n                                <td style=\"background: #00800030;border-radius: 6px;\">" + _0x2f111b + "</td>\n                                <td style=\"background: #ff000030;border-radius: 6px;\">" + _0x44597e + "</td>\n                                <td style=\"background: #a9710930;border-radius: 6px;\">" + _0x4bbe99 + "</td>\n                                <td style=\"font-weight: 600;font-size: 18px;\">" + _0x24b3a5 + "</td>\n                            </tr>\n                        ";
              });
            } else {
              console.warn("No standings data available.");
            }
            if (_0x4ba2c6.standings[0x0].destinations) {
              _0x2f485d += "</tbody></table>\n                    <style>\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x0 ? ".STING-WEB-TOPUP > span:nth-child(1)::before { background: " + _0x4ba2c6.standings[0x0].destinations[0x0].color + "; }" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x1 ? ".STING-WEB-TOPUP > span:nth-child(2)::before { background: " + _0x4ba2c6.standings[0x0].destinations[0x1].color + "; }" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x2 ? ".STING-WEB-TOPUP > span:nth-child(3)::before { background: " + _0x4ba2c6.standings[0x0].destinations[0x2].color + "; }" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x3 ? ".STING-WEB-TOPUP > span:nth-child(4)::before { background: " + _0x4ba2c6.standings[0x0].destinations[0x3].color + "; }" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x4 ? ".STING-WEB-TOPUP > span:nth-child(5)::before { background: " + _0x4ba2c6.standings[0x0].destinations[0x4].color + "; }" : '') + "\n                    </style>\n                    <div class=\"STING-WEB-TOPUP\">\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x0 ? "<span>" + _0x4ba2c6.standings[0x0].destinations[0x0].name + "</span>" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x1 ? "<span>" + _0x4ba2c6.standings[0x0].destinations[0x1].name + "</span>" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x2 ? "<span>" + _0x4ba2c6.standings[0x0].destinations[0x2].name + "</span>" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x3 ? "<span>" + _0x4ba2c6.standings[0x0].destinations[0x3].name + "</span>" : '') + "\n                      " + (_0x4ba2c6.standings[0x0].destinations.length > 0x4 ? "<span>" + _0x4ba2c6.standings[0x0].destinations[0x4].name + "</span>" : '') + "\n                    </div>\n                  ";
            }
            _0x540205.classList.add("STING-WEB-Standings");
            _0x540205.classList.remove("STING-WEB-Golas");
            _0x540205.classList.remove("STING-WEB-Matches");
            _0x540205.innerHTML = _0x2f485d;
            document.querySelector(".STING-WEB-Clear")?.["remove"]();
          }
        }
        ;
        function _0x219c2e() {
          const _0x15c28f = {
            0x1b: {
              'position': 'م',
              'logo': '',
              'player': "اللاعب",
              'backed': "النادي",
              'goals': "الأهداف"
            },
            0x1: {
              'position': '#',
              'logo': '',
              'player': "Player",
              'backed': "Club",
              'goals': "Goals"
            }
          };
          const _0x514800 = _0x15c28f[_0x5c2645];
          let _0x3acf7f = "\n          <table class=\"STING-WEB-Table-LE-v2\">\n              <thead>\n                  <tr>\n                      <td>" + _0x514800.position + "</td>\n                      <td style=\"width:5%;\">" + _0x514800.logo + "</td>\n                      <td>" + _0x514800.player + "</td>\n                      <td>" + _0x514800.backed + "</td>\n                      <td>" + _0x514800.goals + "</td>\n                  </tr>\n              </thead>\n              <tbody>\n      ";
          _0x4ba2c6.stats.athletesStats[0x0].rows.forEach(_0x327e14 => {
            const _0x2a6360 = _0x327e14.position !== undefined ? _0x327e14.position : "غير متوفر";
            const _0x5e29e7 = _0x327e14.entity.id !== undefined ? _0x327e14.entity.id : "غير معروف";
            const _0x5205bf = _0x327e14.entity.name !== undefined ? _0x327e14.entity.name : "غير معروف";
            const _0x114716 = _0x327e14.entity.competitorId !== undefined ? _0x327e14.entity.competitorId : "غير معروف";
            const _0x3a201b = _0x327e14.stats[0x0].value !== undefined ? _0x327e14.stats[0x0].value : '0';
            _0x3acf7f += "\n                <tr>\n                    <td>" + _0x2a6360 + "</td>\n                    <td class=\"IMGS\" style=\"width:5%;height: 60px;\"><img src=\"https://imagecache.365scores.com/image/upload/f_png,w_80,h_80,c_limit,q_auto:eco,dpr_2,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/v46/Athletes/" + _0x5e29e7 + "\" alt=\"" + _0x5205bf + "\"/></td>\n                    <td>" + _0x5205bf + "</td>\n                    <td class=\"IMGS\" style=\"width:5%;height: 40px;\"><img src=\"https://imagecache.365scores.com/image/upload/f_png,w_40,h_40,c_limit,q_auto:eco,dpr_3,d_Competitors:default1.png/v4/Competitors/" + _0x114716 + "\"/ alt=\"" + _0x5205bf + "\"></td>\n                    <td style=\"font-size: 18px; font-weight: 600;\">" + _0x3a201b + "</td>\n                </tr>\n            ";
          });
          _0x3acf7f += "</tbody></table>";
          _0x540205.classList.add("STING-WEB-Golas");
          _0x540205.classList.remove("STING-WEB-Standings");
          _0x540205.classList.remove("STING-WEB-Matches");
          _0x540205.innerHTML = _0x3acf7f;
          document.querySelector(".STING-WEB-Clear")?.["remove"]();
        }
        function _0x3e84b9() {
          const _0x34728e = {
            0x1b: {
              'date': "التاريخ",
              'time': "الساعة"
            },
            0x1: {
              'date': "Date",
              'time': "Time"
            }
          };
          const _0x4fe3bd = _0x34728e[_0x5c2645];
          let _0x7a3ea4 = "\n          <table class=\"STING-WEB-Table-LE-v2\">\n              <thead>\n                  <tr>\n                      <td>" + _0x4fe3bd.date + "</td>\n                      <td></td>\n                      <td></td>\n                      <td>" + _0x4fe3bd.time + "</td>\n                      <td></td>\n                      <td></td>\n                  </tr>\n              </thead>\n              <tbody>\n      ";
          const _0x3a9ea4 = _0x4ba2c6.standings[0x0].rows.sort((_0x3c9c7a, _0x1fa24f) => {
            const _0x8648f4 = new Date(_0x3c9c7a.nextMatch.startTime);
            const _0x587ce9 = new Date(_0x1fa24f.nextMatch.startTime);
            return _0x8648f4 - _0x587ce9;
          });
          const _0x476749 = [];
          const _0x5e96a8 = new Set();
          _0x3a9ea4.forEach(_0x5ec470 => {
            const _0x562f01 = _0x5ec470.nextMatch.homeCompetitor.name || '-';
            const _0x2248c6 = _0x5ec470.nextMatch.startTime || '-';
            const _0x123e1a = _0x5ec470.nextMatch.awayCompetitor.name || '-';
            const _0x44b39d = _0x2248c6 + '-' + _0x562f01 + '-' + _0x123e1a;
            if (!_0x5e96a8.has(_0x44b39d)) {
              _0x5e96a8.add(_0x44b39d);
              _0x476749.push(_0x5ec470);
            }
          });
          _0x476749.forEach(_0x4a5132 => {
            const _0x3695da = _0x4a5132.nextMatch.homeCompetitor.name || '-';
            const _0x49dc86 = _0x4a5132.nextMatch.homeCompetitor.id || '-';
            const _0x397536 = _0x4a5132.nextMatch.startTime || '-';
            function _0x558eec(_0x4664e9) {
              if (_0x4664e9 === '-') {
                return '-';
              }
              return _0x4664e9.split('T')[0x0];
            }
            function _0x44e7e5(_0x3b5768) {
              if (_0x3b5768 === '-') {
                return '-';
              }
              const [_0x3a3a39, _0x42404e] = _0x3b5768.split('T');
              const _0xb756a4 = new Date(_0x3a3a39 + 'T' + _0x42404e);
              const _0x11dea0 = new Date(_0xb756a4.toLocaleString("en-US", {
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
              }));
              const _0x2b446e = (_0x11dea0.getHours() % 0xc || 0xc).toString().padStart(0x2, '0');
              const _0x292ddb = _0x11dea0.getMinutes().toString().padStart(0x2, '0');
              const _0x4ce324 = _0x11dea0.getHours() >= 0xc ? 'PM' : 'AM';
              return _0x2b446e + ':' + _0x292ddb + " " + _0x4ce324;
            }
            const _0xd0d43d = _0x558eec(_0x397536);
            const _0x3a97c1 = _0x44e7e5(_0x397536);
            const _0x49fa8b = _0x4a5132.nextMatch.awayCompetitor.name || '-';
            const _0x41ae2a = _0x4a5132.nextMatch.awayCompetitor.id || '-';
            _0x7a3ea4 += "\n            <tr>\n                <td>" + _0xd0d43d + "</td>\n                <td class=\"IMGS\">\n                    <img src=\"https://imagecache.365scores.com/image/upload/f_png,w_32,h_32,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/" + _0x49dc86 + "\" alt=\"" + _0x3695da + "\">\n                </td>\n                <td>" + _0x3695da + "</td>\n                <td style=\"direction: ltr;\">" + _0x3a97c1 + "</td>\n                <td>" + _0x49fa8b + "</td>\n                <td class=\"IMGS\">\n                    <img src=\"https://imagecache.365scores.com/image/upload/f_png,w_32,h_32,c_limit,q_auto:eco,dpr_2,d_Competitors:default1.png/v1/Competitors/" + _0x41ae2a + "\" alt=\"" + _0x49fa8b + "\">\n                </td>\n            </tr>\n        ";
          });
          _0x7a3ea4 += "</tbody></table>";
          _0x540205.classList.add("STING-WEB-Matches");
          _0x540205.classList.remove("STING-WEB-Golas");
          _0x540205.classList.remove("STING-WEB-Standings");
          _0x540205.innerHTML = _0x7a3ea4;
          document.querySelector(".STING-WEB-Clear")?.["remove"]();
        }
        function _0x349411(_0x53eb6a, _0x544264) {
          document.querySelectorAll(".STING-WEB-ShowStandings, .STING-WEB-ShowStats, .STING-WEB-ShowMatches").forEach(_0x26b9f7 => {
            _0x26b9f7.classList.remove("OpenNow");
          });
          if (!_0x53eb6a.classList.contains("OpenNow")) {
            _0x53eb6a.classList.add("OpenNow");
            _0x544264();
          }
        }
        document.querySelector(".STING-WEB-ShowStandings").addEventListener("click", function () {
          _0x349411(this, _0x2cf317);
        });
        document.querySelector(".STING-WEB-ShowStats").addEventListener("click", function () {
          _0x349411(this, _0x219c2e);
        });
        document.querySelector(".STING-WEB-ShowMatches").addEventListener("click", function () {
          _0x349411(this, _0x3e84b9);
        });
        _0x2cf317();
      })["catch"](_0x5a4352 => {
        console.error("Fetching error:", _0x5a4352);
        document.querySelector(".STING-WEB-Clear").innerHTML = "<div class=\"STING-WEB-NOT-LS\" style=\"background: #0000002b; color: #000000; text-align: center; padding: 50px; font-size: 20px; border-radius: 16px; margin: 15px auto; font-weight: 600;\"><p>لا يوجد معلومات عن الدوري في الوقت الحالي</p></div>";
      });
    } else {
      console.warn("No leagueId found for : " + _0xf6ef00.className);
    }
  });
});
console.group("%cSTING WEB - Leagues API Plugin", "font-weight:500;color:#f50;font-size:20px;");
console.log("=> Designed by      : STING WEB");
console.log("=> FB Page URL      : https://fb.com/stingweb.eg");
console.log("=> Version          : 2024 / 2.0 - STABLE");
console.log("=> Desgin URL       : https://www.sting-web.com");
console.log("=> %cاطلب نسخة لموقعك الان  - من خلال ستينج ويب", "font-weight:600;color:#f50;font-size:15px;font-family:Segoe UI;");
console.groupEnd();