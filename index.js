const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my second node server ');
});

const users = [
    { id: 0, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' }

]

app.get('/users', (req, res) => {
    const search = (req.query.search);

    // use quary parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting  the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.get('/fruis', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yemmy Yemmy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listering to port', port);
})