let User = [
    "Initializing Hacking Tool...",
    "Connecting To Facebook...",
    "Connecting To Server 1...",
    "Connection Failed... Retyring...",
    "Connecting To Server 2...",
    "Connected Successfully...",
    "Username _Crazy.XYZ_",
    "Trying Brute Code Forcing...",
    "Connection Failed... Access Has Been Denied...",
    "Match Not Found...",
    "Connection Lost...",
    "Fetching To New Server-Base Data...",
    "Password Has Been Found...",
    "66216*******",
    "Match Found...",
    "Accessing Account Details...",
    "...-- Access Granted --...",
  ];

  const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  const hack = async (messages) => {
    await sleep(2);
    // console.log(messages);
    text.innerHTML = text.innerHTML + messages + "<br/>"
  };

  (async ()=>{
    for(let i=0; i<User.length; i++){
      await hack(User[i])
    }
  })()