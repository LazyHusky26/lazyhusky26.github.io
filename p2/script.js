const users = [];
const user={}

const showLogin = () => {
    let str=`
    <div class='App-container'>
    <h1>Login Form</h1>
    <p><div id="dvMsg"></div></p>
    <p><input type="text" id="txtEmail" placeholder="Enter your email"></p>
    <p><input type="password" id="txtPass" placeholder="Enter your password"></p>
    <p><button onclick='validateUser()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
    let str=`
    <div class='App-container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
     <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <button onclick='addUser()'>Register</button>
    <p><button onclick='showLogin()'>Already have Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showHome = () => {
    let str=`
    <div class='App-container'>
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p><select>
        <option value=0>--select--</option>
        <option value=1>Deposit</option>
        <option value=2>Withdraw</option>
    </select></p>
    <p><input type="number" id="txtAmount" placeholder="Enter amount"></p>
    <p><button onclick="Transaction()">Submit</button></p>
    <button onclick='showLogin()'>Logout</button>
    <hr>
    <p>Current balance: ${user.balance}<p>
    </div>
    `
    root.innerHTML = str
}

const addUser = () => {
    const user = {
        name: document.getElementById("txtName").value,
        email: document.getElementById("txtEmail").value,
        pass: document.getElementById("txtPass").value,
        balance: 0
    }
    users.push(user);
    console.log(users);
    showLogin();
}

const validateUser = () => {
    let email = document.getElementById("txtEmail").value;
    let pass = document.getElementById("txtPass").value;
    let foundUser = users.find((u) => u.email === email && u.pass === pass);
    if (foundUser) {
        Object.assign(user, foundUser);
        showHome();
    } else {
        dvMsg.innerHTML = "Invalid email or password";
    }
}

const Transaction = () => {
    const type = document.querySelector("select").value;
    const amount = parseFloat(document.getElementById("txtAmount").value);
    if (type==1){
        user.balance += amount;
    }
    else if (type==2){
        if (user.balance >= amount){
            user.balance -=amount;
        }
        else {
            alert("Insufficient balance");
        }
    }
    showHome();
}
