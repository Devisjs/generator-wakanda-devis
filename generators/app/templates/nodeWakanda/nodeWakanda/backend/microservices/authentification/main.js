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
    role:  "auth",
    action: "currentUser"
}, CurrentUser);

auth.add({
    role: "auth",
    action: "currentUserBelongsTo"
}, CurrentUserBelongsTo);

function Login(args, done) {
    done(loginByPassword(args.login, args.password));
}

function Logout(args, done) {
    done(logout());
}

function CurrentUser(args, done) {
    done(directory.currentUser);
}

function CurrentUserBelongsTo(args, done) {
    done(directory.currentUserBelongsTo(args.group));
}
module.exports=auth;
