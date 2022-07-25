const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

// api/users/{id} première manière destructuration de la méthode get
app.get('/api/users/:id', (req, res)=> {
    const {id} = req.params;
    const user = User.findById(id);
});


// api/users/{id} deuxième manière destructuration de la méthode get
app.get('/api/users/:id', ({params:{id}}, res)=> {
    const user = User.findById(id);
});

// première manière de destructuration de la méthode put
app.put('/app/users/:id', (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const user = User.findByIdAndUpdate(id, body);
});

// deuxième manière de destructuration de la méthode put
app.put('/app/users/:id', ({body, params:{id}}, res) => {
    //const {body, params:{id}} = req;
    const user = User.findByIdAndUpdate(id, body);
});

app.listen(5000,()=>{
    console.log("Le serveur écoute sur le port 5000");
})