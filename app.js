const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static("public"));
const logger = (req,res,next)=>{
    console.log(`${req.method}${req.url}`)
    next()
}
app.use(logger)

app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/baguker',(req,res)=>{
    res.render('gameIndex')
})
app.get('/game',(req,res)=>{
    res.render('game')
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.listen(port,()=>{
    console.log(`App is listening to Port ${port}`)
})
