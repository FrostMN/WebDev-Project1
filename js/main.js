function downloadModal() {
    var modal = document.getElementById("download-modal");
    modal.style.display = "block";
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
