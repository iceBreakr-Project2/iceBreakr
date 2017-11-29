/*user is person logged in to this account. match is other users who are available for matching. I am not sure where this
will go and where it will go and how it will data but the is the start of the matching logic.*/ 

//Variables
var matchList = [ //array of objects
	
];

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