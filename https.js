var host = "www.thisisthefoxe.me";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
