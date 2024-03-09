import express from  'express';
import path  from "path";
import hbs from  "hbs";
import { fileURLToPath } from 'url';


const app = express();
const PORT=3000;


// public static path
const staticPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../public");
const staic_path = path.join(path.dirname(fileURLToPath(import.meta.url)), "../templates/views");
const staic_patials = path.join(path.dirname(fileURLToPath(import.meta.url)), "../templates/partials");



app.set( "view engine", "hbs" );  
app.set( "views", staic_path );  
hbs.registerPartials(staic_patials);

app.use(express.static(staticPath)); // set the static files to serve


app.get("/", (req, res) => {
    res.render("index");
});
app.get("/home", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});


// default page if any not ,match using *
app.get("*", (req, res) => {
    res.render("404error");
});

app.listen(PORT, ()=>{
    console.log('Server is running on port 3000')
});