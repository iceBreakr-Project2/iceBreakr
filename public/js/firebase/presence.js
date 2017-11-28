


function setOnline(uid){
    var connected = $firebaseObject(connectedRef);
    var online = $firebaseArray(usersRef.child(uid+'/online'));
  
    connected.$watch(function (){
      if(connected.$value === true){
        online.$add(true).then(function(connectedRef){
          connectedRef.onDisconnect().remove();
        });
      }
    });
  }




