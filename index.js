const Koa = require('koa');
const app = new Koa();

app.use( ctx => {
    ctx.body = "hello koa";
    const url = ctx.req.url;

    if(url === "/") {
       ctx.res.writeHead(200, {"Content-Type": "text/html"}); 
       ctx.res.write("<h2>Anasayfaya Hosgeldiniz!</h2>");
    }
    else if(url === "/about") {
        ctx.res.writeHead(200, {"Content-Type": "text/html"}); 
        ctx.res.write("<h2>About Sayfasina Hosgeldiniz!</h2>");
     }
     else if(url === "/iletisim") {
        ctx.res.writeHead(200, {"Content-Type": "text/html"}); 
        ctx.res.write("<h2>Iletisim_Sayfasina_Hosgeldiniz!</h2>");
     }else {
        ctx.res.writeHead(404, {"Content-Type": "text/html"}); 
        ctx.res.write("<h2>404_Sayfa_Bulunamadi!</h2>");         
     }
});

const port = 3000;
app.listen(port);