const usersContainer = document.getElementById("users-container");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const bio = document.getElementById("bio");
const addUserButton = document.getElementById("add-user-button");

const firebaseConfig = {
  apiKey: "AIzaSyAmLDyoI7x6kbCdHdnXZnj58pVSJtufyso",
  authDomain: "data-access-b13ba.firebaseapp.com",
  projectId: "data-access-b13ba",
  storageBucket: "data-access-b13ba.appspot.com",
  messagingSenderId: "460233947186",
  appId: "1:460233947186:web:5adeeb9ffb6e3245f3642b"
};

firebase.initializeApp(firebaseConfig);

const renderUser = (user) => {
    if(usersContainer.innerHTML === "No users.") {
        usersContainer.innerHTML = "";
    };
    const div = document.createElement("div");
    div.className = "user d-flex flex-column p-3";
    //Name
    const nameContainer = document.createElement("div");
    nameContainer.className = 'd-flex gap-3'
    const nameIcon = document.createElement("img");
    nameIcon.src = './user.svg';
    const nameSpan = document.createElement("span");
    nameSpan.innerHTML = user.name;
    nameContainer.append(nameIcon);
    nameContainer.append(nameSpan);
    div.append(nameContainer);
    usersContainer.append(div);
    //SurName
    const surnameContainer = document.createElement("div");
    surnameContainer.className = 'd-flex gap-3'
    const surnameIcon = document.createElement("img");
    surnameIcon.src = './user.svg';
    const surnameSpan = document.createElement("span");
    surnameSpan.innerHTML = user.surname;
    surnameContainer.append(surnameIcon);
    surnameContainer.append(surnameSpan);
    div.append(surnameContainer);
    usersContainer.append(div);
    //Email
    const emailContainer = document.createElement("div");
    emailContainer.className = 'd-flex gap-3'
    const emailIcon = document.createElement("img");
    emailIcon.src = './mail.svg';
    const emailSpan = document.createElement("span");
    emailSpan.innerHTML = user.email;
    emailContainer.append(emailIcon);
    emailContainer.append(emailSpan);
    div.append(emailContainer);
    usersContainer.append(div);
    //Bio
    if(!!user.bio) {    
    const bioContainer = document.createElement("div");
    bioContainer.className = 'd-flex gap-3'
    const bioIcon = document.createElement("img");
    bioIcon.src = './bio.svg';
    const bioSpan = document.createElement("span");
    bioSpan.innerHTML = user.bio;
    bioContainer.append(bioIcon);
    bioContainer.append(bioSpan);
    div.append(bioContainer);
    usersContainer.append(div);
    }
}

const getUsers = async () => {
    const firebaseUsers = await firebase.firestore().collection('users').get();

    const users = [];

    for (let i =0; i < firebaseUsers.docs.length; i++) {
        const data = firebaseUsers.docs[i]?.data();
        if (!!data) {
            data.id = firebaseUsers.docs[i].id;
            users.push(data);
        }
    }

    return users;
}

const getUser = async (id) => {
    const firebaseUser = await firebase.firestore().collection('users').doc(id).get();
    let user = null;

    if (firebaseUser.exists) {
        const data = firebaseUser.data();
        user = data;
        user.id = firebaseUser.id;
    }

    return user;
}

const addUser = async (user) => {
    const newUser = await firebase.firestore().collection('users').add(user);

    const returnedUser = user;
    returnedUser.id = newUser.id;

    return returnedUser;
}

const removeUser = async () => {
    await firebase.firestore().collection('users').doc(id).delete();

    return id;
};

const renderLoader = () => {
   /* <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>*/
    const div = document.createElement("div");
    div.role = "status;"
    div.className = "spinner-border";

    const span = document.createElement("span");
    span.className = "visually-hidden";
    span.innerHTML = "Loading...";

    div.append(span);
    usersContainer.append(div);

}
 (async () => {
    renderLoader();
    const users = await getUsers();
    usersContainer.innerHTML = "";
    if(users.length === 0) {
        usersContainer.innerHTML = 'No users.';
    } else {
        for(let i = 0; i < users.length ; i++) {
            renderUser(users[i]);
        }
    }
 })();

 const clickAdd = async () => {
    const user = {};
    if(name.value) user.name = name.value;
    if(surname.value) user.surname = surname.value;
    if(email.value) user.email = email.value;
    if(bio.value) user.bio = bio.value;

    if(!user.name || !user.surname || !user.email) {
        alert('Missing user data');
        return;
    }

    const newUser = await addUser(user);
    name.value = "";
    surname.value = "";
    email.value = "";
    bio.value = "";

    renderUser(newUser);
 }


 
 addUserButton.addEventListener('click', clickAdd);