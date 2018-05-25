var host = "www.thisisthefoxe.me";
    console.log("https.js", window.location, window.location.origin)
if ((host == window.location.host) && (window.location.protocol != "https:")){
    console.log("https.js", window.location)
    window.location.protocol = "https:";
}
