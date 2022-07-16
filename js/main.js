console.warn('script.js is ready.')

function fetchCategoryButton() {
    try {
        var select = document.getElementById("select");

        var paragraph_admin = document.getElementById("admin-P");
        var paragraph_swear = document.getElementById("swear-P");
        var paragraph_general = document.getElementById("general-P");
        var paragraph_ghost = document.getElementById("ghost-P");
        var paragraph_info = document.getElementById("info-P");
        var paragraph_verify = document.getElementById("verify-P");

        var value = select.value;

        if (value == "admin") {
            paragraph_admin.style.display = "block";
            paragraph_swear.style.display = "none";
            paragraph_general.style.display = "none";
            paragraph_ghost.style.display = "none";
            paragraph_info.style.display = "none";
            paragraph_verify.style.display = "none";
        } else if (value == "swear") {
            paragraph_admin.style.display = "none";
            paragraph_swear.style.display = "block";
            paragraph_general.style.display = "none";
            paragraph_ghost.style.display = "none";
            paragraph_info.style.display = "none";
            paragraph_verify.style.display = "none";
        } else if (value == "general") {
            paragraph_admin.style.display = "none";
            paragraph_swear.style.display = "none";
            paragraph_general.style.display = "block";
            paragraph_ghost.style.display = "none";
            paragraph_info.style.display = "none";
            paragraph_verify.style.display = "none";
        } else if (value == "ghost") {
            paragraph_admin.style.display = "none";
            paragraph_swear.style.display = "none";
            paragraph_general.style.display = "none";
            paragraph_ghost.style.display = "block";
            paragraph_info.style.display = "none";
            paragraph_verify.style.display = "none";
        } else if (value == "info") {
            paragraph_admin.style.display = "none";
            paragraph_swear.style.display = "none";
            paragraph_general.style.display = "none";
            paragraph_ghost.style.display = "none";
            paragraph_info.style.display = "block";
            paragraph_verify.style.display = "none";
        } else if (value == "verify") {
            paragraph_admin.style.display = "none";
            paragraph_swear.style.display = "none";
            paragraph_general.style.display = "none";
            paragraph_ghost.style.display = "none";
            paragraph_info.style.display = "none";
            paragraph_verify.style.display = "block";
        }
    } catch (e) {
        console.warn('[HANDLER] Handled an error: ' + e)
    }
}