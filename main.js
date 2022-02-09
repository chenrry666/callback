function debounce(fn, wait) {
    var timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var remark = document.getElementById("remark");
    var output = document.getElementById("output");

    // default
    remark.value = "e5sub";

    output.innerText = "http://localhost/e5sub" + location.search + " " + remark.value;
    var a = new ClipboardJS('.copy-btn', {
        text: function (trigger) {
            return output.value;
        }
    });
    var BtnCopy = document.getElementsByClassName('copy-btn')[0];
    var IconCopy = document.getElementsByClassName('copy-icon')[0],
        IconCheck = document.getElementsByClassName('check-icon')[0];
    BtnCopy.addEventListener("click", debounce(function () {
        IconCopy.classList.add("hidden")
        IconCheck.classList.remove('hidden')
        setTimeout(function () {
            IconCopy.classList.remove("hidden")
            IconCheck.classList.add('hidden')

        }, 500)
    }, 500))
    remark.onkeyup = function (ev) {
        output.innerText = "http://localhost/e5sub" + location.search + " " + remark.value;
    }
})