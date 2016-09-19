let model = requireNode("devis");
let options = [];

model.add({
    role: "model",
    action: "initialize"
}, function(args, done) {
    for (var attribute in args)
        options[attribute] = args[attribute];

    done("initialization complete");
});

model.add({
        role: "model",
        action: "GET"
    },
    GET);

model.add({
    role: "model",
    action: "POST"
}, POST);

model.add({
    role: "model",
    action: "PUT"
}, PUT);

model.add({
    role: "model",
    action: "DELETE"
}, DELETE);

function DELETE(args, done) {
    let fin = false;
    let dataClass = args.dataClass;
    let EntityToRemove = ds[dataClass](args.ID)
    if (EntityToRemove) {
        EntityToRemove.remove();
        fin=true;
    }
    done(fin);
}

function PUT(args, done) {
    let fin = false;
    let dataClass = args.dataClass;

    let EntityToUpdate = ds[dataClass](args.ID) //args.ID={__KEY:10} or ={ID:10}
    if (EntityToUpdate) {
        try {
            for (var attribute in args.Update) {
                EntityToUpdate[attribute] = args.Update[attribute];
            }
            EntityToUpdate.save();
            fin = true;
        }
        catch (e) {
            fin = e;
        }
    }
    done(fin);
}

function POST(args, done) {
    let fin;
    let dataClass = args.dataClass;

    if (args.Add) { //add new Entity
        var newEntity = ds[dataClass].createEntity();

        try {

            for (var attribute in args.Add) {
                newEntity[attribute] = args.Add[attribute];
            }
            newEntity.save();
            fin = true;
        }
        catch (e) {
            fin = e;
        }
        done(fin);
    }
}

function GET(args, done) {
    let fin;
    let dataClass = args.dataClass;
    let func = args.func;
    if (args.data) {
        let searchData;
        if (!func) fin = ds[dataClass](args.data); //args.data must be json
        else {
            if (func == "find") {
                searchData = getDataFromJson(args.data);
            }
            else searchData = args.data;
            fin = ds[dataClass][func](searchData); //example ds.dataClass.query("firstname ==:1","is")
        }
    }
    else
        fin = ds[dataClass][func]();
    done(fin);
}

function getDataFromJson(data) {
    let res = "";
    let i = 0;
    for (var k in data) {
        if (i != 0) res += "&&";
        i++;
        res += k + "=" + data[k];

    }
    return res;
}
module.exports = model;
