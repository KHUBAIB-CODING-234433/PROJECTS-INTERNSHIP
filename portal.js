// Dropdown elements ko select karna
const programFilter = document.getElementById('programFilter');
const semesterFilter = document.getElementById('semesterFilter');

// Program dropdown par event listener lagana
programFilter.addEventListener('change', function() {
    let selectedProgram = programFilter.value;
    console.log("User selected program: " + selectedProgram);
    
    // Yahan aap future mein Data Fetch karne ki logic likh sakte hain
    // jaise: fetchStudentsByProgram(selectedProgram);
});

// Semester dropdown par event listener lagana
semesterFilter.addEventListener('change', function() {
    let selectedSemester = semesterFilter.value;
    console.log("User selected semester: " + selectedSemester);
});

console.log("Portal UI is ready and loaded.");