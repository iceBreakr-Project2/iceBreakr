//Variables
// var matchList = [ //array of objects

// ];

//take all matches within distance.
//array of match objects with gender, interests, and matchCount.

//filter by matching gender pref.
//if user.genderPref !== match.gender
//remove match from array

//filter by age range pref.
//if user.ageRangelow is > match.age or user.ageRangeHigh is < match.age
//remove match from array

//compare lists of interests.
//for each user.interests if match.interests.includes()
//increment matchCount variable on match.

//return user with highest count of matches (pick random if more than one).
//for each match 
//if match.matchCount is > than the currentBestMatch.matchCount
//set currentBestMatch to the current match

//when finished export the currentBestMatch variable


// Console Testing
// ===========================================================
console.log("NODE USER: You're inside the apiRoutes.js file...");





// Global Vars
// =========================================================== 
var mostAlike = [];

var onlineUsers = [];

var online = {online: true};

updateStatus(online); 


function updateStatus(isOnline) {
    $.ajax({
      method: "PUT",
      url: "/api/users/online",
      data: isOnline
    }).done(usersOnline);
  }
  
function usersOnline(){
	$.get("/api/users/online", function(data){

		var userOnline = data;
		console.log(userOnline);
	})
}

function usersMatch(){
	if (online){

	}
}


//             mostAlike = [{
//                 name: "",
//                 interests: "",
//                 TotalFriendDiff: 100000 //large num that is default --> ensures that any entered result to beat this data...
//             }];

//             console.log("\nHey Node User, this is the current request.body: ");
//             console.log(request.body); //help begin the diagnosis of the request body, and thus how to navigate through the issue.
//             console.log("\n");

//             var friendDiff = 0;
//             var newFriendList = request.body; //current user's recent input...
//             var newFriendScores = newFriendList.scores; //this will target ONLY the ARRAY of number values responding to the Survey Q's. 

//             function Users() {
//                 for (var i = 0; i < friendsList.length; i++) {
//                     console.log("friendsList.length = ");
//                     console.log(friendsList.length); //to review the length 
//                     console.log(friendsList); //to review the contents...
//                     console.log("\n");

//                     if (friendsList[i] !== newFriendList) { //this doesn't allow the list to be compared agains itself....
//                         console.log("This is friendsList[i]: ");
//                         console.log(friendsList[i]);
//                         console.log("\n");

//                         for (var n = 0; n < friendsList[i].scores.length; n++) {
//                             console.log("This is friendsList[i].scores[n]: " + friendsList[i].scores[n]);
//                             console.log("This is newFriendScores[n]: " + newFriendScores[n]);

//                             if (friendsList[i].scores[n] === newFriendScores[n]) { //using the same var "n" as the number to track through the "newFriendScores" Array, ensures that the same question values are being compared... (thus not comared OUT OF order.);
//                                 console.log("there was no difference");
//                             } else {
//                                 friendDiff += Math.abs(parseInt(friendsList[i].scores[n]) - parseInt(newFriendScores[n]));
//                                 console.log("difference (running total): " + friendDiff);
//                             }
//                         }
//                         console.log(friendDiff);
//                         console.log("\n");
//                         //
//                         if (friendDiff < mostAlike[0].TotalFriendDiff) { //new MATCH!!!!!
//                             mostAlike = [];
//                             mostAlike.push(friendsList[i]);
//                             console.log("Here is your New Best MATE: ");
//                             console.log(friendsList[i]);
//                             console.log("\n");
//                         } else if (friendDiff === mostAlike[0].TotalFriendDiff) { //TIED Match....
//                             console.log("There's a tie! See you match: ");
//                             mostAlike.push(friendsList[i]);
//                         } else {
//                             //return (this will exist the code bloc/)
//                             console.log("The previous match is still the best...");
//                         }
//                     } else { //if the friendsList[i] choice ended up being the same user as the newFriendsList... aka to prevent the user from ever matching his/her -self
//                         return compareFriends(); //this exists out of the code, but then starts again, as the compareFriends is called...
//                     }
//                 };
//             };
//             compareFriends(); //immediately invoked function....

//             console.log("The final best mate of the current match-up is.... ");
//             console.log(mostAlike);
//             console.log("\n");

//             friendsList.push(newFriendList);
//             console.log("This is the NEW full list of friends: ");
//             console.log(friendsList);
//             console.log("\n");

//             result.json(mostAlike);


//             res.json(results);
//         });


// }); //end of /api/friends app.post

// app.post("/results", function(request, result) {
//     console.log("Node User, this is the mostAlike var, from the /results App.Post: ");
//     console.log(mostAlike);
//     result.send(mostAlike);
//     //result.parse(mostAlike); --> this is NOT pulliung the JSON verions of the mostAlike, as it is pulling in the Global Variable above, whidh was last pusehd as an array, not JSON-stringified.....
// }); //end of /results app.post"