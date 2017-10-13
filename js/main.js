function downloadModal() {
    setDownload();
    var modal = document.getElementById("download-modal");
    var modal_win = document.getElementById("download-modal-content");
    modal.style.display = "block";
    fadeIn(modal_win);
}

function mapModal() {
    var modal = document.getElementById("map-modal");
    var modal_win = document.getElementById("map-modal-content");
    modal.style.display = "block";
    fadeIn(modal_win);
}

function openModal(name) {
    setDownload();
    var modal = document.getElementById(name);
    var modal_win = document.getElementById(name + "-content");
    modal.style.display = "block";
    fadeIn(modal_win);
}

function closeModal() {
    var map_modal = document.getElementById("map-modal");
    var map_win = document.getElementById("map-modal-content");
    fadeOut(map_win);
    map_modal.style.display = "none";
    var download_modal = document.getElementById("download-modal");
    var download_win = document.getElementById("download-modal-content");
    fadeOut(download_win)
    download_modal.style.display = "none";
}

function setDownload() {
    var os = detectOS();
    var modpack = document.getElementById("modpack");
    var modload = document.getElementById("modload");
    var modload_info = document.getElementById("modload-info");
    var modpack_link = document.getElementById("modpack-link");
    var modload_link = document.getElementById("modload-link");
    var img_test = document.getElementById("modload-img");
    if (os == "mac") {
        if (img_test == null) {
            var mac_img = document.createElement("img");
            mac_img.setAttribute("src", "img/mac.png");
            mac_img.setAttribute("id", "modload-img");
            modload_link.appendChild(mac_img);
            modload_link.setAttribute("href", "downloads/forge/forge-1.7.10-10.13.4.1558-1.7.10-installer.jar");
            modload_info.innerHTML = "MacOS Mod Loader Download<br>" +
                "<span id='lin2'>forge-1.7.10-10.13.4.1558-1.7.10-installer.jar</span>";
        }
    }

    if (os == "win") {
        if (img_test == null) {
            var win_img = document.createElement("img");
            win_img.setAttribute("src", "img/win.png");
            win_img.setAttribute("id", "modload-img");
            modload_link.appendChild(win_img);
            modload_link.setAttribute("href", "downloads/forge/forge-1.7.10-10.13.4.1558-1.7.10-installer-win.exe");
            modload_info.innerHTML = "Windows Mod Loader Download<br>" +
                "<span id='lin2'>forge-1.7.10-10.13.4.1558-1.7.10-installer-win.exe</span>";
        }
    }

    if (os == "lin") {
        if (img_test == null) {
            var lin_img = document.createElement("img");
            lin_img.setAttribute("src", "img/lin.png");
            lin_img.setAttribute("id", "modload-img");
            modload_link.appendChild(lin_img);
            modload_link.setAttribute("href", "downloads/forge/forge-1.7.10-10.13.4.1558-1.7.10-universal.jar");
            modload_info.innerHTML = "Linux Mod Loader Download<br>" +
                "<span id='lin2'>forge-1.7.10-10.13.4.1558-1.7.10-universal.jar</span>";
        }
    }
}

function detectOS() {
    var os = navigator.appVersion.substr(5, 3).toLowerCase();
    return os;
}


// fade functions are adapted form SO
// https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

