//your JS code here. If required.
  const form = document.querySelector('form');
  const nameInput = document.querySelector('#name');
  const ageInput = document.querySelector('#age');
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // check if the inputs are not empty
    if (!nameInput.value || !ageInput.value) {
      alert('Please enter both name and age.');
      return;
    }

    // create a promise to handle the form submission
    const formPromise = new Promise((resolve, reject) => {
      // set a timeout to simulate asynchronous processing
      setTimeout(() => {
        const age = parseInt(ageInput.value);

        // check if the age is above 18 and resolve the promise
        if (age > 18) {
          const welcomeMessage = `Welcome, ${nameInput.value}. You can vote.`;
          alert(welcomeMessage);
          resolve(welcomeMessage);
        }
        // otherwise, reject the promise
        else {
          const sorryMessage = `Oh sorry ${nameInput.value}. You aren't old enough.`;
          alert(sorryMessage);
          reject(sorryMessage);
        }
      }, 4000);
    });

    // handle the promise resolution and rejection
    formPromise
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  });
