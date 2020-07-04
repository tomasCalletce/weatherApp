const express = require('express')
const hbs = require('hbs')
const path = require('path')
const weather = require('./serv')

const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')





const app = express()

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.render('index',{
        name : 'tomas',
        location : "home"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name : 'tomas',
        location : "about"
    })
})

app.get('/support',(req,res)=>{
    res.render('support',{
        name : "tomas",
        location : "support"
    })
})

app.get('/api',(req,res)=>{
    
    if (!req.query.location){
       return res.render('404',{
            name : 'tomas',
            location : 'this location is not supported'
        })
    }else{

        weather.getweatherData(req.query.location,(err,information)=>{
    
            if (err){
                res.send(err)
            }else{
                res.send(information)
            }
        })
        
        
    }

    

    
    
})

app.get('*',(req,res)=>{
    res.render('404',{
        name : 'tomas',
        location : 'medellin'
    })
})




app.listen(3004)