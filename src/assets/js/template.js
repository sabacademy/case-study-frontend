
window.addEventListener('resize', function(event){
    toggleSidebar();  
});
// Toggle between showing and hiding the sidebar, and add overlay effect
function toggleSidebar() {
    // Get the Sidebar
    var mySidebar = document.getElementById("mySidebar");
    var mainContent = document.getElementById("main");
    // Get the DIV with overlay effect
    if (window.innerWidth > 900) {
        if (mySidebar.style.display === 'block') {
            mainContent.style.marginLeft = '10px';
            mySidebar.classList.remove("sidebar-animate-left");
            mySidebar.classList.add("sidebar-animate-right");
            mySidebar.style.display = 'none';
        } else {
            mySidebar.classList.remove("sidebar-animate-right");
            mySidebar.style.display = 'block';
            mySidebar.classList.add("sidebar-animate-left");
            mainContent.style.marginLeft = '310px';

        }
    } else if (window.innerWidth < 899) {
        if (mySidebar.style.display === 'block') {
            mainContent.style.marginLeft = '10px';
            mySidebar.classList.remove("sidebar-animate-left");
            // mySidebar.classList.add("sidebar-animate-right");
            mySidebar.style.display = 'none';
        } else {
            // mySidebar.classList.remove("sidebar-animate-right");
            mySidebar.style.display = 'block';
            mySidebar.classList.add("sidebar-animate-left");
            mainContent.style.marginLeft = '10px';

        }
    }
}

function openEditCourse() {
    window.open("edit_course.html", "_self");
}


