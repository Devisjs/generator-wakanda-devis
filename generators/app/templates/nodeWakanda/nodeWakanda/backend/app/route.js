let devis;

function DELETE(req, res) {
  devis.act({
    clientId: 1,
    role: "model",
    action: "DELETE"
  }, {
    ID: req.params.id,
    dataClass: req.params.table
  }, function(result) {
    console.log(result);
  });
}

function GET(req, res) {
  req.params.id ? ID = req.params.id : ID = 518;
  let cond = {
    ID: ID
  };
  devis.act({
    clientId: 1,
    role: "model",
    action: "GET"
  }, {
    data: cond,
    dataClass: req.params.table
  }, function(result) {
    console.log(result);
  });
}

function PUT(req, res) {
  devis.act({
    clientId: 1,
    role: "model",
    action: "PUT"
  }, {
    ID: req.params.id,
    dataClass: req.params.table,
    Update: req.body
  }, function(result) {
    console.log(result)
  });
}

function POST(req, res) {
  devis.act({
    clientId: 1,
    role: "model",
    action: "POST"
  }, {
    ID: req.params.id,
    Add: req.body
  }, function(res) {
    console.log(res)
  });
}

module.exports = function route(r) {
  devis = r.devis;
  return {
    GET: GET,
    POST: POST,
    PUT: PUT,
    DELETE: DELETE
  }
}
