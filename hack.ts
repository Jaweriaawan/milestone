document.getElementById(`Resume`)?.addEventListener(`submit`, function(event){
  event.preventDefault();

  const profileInput = document.getElementById(`profile`) as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const numberElement = document.getElementById('number') as HTMLInputElement;
  const addressElement = document.getElementById('Address') as HTMLInputElement;  // Fixed ID to match HTML
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLInputElement;

  if (profileInput && nameElement && emailElement && numberElement && addressElement && educationElement && experienceElement && skillsElement) {
      
      const name = nameElement.value;
      const email = emailElement.value;
      const number = numberElement.value;
      const address = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;  // Add .value to retrieve content

      const profileFile = profileInput.files?.[0];
      const profileURL = profileFile ? URL.createObjectURL(profileFile) : ''; 

      const resumeoutput = `
          <h2>Resume</h2>
          ${profileURL ? `<img src="${profileURL}" alt="profile" class="profile">` : ""}
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${number}</p>
          <p><strong>Address:</strong> ${address}</p>
          <h2>Education</h2>
          <p>${education}</p>
          <h2>Experience</h2>
          <p>${experience}</p>
          <h2>Skills</h2>
          <p>${skills}</p>
      `;

      const resumeoutputElement = document.getElementById(`resumeoutput`);
      if (resumeoutputElement) {
          resumeoutputElement.innerHTML = resumeoutput;
      } else {
          console.error('The resume output element is missing.');
      }
  } else {
      console.error('Some form elements are missing.');
  }
});
