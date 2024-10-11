
const express = require('express');
const app = express();
const port = 8080;

const songs = ["All This and Heaven Too","All Through the Day"," Among My Souvenirs","An Old Fashioned Christmas","As Long as I Live","Buds Won't Bud","Bye Bye Baby",
"Can't You Just See Yourself?", "Castle Rock","Catana","Change Partners","Charmaine","Chattanoogie","Cheek to Cheek","Cherry Pies Ought to Be You","Chicago ","Christmas Dreaming","Christmas Memories",
"Fairy Tale","Faithful","Falling In Love with Love","Farewell, Farewell to Love","Feelin' Kinda Sunday"];

app.get('/', (req,res) =>{
    const randomIndex = Math.floor(Math.random()* songs.length);
    res.send(songs[randomIndex]);
});

app.get('/birth_date', (req,res) =>{
    res.send("December 12, 1915");
});

app.get('/birth_city', (req,res) =>{
    res.send("Hoboken, New Jersey");
});

app.get('/wives', (req,res) =>{
    const wives = ["Nancy Barbato",  "Ava Gardner", "Mia Farrow", "Barbara Marx", ];
    res.send(wives.join(', '));
});

app.get('/picture', (req,res) =>{
   
    res.redirect("https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg");
});

app.get('/public', (req,res) =>{
    res.send("Everybody can see this page");
});

app.get('/protected', (req,res) =>{
    const b64auth= req.headers.authorization;

    if (!b64auth){
        res.set('WWW-Authenticate','Basic realm="Restricted Area"');
        res.status(401).send('Not authorized.');
        return;
    
    }
    const credentials = Buffer.from(b64auth.split(' ')[1], 'base64').toString().split(':');
    username = credentials[0];
    password = credentials[1];

    if (username === 'admin' && password === 'admin'){
        res.send('Welcome, authenticated client');
    }

    else{
        res.status(401).send('Not authorized.');
    }
    
});

app.listen(port, () =>{
    console.log("server started " + port);
})