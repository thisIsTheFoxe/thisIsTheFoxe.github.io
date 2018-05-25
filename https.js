var host = "www.thisisthefoxe.me";
if ((host == window.location.host) && (window.location.protocol != "https:")){
    console.log("redirect", window.location.protocol)
    window.location.protocol = "https:";
}
