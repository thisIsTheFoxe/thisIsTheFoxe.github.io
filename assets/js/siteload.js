$(function () {
    $("#footer").load("/footer.html");
    $("#header").load("/header.html", () => {
        var current = location.pathname;
        $('#nav li a').each(function () {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($this.attr('href') === current) {
                $this.parent().addClass('active');
                return
            }
        })
    });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

var scrollTopHide = 0;
window.onload = () => {


    scrollTopHide = document.documentElement.scrollHeight - document.documentElement.clientHeight - 200;
    let topBtn = document.createElement("i")
    topBtn.setAttribute("alt", "Scroll to the top")
    topBtn.setAttribute("id", "toTopBtn")
    topBtn.setAttribute("class", "fas fa-arrow-alt-circle-up")
    topBtn.onclick = topFunction;
    document.body.appendChild(topBtn)
}

function scrollFunction() {
    if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < scrollTopHide) {
        document.getElementById("toTopBtn").style.display = "block";
    } else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}

function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}