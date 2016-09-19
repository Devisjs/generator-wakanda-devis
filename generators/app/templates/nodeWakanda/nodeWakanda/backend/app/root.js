let dev=requireNode('devis');
dev.usePath('microservices/authentification/main');
dev.usePath('microservices/model/main');
dev.listen({path:'\\\\\.\\pipe\\mynamedpipe'});
