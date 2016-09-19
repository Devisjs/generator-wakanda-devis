//Define variables
let console = requireNode("console");
let app = requireNode("express")(),
  colors = requireNode("colors/safe"),
  data = require('./app/wakanda_config');
let bodyParser = requireNode('body-parser'),
  urlencodedParser = bodyParser.urlencoded({
    extended: false
  }),
  devis = requireNode('devis'),
  prefix = "/wakandas";

devis.client({
  id: 1,
  path: '\\\\\.\\pipe\\mynamedpipe'
}).setName("index");

func = require("./app/route")({
  devis: devis
});

devis.act({
  clientId: 1,
  role: "auth",
  action: "login"
}, {
  login: "ismailrei",
  password: "182290"
}, function(res) {
  console.log(res)
});
//Initialisation of our model

app.use(bodyParser.json());

app.get(prefix + '/:table/:id', func.GET);

app.delete(prefix + '/:table/:id', func.DELETE);

app.put(prefix + '/:table/:id', urlencodedParser, func.PUT);

app.post(prefix + '/:table', urlencodedParser, func.POST);


app.listen({
  type: 'http',
  port: '3333',
  host: '127.0.0.1',
  protocol: 'http'
});
