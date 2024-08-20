let enrolledCourses = [];

function enrollCourse(id, name) {
    if (!enrolledCourses.find(course => course.id === id)) {
        enrolledCourses.push({ id, name, progress: 0 });
        updateProfile();
        updateProgressUI();
    } else {
        alert('You are already enrolled in this course.');
    }
}

function updateProfile() {
    document.getElementById('course-count').innerText = enrolledCourses.length;
}

function updateProgressUI() {
    const enrolledCoursesElement = document.getElementById('enrolled-courses');
    enrolledCoursesElement.innerHTML = '';

    enrolledCourses.forEach(course => {
        const li = document.createElement('li');
        li.innerText = `${course.name} - Progress: ${course.progress}%`;
        enrolledCoursesElement.appendChild(li);
    });
}

document.getElementById('check-progress-btn').addEventListener('click', function() {
    if (enrolledCourses.length === 0) {
        document.getElementById('progress-status').innerText = 'No courses enrolled yet.';
    } else {
        // Simulate progress check
        enrolledCourses.forEach(course => {
            course.progress = Math.floor(Math.random() * 101); // Random progress between 0 and 100
        });
        updateProgressUI();
        document.getElementById('progress-status').innerText = 'Progress updated.';
    }
});