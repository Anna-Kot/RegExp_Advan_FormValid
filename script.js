let form = document.forms.f1;
let getID = id => document.getElementById(id);
let loginRegExp = /^[a-zA-Z]{4,16}$/i;
let passwordRegExp = /^[a-zA-Z0-9_\-\.]{4,16}$/i;
let emailRegExp = /^[a-zA-Z0-9]{4,20}@[a-z]{1,9}\.[a-z]{2,6}$/i;
let newArr=[];
getID('login').onchange = function() {
    let testName = loginRegExp.test(getID('login').value);
    if(testName) {
        this.style.border ='2px solid green'
    }
    else {
        this.style.border = '2px solid red'
    }
}
getID('password').onchange = function() {
    let testName = passwordRegExp.test(getID('password').value);
    if(testName) {
        this.style.border ='2px solid green'
    }
    else {
        this.style.border = '2px solid red'
    }
}
getID('add_user').onclick = function() {
    if(emailRegExp.test(getID('email').value) && loginRegExp.test(getID('login').value) && passwordRegExp.test(getID('password').value)) {
        let newObj = {
            login: getID('login').value,
            password: getID('password').value,
            email: getID('email').value
        }
        newArr.push(newObj);
        getID('login').value='';
        getID('password').value='';
        getID('email').value='';
        render();
        console.log(newArr);
    }
}
let userIndex;
function render() {
    // debugger
    document.querySelector('.list-table').innerHTML='';
    let thead = document.createElement('tr');
    let th1 = document.createElement('td');
    let th2 = document.createElement('td');
    let th3 = document.createElement('td');
    let th4 = document.createElement('td');
    let th5 = document.createElement('td');
    let th6 = document.createElement('td');
    thead.setAttribute('class', 'new_tr');
    th1.innerHTML = '# ';
    th2.innerHTML = 'Login ';
    th3.innerHTML = 'Password ';
    th4.innerHTML = 'Email ';
    th5.innerHTML = 'Edit ';
    th6.innerHTML = 'Delete ';
    document.querySelector('.list-table').append(thead);
    thead.append(th1);
    thead.append(th2);
    thead.append(th3);
    thead.append(th4);
    thead.append(th5);
    thead.append(th6);
    // document.querySelector('.list_new-table').innerHTML='';
    for(let i=0; i<newArr.length; i++){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let ed = document.createElement('input');
        let del = document.createElement('input');
        tr.setAttribute('data-index', i);
        del.setAttribute('data-index', i);
        td1.innerHTML = i+1;
        td2.innerHTML = newArr[i].login;
        td3.innerHTML = newArr[i].password;
        td4.innerHTML = newArr[i].email;
        ed.setAttribute('type', 'button');
        ed.setAttribute('class', 'edit');
        ed.value = 'Edit';
        del.setAttribute('type', 'button');
        del.setAttribute('class', 'delete');
        del.value ='Delete';
        td5.appendChild(ed);
        td6.appendChild(del);
        document.querySelector('.list-table').append(tr);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        console.log(tr);
        td6.onclick = function() {
           this.parentElement.remove();
           newArr.splice(i,1);
           console.log(newArr);
           render();
        }
        td5.onclick = function() {
            getID('login').value=td2.innerHTML;
            getID('password').value=td3.innerHTML;
            getID('email').value=td4.innerHTML; 
            document.querySelector('#add_user').style.display = 'none';
            document.querySelector('#edit_user').style.display = 'block';
            userIndex = i;
        }

    }
}
getID('edit_user').onclick = function() {
    if(emailRegExp.test(getID('email').value) && loginRegExp.test(getID('login').value) && passwordRegExp.test(getID('password').value)) {
        let newObj = {
            login: getID('login').value,
            password: getID('password').value,
            email: getID('email').value
        }
        // newArr.push(newObj);
        newArr[userIndex]=newObj;
        getID('login').value='';
        getID('password').value='';
        getID('email').value='';
        render();
        console.log(newArr);
    }
}

