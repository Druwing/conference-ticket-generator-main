document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const avatar = document.getElementById('avatar');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const github = document.getElementById('github');

    const avatarError = document.getElementById('avatarError');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const githubError = document.getElementById('githubError');

    if (!avatar.files[0]) {
        avatarError.textContent = 'Please upload an avatar.';
        isValid = false;
    } else if (avatar.files[0].size > 500 * 1024) {
        avatarError.textContent = 'File size must be less than 500KB.';
        isValid = false;
    } else {
        avatarError.textContent = '';
    }

    if (!fullName.value.trim()) {
        nameError.textContent = 'Please enter your full name.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!github.value.trim()) {
        githubError.textContent = 'Please enter your GitHub username.';
        isValid = false;
    } else {
        githubError.textContent = '';
    }

    if (isValid) {
        document.getElementById('ticketName').textContent = fullName.value;
        document.getElementById('ticketEmail').textContent = email.value;
        document.getElementById('ticketFullName').textContent = fullName.value;
        document.getElementById('ticketGithub').textContent = github.value;

        const ticketAvatar = document.getElementById('ticketAvatar');
        if (avatar.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                ticketAvatar.innerHTML = `<img src="${e.target.result}" alt="User Avatar">`;
            };
            reader.readAsDataURL(avatar.files[0]);
        }

        document.getElementById('ticketDisplay').classList.remove('hidden');
    }
});