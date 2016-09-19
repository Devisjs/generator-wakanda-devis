let fs = require('fs'),
    path = require('path');

function getDirectories(srcpath) {
    this.req = "devis=requireNode('devis');";

    fs.readdirSync(srcpath).filter((file) => {

        if (fs.statSync(path.join(srcpath, file)).isDirectory())
            req += "\ndevis.usePath('microservices/" + file + "/main');";
    });

    fs.readFile('app/client.json', 'utf8', (err, data) => {
        obj = JSON.parse(data);
        if (Object.keys(obj).length != 0) {
            this.req += "\ndevis.client({";
            let i = 1;
            for (let cl in obj) {
                this.req += cl + ":'" + obj[cl] + "'";
                if (i++ != Object.keys(obj).length)
                    this.req += ",";
            }
            this.req += ")};";
        }
        this.req += "\ndevis.listen({host:'127.0.0.1',port:3030});";
        fs.writeFile("app/root.js", req, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}

getDirectories('microservices');
