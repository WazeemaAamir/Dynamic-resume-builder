// Getting references to the form and resume output section
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('generated-resume') as HTMLElement;

// Handling form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture user input
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const years = (document.getElementById('years') as HTMLInputElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Graduation Year:</strong> ${year}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>

        <h3>Work Experience</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Years Worked:</strong> ${years}</p>
    `;
    
    if (skills.length === 0 || skills[0] === '') {
        alert('Please enter at least one skill.');
        return;
    }
    

    // Display the resume
    resumeSection.innerHTML = resumeHTML;
});
