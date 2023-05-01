const http= require('http')

const Newserver=http.createServer((req,rej)=>{
if(req.url=='/'){
rej.write('hellow world')
}
});
Newserver.listen(3003);

    console.log('write it ')
