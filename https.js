var host = "www.thisisthefoxe.me";
if ((host == window.location.host) && (window.location.protocol != "https:")){
    console.log("redirect", window.location)
    window.location.protocol = "https:";
}
