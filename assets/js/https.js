var host = "www.thisisthefoxe.me";

if (window.location.host == host && window.location.protocol != "https:"){
    console.log("https.js", window.location);
    window.location.protocol = "https:";
}
