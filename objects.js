let users = [
    {
        username: "Hector",
        email: "paquito1981@outlook.com",
        password: "Amoamimia4000!",
        subscriptionStatus: "VIP",
        discorId: "paquito81",
        lessonsCompleted: [0,1]
    },
    {
        username: "David",
        email: "davidpotatoe@yahoo.com",
        subscriptionStatus: "VIP",
        discorId: "Davidpotatoe",
        lessonsCompleted: [0, 1, 2, 3],
    },
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
            return;
        }
        
    }
    console.log('could not find an email that matches')
}

login("paquito1981@outlook.com", "Amoamimia4000!");

/**
 * Create a register function that accepts:
 * - username
 * - email
 * -password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 * 
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the 'users' array
 */

function register(user){
    users.push(user);
}

register({
    username:'paquito81',
    email: 'paquito1981@outlook.com',
    password: 'Amoamimia4000',
    subscriptionStatus: 'VIP',
    discordId: 'paquito#000',
    lessonsCompleted: [0, 1]
});

    console.log(users);