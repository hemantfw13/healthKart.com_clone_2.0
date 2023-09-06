const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

//UI Functionalities
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

//Auth Logic
document.getElementById('up_signup').addEventListener('click', () => {
  signup();
});

async function signup() {
  try {
    var signUpInputs = {
      email: document.getElementById('up_email').value,
      password: document.getElementById('up_pass').value,
    };

    if (!signUpInputs.email || !signUpInputs.password) {
      alert('Please all the details');
      return;
    }

    signUpInputs = JSON.stringify(signUpInputs);

    // for server use
    let url = 'http://localhost:4500/register';

    let response = await fetch(url, {
      method: 'POST',
      body: signUpInputs,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let result = await response.json();
    // console.log(result);
    if (result.status == 'Done') {
      alert('Registered Successfully');
    } else {
      alert('Already Registered');
    }
  } catch (err) {
    console.log(err);
  }
}

document.getElementById('login_up').addEventListener('click', (event) => {
  event.preventDefault();
  var data = {
    email: document.getElementById('in_email').value,
    password: document.getElementById('in_pass').value,
  };
  // console.log(data)
  data = JSON.stringify(data);

  fetch('http://localhost:4500/login', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function (res) {
    res.json().then(function (res) {
      if (res.Status == 'Done') {
        window.localStorage.setItem('user_token', JSON.stringify(res.token));
        alert(`Login Succesful`);
        window.location.href = 'index.html';
      } else {
        alert('Wrong Credentials');
      }
    });
  });
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

document.getElementById('up_signup').addEventListener('click', () => {
  console.log(`hello`);
  auth();
});

async function auth() {
  window.location.href = 'http://localhost:4500/auth/google';
}
