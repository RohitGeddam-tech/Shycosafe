export const getUtmParamsObject = (settings) => {
  sessionStorage.clear();
  const querystring = window.location.href.split("?"),
    reset = settings && settings.reset ? settings.reset : false;
  if (querystring.length > 1) {
    var pairs = querystring[1].split("&");
    for (let i in pairs) {
      var keyval = pairs[i].split("=");
      if (reset || sessionStorage.getItem(keyval[0]) === null) {
        if (keyval[0] === "utm_content")
          sessionStorage.setItem("utm_content", "");
        else sessionStorage.setItem(keyval[0], decodeURIComponent(keyval[1]));
      }
    }
  }
};

export const getUtmSerializedString = () => {
  const { utm_content } =
    sessionStorage || {};
  return `${utm_content || "Contact Form"}`;
};