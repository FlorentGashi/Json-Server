var users = [
    {id: 1, name: 'Granit', age: '30', phone: '049666456'},
    {id: 2, name: 'Bekim', age: '25', phone: '044600386'}
];

function displayUsers() {
    var tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    users.forEach(function(user){
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = user.id;
        row.insertCell(1).textContent = user.name;
        row.insertCell(2).textContent = user.age;
        row.insertCell(3).textContent = user.phone;

        var updateCell = row.insertCell(4);
        var updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = function() { updateUser(user); };
        updateCell.appendChild(updateButton);

        var deleteCell = row.insertCell(5);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() { deleteUser(user); };
        deleteCell.appendChild(deleteButton);
    });
}

function updateUser(user) {
    document.getElementById('userId').value = user.id;
    document.getElementById('userName').value = user.name;
    document.getElementById('userAge').value = user.age;
    document.getElementById('userPhone').value = user.phone;
}

function saveUser() {
    var userId = document.getElementById('userId').value;
    var userName = document.getElementById('userName').value;
    var userAge = document.getElementById('userAge').value;
    var userPhone = document.getElementById('userPhone').value;

    var userIndex = users.findIndex(function(user) {
        return user.id == userId;
    });

    if (userIndex !== -1) {
        users[userIndex].name = userName;
        users[userIndex].age = userAge;
        users[userIndex].phone = userPhone;

        document.getElementById('userForm').reset();
        displayUsers();
    }
}

function deleteUser(user) {
    var confirmation = confirm('A je i sigurt qe don me fshi zotni a jo?');
    if (confirmation) {
        users = users.filter(function(u) {
            return u.id !== user.id;
        });

        displayUsers();
    }
}

displayUsers();
