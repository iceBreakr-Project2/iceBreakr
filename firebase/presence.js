//Creating Firebase Presence to use with Google Maps
var user = firebase.auth().currentUser;

//Sign up new users
var email = $("#inputEmail3").val().trim();
var password = $("#inputPassword3").val().trim();


//Needs to go in head of html 
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>

//Initialize Firebase >> hide this before the end in a PW file...
var config = {
    apiKey: "AIzaSyCK6hRlRpzJEd8RsN5hozVosxZalbgsQ0M",
    authDomain: "ice-breaker-app-165bd.firebaseapp.com",
    databaseURL: "https://ice-breaker-app-165bd.firebaseio.com",
    projectId: "ice-breaker-app-165bd",
    storageBucket: "ice-breaker-app-165bd.appspot.com",
    messagingSenderId: "673248316614"
};
firebase.initializeApp(config);

//Sign up existing users
function createProfile() {
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === "auth/weak-password") {
                alert("Your password is too weak. Please try again.. we don't want someone to break the ice for you!");
                console.log("User's password is too weak.");
            } else {
                alert(errorMessage)
                console.log("You have the current error message:" + errorMessage + ", and error code: " + errorCode + ".");
            }
            console.log(error);
        }
        //     
    })
};
//Click-Event for Sign-Up Button on HTML.
$("#sign-up").on("click", function() {
    createProfile();
    sendEmailVerification();
});


//Sign in existing users
function SignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    } 
    else {
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password' && wrongPass <= 2) {
                alert('Wrong password.');
                var wrongPass = 0;
                wrongPass++;
            } else if (errorCode === "auth/wrong-password" && wrongPass >= 3) {
                alert('Your account is now locked.  Please visit your email to reset your password.');
                sendPasswordReset();
            } 
            else {
                alert(errorMessage);
                }
            console.log(error);
                $("#sign-in").disabled = false;
                // [END_EXCLUDE]
            }
        });
    }
    $("#sign-in").disabled = true;
};
//Click-Event for Sign-In Button on HTML.
$("#sign-in").on("click", function() {
    SignIn();
});

//Get a user's profile
//To get a user's profile information, use the properties of an instance of User. F  
var name, email, photoUrl, uid, emailVerified;
if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
}


// since I can connect from multiple devices or browser tabs, we store each connection instance separately
// any time that connectionsRef's value is null (i.e. has no children) I am offline

var myConnectionsRef = new Firebase(config.databaseURL + '/users/:id/connections');
// stores the timestamp of my last disconnect (the last time I was seen online)
var lastOnlineRef = new Firebase(config.databaseURL + '/users/:id/lastOnline');
var connectedRef = new Firebase(config.databaseURL + '/.info/connected');
connectedRef.on('value', function(snap) {
    if (snap.val() === true) {
        // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
        // add this device to my connections list
        // this value could contain info about the device or a timestamp too
        var con = myConnectionsRef.push(true);
        // when I disconnect, remove this device
        con.onDisconnect().remove();
        // when I disconnect, update the last time I was seen online
        lastOnlineRef.onDisconnect().set(Firebase.ServerValue.TIMESTAMP);
    }
});

//Sends an email verification to the user.
function sendEmailVerification() {
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification()
        .then(function() {
            alert("Your email verification has been sent!");
            console.log("Email Verification has been sent to the user: " + user);
        });
}

//Sends an password reset email to the user.
function sendPasswordReset() {
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email)
        .then(function() {
            // [START_EXCLUDE]
            alert('Password Reset Email Sent!');
            console.log("Password Reset has been sent to the user: " + user);
            // [END_EXCLUDE]
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
            } else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
    // [END sendpasswordemail];
}

function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var emaildb = user.email;
            console.log("Email from database is: " + emaildb);
            console.log("Email from input is: " + email);

            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            // [START_EXCLUDE]
            $("#sign-in-status").text("Signed in"); //create div for this button...
            $("#sign-out").text("Sign out"); //if they click the sign-in button, then they will sign out. (Make this button on most pages...)
            $('#account-details').text(JSON.stringify(user, null, " ")); //CHECK OUT the 

            // if (!emailVerified) {
            //     $("verify-email").disabled = false; //make a verify email
            // }
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // [START_EXCLUDE]
            $("#sign-in-status").text("Signed out");
            $("#sign-in").text("Sign in");
            $("#account-details").text("null");
            // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        $("#sign-in").disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]
    $(document).on("click", "#sign-in", SignIn);
    $(document).on("click", "#sign-up", createProfile);

    window.onload = function() {
        initApp();
    };

    /** Note for above:
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
