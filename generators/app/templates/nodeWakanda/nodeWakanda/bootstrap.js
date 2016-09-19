var filepath = File('/PROJECT/backend/index.js').path
var filepath2 = File('/PROJECT/backend/app/root.js').path
var worker2 = new NodeWorker(filepath2,'root')
var worker = new NodeWorker(filepath,'devis')