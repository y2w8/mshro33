const fs = require('fs');
const { stringify } = require('querystring');

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function tebt() {
  var uemail = "ggggh";
  var torf = getCookie("username");

  const dataver = {
    [uemail]: {
      ver: torf
    },
}

  fs.appendFile('ver.json', JSON.stringify(dataver, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('File written successfully');
  });

}
