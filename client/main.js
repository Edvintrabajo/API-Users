const url = 'http://10.11.100.9:3005/api/users';
const divusers = document.getElementById('users');

const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const getUser = async (id) => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
}

const deleteUser = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}

const addUser = async () => {
    const randomNumber = Math.floor(Math.random() * 10000) + 1;
    let user = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        img: `https://robohash.org/${randomNumber}`
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}

const editUser = async (id) => {
    let user = {
        name: document.getElementById('name' + id).value,
        surname: document.getElementById('surname' + id).value,
        age: document.getElementById('age' + id).value,
        email: document.getElementById('email' + id).value
    }
    const response = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}

const users = getUsers();
users.then(data => {
    divusers.innerHTML = data.map(user => {
        return `<div class="user">
                    <img src="${user.img}" alt="image">
                    <div class="data">
                        <div class="left">
                            <h3>${user.name}</h3>
                            <p>${user.surname}</p>
                            <p>${user.age}</p>
                            <p>${user.email}</p>
                        </div>
                        <div class="right">
                            <button class="btn btn-primary green" data-bs-toggle="modal" data-bs-target="#exampleModalEdit${user.id}"><i class="fa-solid fa-pen"></i></button>
                            <button class="btn btn-danger red" data-bs-toggle="modal" data-bs-target="#exampleModalDelete${user.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
                
                <div class="modal fade" id="exampleModalDelete${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group mt-3 bg">
                                        <button onclick="deleteUser(${user.id})" type="submit" class="btn btn-danger" id="delete-button">Delete</button>
                                        <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div class="modal fade" id="exampleModalEdit${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="name${user.id}">Name</label>
                                        <input type="text" class="form-control" id="name${user.id}"
                                            aria-describedby="nameHelp" placeholder="Enter name" value="${user.name}"
                                            required>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label for="surname${user.id}">Surname</label>
                                        <input type="text" class="form-control" id="surname${user.id}" value="${user.surname}"
                                            placeholder="Surname"
                                            required>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label for="age${user.id}">Age</label>
                                        <input type="number" class="form-control" id="age${user.id}" value="${user.age}"
                                            placeholder="Age"
                                            required>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label for="email${user.id}">Email</label>
                                        <input type="email" class="form-control" id="email${user.id}" value="${user.email}"
                                            placeholder="Email"
                                            required>
                                    </div>
                                    <div class="form-group mt-3 bg">
                                        <button type="submit" 
                                        onclick="editUser(${user.id})"
                                        class="btn btn-success" id="edit-button">Edit</button>
                                        <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>   

                `
    }).join('');
});

