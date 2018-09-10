let plewgin = document.getElementById('plewgin');

// chrome.storage.sync.get('color', function(data) {
//   plewgin.style.backgroundColor = data.color;
//   plewgin.setAttribute('value', data.color);
// });

plewgin.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:
        'var url = window.location.href.split("/")[4];' +
        'var button = document.getElementsByClassName("ytd-subscribe-button-renderer")[0];' +
        'var status = button.getAttribute("subscribed");'+
        'if ((url=="UC-lHJZR3Gqxm24_Vd_AJ5Yw" || url=="PewDiePie") && status == "null"){'+
          'button.click();'+
        '}'+
        'else{'+
          'var owner = document.querySelector("#owner-name>a");' +
          'if (owner.innerHTML == "PewDiePie" && status == "null"){' +
            'button.click();'+
          '}'+
        '}'
      }
    );
  });
};
//Unsubscribe from this channel
//count = document.getElementById("subscriber-count");count.innerHTML = "99,043,976 subscribers";
