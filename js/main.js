function downloadModal() {
    var modal = document.getElementById("download-modal");
    modal.style.display = "block";
    setDownload();
}
function mapModal() {
    var modal = document.getElementById("map-modal");
    modal.style.display = "block";
}

function closeModal() {
    var map_modal = document.getElementById("map-modal");
    map_modal.style.display = "none";
    var download_modal = document.getElementById("download-modal");
    download_modal.style.display = "none";
}

function setDownload() {
    var os = detectOS();

    alert(os);

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
        var win_img = document.createElement("img");
        win_img.setAttribute("src", "img/win.png");
        win_img.setAttribute("id", "modload-img");
        modload_link.appendChild(win_img);
        modload_link.setAttribute("href", "downloads/forge/forge-1.7.10-10.13.4.1558-1.7.10-installer-win.exe");
        modload_info.innerHTML = "Windows Mod Loader Download<br>" +
            "<span id='lin2'>forge-1.7.10-10.13.4.1558-1.7.10-installer-win.exe</span>";
    }

    if (os == "lin") {
        var lin_img = document.createElement("img");
        lin_img.setAttribute("src", "img/lin.png");
        lin_img.setAttribute("id", "modload-img");
        modload_link.appendChild(lin_img);
        modload_link.setAttribute("href", "downloads/forge/forge-1.7.10-10.13.4.1558-1.7.10-universal.jar");
        modload_info.innerHTML = "Linux Mod Loader Download<br>" +
            "<span id='lin2'>forge-1.7.10-10.13.4.1558-1.7.10-universal.jar</span>";
    }
}

function detectOS() {
    var os = navigator.appVersion.substr(5, 3).toLowerCase();
    return os;
}

