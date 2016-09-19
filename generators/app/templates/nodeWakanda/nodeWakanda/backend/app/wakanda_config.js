options=[
        config={
                host:"127.0.0.1",
                port:"8081",
                path:"/rest",
                method: 'POST',
                login:"ismailrei",
                password:"182290a+",
                delete:"$method=delete",
                logout:"$directory/logout",
                loginLink:"$directory/login",
                currentUser:"$directory/currentUser",
                update:"$method=validate&$method=update",
                belongsTo:"$directory/currentUserBelongsTo"
        }]
        
module.exports=options;