var app = angular.module('insultsApp', ['ngRoute']);
var which = 0;

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'home.html',
        controller: 'insultsCtrl',
    }).
    when('/ins', {
        templateUrl: 'insult.html',
        controller: 'insultsCtrl',
    }).
    otherwise({
        redirectTo: '/',
    });

}]);

app.controller('insultsCtrl', function ($scope) {
    $scope.vars = {
        firsts: ["Emaciated", "Irredeemably Pale", "Gnarled", "Elephantine", "Repulsive", "Orwellian", "Corpse-Reeking", "Genocidal", "Schizophrenic", "Fatally Colorblind", "Horrendously Dressed", "Malaysian", "Alcoholic", "Ill-Mannered", "Deathly Obese", "Pedophilic", "Neolithic", "Homophobic", "Sexually Open", "Criminally Unsuccessful", "Cowardly", "Violently Sick", "Washed-Up", "God-Cursed", "Vertically Challenged", "Piss-Drenched", "Deceptively Thin", "Cynical", "Too-Optimistic", "Casually Racist"],
        lasts: ["Minecraft Villager", "Belieber", "Nymphomaniac", "Kindergarten Dropout", "Banana Farmer", "Burn Patient", "Bath Salt Addict", "Python User", "Version of Madonna", "Stalin Lookalike", "Low-End Prostitute", "Medical Miracle", "Batman Villain", "Botox Freak", "Domestic Abuser", "Brad Pitt Lookalike", "Nebraskan", "Minstrel", "Jiggolo", "Transvestite", "Puppy-Stomper", "Tsarnaev Brother", "NBC Reporter", "Immigrant Child", "Alcoholic Horse", "Third-Party Member", "Ultra-Virgin", "Reactor Accident", "MMA Announcer", "Heroin Farmer"],
        verbals: ["Your love life has about as much hope as Taylor Swift's.", "When you go to the beach, do environmental activists come out and throw buckets of water on you?", "Rene Descartes once said 'I think, therefore I am.' Does that mean I'm only talking to myself?", "Hey, you know who you remind me of? Crack babies. Yeah, I WENT THERE.", "I really love your clothes. It's unfortunate that you're the one wearing them.", "If someone takes a picture of you, do you steal their soul?", "Judging by your face, your species reproduces asexually.", "Erectile dysfunction is perfectly normal. Don't get down about it. You might never get it up again.", "I love your outfit. But isn't Halloween in October?", "You look like a stick figure with a tapeworm.", "I love your hair today! It's so cute! And to think, I didn't know you were a transvestite.", "Be strong. Just because you're a burn victim doesn't mean your life has to get any worse.", "Hey, baby, did it hurt when you fell from heaven? Because, judging from your face, it really must have.", "Don't worry about how you look. What matters is on the inside. In your case, for example, a whole lot of terrible bone structure.", "You're so beautiful! Incidentally, my favorite artist is Picasso.", "Has anyone ever told you that you look like one of Michelangelo's statues? Specifically, those about the Black Death.", "You're like a Greek goddess- spiteful, angry, manipulative, and self-obsessed.", "I bet you'd do really well as an actor. You must have a lot of experience pretending to be somebody else.", "If breaking a mirror gives you seven years' bad luck, why did you shove your face through one?", "So hey, do you just look like a serial killer, or are there racks full of child corpses in your basement?", "I love your outfit. Baggy, stained, and roughly sewn is really in right now.", "Hey, shouldn't you be in a leper colony somewhere?", "Have I seen your face in movies? Zombie movies?", "Well, at least you have your health... wait... oh. Never mind.", "Man, yo mama so hairy, when she gave birth to you, you had carpet burn.", "Are you an orphan? Because if I had that face, I definitely would be.", "You should wear brighter lipstick. It would distract people from the rest of your face.", "Some people look pretty when they cry. Some people don't. You're just ugly.", "Are you the evil twin?", "I would ask if someone hit you with an ugly stick, but I think that would actually be an improvement.", "You're what would happen if a transsexual hobo had sex with a used tampon.", "Your face actively causes me physical pain.", "Don't commit suicide. You'd just be depriving us all of the satisfaction.", "Baby, you're a star- massive, distant, and prone to violent explosions."],
        r1: 0,
        r2: 0,
        r3: 0,
        newInsult: "",

        nameCalling: function () {
            which = 1;
        },

        back: function () {
            which = 0;
        },

        newInsultFunc: function () {
            if (which == 0) {
                console.log($scope.vars.verbals.length);
                $scope.vars.r3 = Math.floor(Math.random() * 30);
                $scope.vars.newInsult = $scope.vars.verbals[$scope.vars.r3];
            } else {
                $scope.vars.r1 = Math.floor(Math.random() * 30);
                $scope.vars.r2 = Math.floor(Math.random() * 30);
                $scope.vars.newInsult = $scope.vars.firsts[$scope.vars.r1] + " " + $scope.vars.lasts[$scope.vars.r2];
            }
        },
    };


});