let auth = requireNode("devis");

auth.add({
    role: "auth",
    action: "login"
}, Login);

auth.add({
    role: "auth",
    action: "logout"
}, Logout);

auth.add({
    role: "auth",
    action: "currentUser"
}, CurrentUser);

auth.add({
    role: "auth",
    action: "currentUserBelongsTo"
}, CurrentUserBelongsTo);

function Login(args, done) {
    directory.createUserSession({
        ID: generateUUID(),
        name: args.login,
        fullName:directory.user(args.login).fullName,

        belongsTo: [args.groupe]
    });

    setCurrentSession(directory.currentSession.ID, false);
	//loginByPassword(args.login,args.password, 60*60);
	console.log(directory.currentUser);
    done(null,"login successful");
}

function Logout(args, done) {
    done(null, logout());
}

function CurrentUser(args, done) {
    done(null, directory.currentUser);
}

function CurrentUserBelongsTo(args, done) {
    done(null, directory.currentUserBelongsTo(args.group));
}
module.exports = auth;
