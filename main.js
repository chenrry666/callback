function debounce(fn, wait) {
    let timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const remark = document.getElementById("remark");
    const output = document.getElementById("output");

    remark.value = "e5sub";

    function getListener() {
        return function (e) {
            // validate input
            // null or whitespaces
            if (this.value.replace(/^ +| +$/g, '') === '') {
                this.classList.add("invalid");
            } else {
                this.classList.remove("invalid");
            }

            // data binding
            output.innerText = "http://localhost/e5sub" + location.search + " " + remark.value;
        };
    }

    remark.addEventListener("keyup", getListener())
    remark.addEventListener("keydown", getListener())
    remark.addEventListener("change", getListener())
    output.innerText = "http://localhost/e5sub" + location.search + " " + remark.value;
    const a = new ClipboardJS('.copy-btn');

    const BtnCopy = document.getElementsByClassName('copy-btn')[0];
    const IconCopy = document.getElementsByClassName('copy-icon')[0],
        IconCheck = document.getElementsByClassName('check-icon')[0];
    a.on("success", function (e) {
        console.info(e);
        e.clearSelection();
    })
    a.on("error", function (e) {
        console.error(e);
    })
    BtnCopy.addEventListener("click", debounce(function () {
        IconCopy.classList.add("hidden")
        IconCheck.classList.remove('hidden')
        setTimeout(function () {
            IconCopy.classList.remove("hidden")
            IconCheck.classList.add('hidden')

        }, 500)
    }, 500))

})