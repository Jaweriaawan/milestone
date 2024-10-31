var _a;
(_a = document.getElementById("Resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileInput = document.getElementById("profile");
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var numberElement = document.getElementById('number');
    var addressElement = document.getElementById('Address'); // Fixed ID to match HTML
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profileInput && nameElement && emailElement && numberElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var number = numberElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value; // Add .value to retrieve content
        var profileFile = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profileURL = profileFile ? URL.createObjectURL(profileFile) : '';
        var resumeoutput = "\n          <h2>Resume</h2>\n          ".concat(profileURL ? "<img src=\"".concat(profileURL, "\" alt=\"profile\" class=\"profile\">") : "", "\n          <p><strong>Name:</strong> ").concat(name_1, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Contact:</strong> ").concat(number, "</p>\n          <p><strong>Address:</strong> ").concat(address, "</p>\n          <h2>Education</h2>\n          <p>").concat(education, "</p>\n          <h2>Experience</h2>\n          <p>").concat(experience, "</p>\n          <h2>Skills</h2>\n          <p>").concat(skills, "</p>\n      ");
        var resumeoutputElement = document.getElementById("resumeoutput");
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
        }
        else {
            console.error('The resume output element is missing.');
        }
    }
    else {
        console.error('Some form elements are missing.');
    }
});
