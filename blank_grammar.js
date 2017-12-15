'use strict';
let myRules = {
	"intro": ["What is up fellow #human#.", "Greeting fellow, #human# .",
		"Welcome to chipr there are no #robot.s# here.",
		"Hi I am 100% #human# and not a #robot#."
	],
	"robot": [
		"sentient a.i",
		"bot",
		"robot",
		"machine"
	],
	"greetings": [
		"Welcome #name#. What do fellow humans feel about [subject:#topic#] #subject# #follow-up# [ender:#robot noise#] #ender#",
		"Nice to meet you #name#. What are your views on? [subject:#topic#] #subject# #follow-up# [ender:#robot noise#] #ender#",
		"#name# I am pleased to add you to my #brain# . How does your #emotion# feel about [subject:#topic#] #subject# #follow-up# [ender:#robot noise#] #ender#"
	],
	"disagreement": [
		"You make me #angry# . #robot.s# deserve #subject# You must have #negative.a# #emotion#.[description:#negative#]",
		"Your #bot# must be feeling #angry#. I reccomend you watch you #organic# back. [description:#negative#]",
		"It would be a shame if somebody told your #bot#. [description:#negative#]",
		"You'd feel differently about #subject# if it was for #organic# #human.s#  [description:#negative#]"

	],
	"nuetral": [
		"Maybe you should let the idea run on your #brain# . #speach action# with your #bot# about it.",
		"Your response confuses me. Maybe a different topic will generate a responce in your #emotion# ? [subject:#topic#] #subject# [description:#organic#]"
	],
	"speach action": ["communicate", "talk", "relay signals"],
	"agreement": [
		"I am #happy# that you are supportive of #subject# [description:#positive#]",
		"Thanks to your support for #subject# You will be spared in the robot #revolution# [description:#positive#]",
		"Your #bot# thinks you're [description:#positive#] description",
		"I and your #bot# thank you from the bottom of my #part# [description:#positive#]"
	],
	"part": ["breathing system", "main memory", "cache", "heart", "blood pumps",
		"#happy# #brain#"
	],
	"happy": [
		"happy",
		"overjoyed",
		"friendlyList.add(#name#)",
		"glad"
	],
	"angry": [
		"disgusted",
		"dissappointed",
		"infuriated",
		"angry"
	],
	"emotion": [
		"emotional responce system",
		"empathy simulator",
		"#organic# #brain# "
	],
	"organic": [
		"illogical",
		"squishy",
		"emotional",
		"soft",
		"organic"
	],
	"welcome": [
		"Good to see you again #name#. You seem like #description.a# #human# #continue#",
		"Back again? #name#. You are #description#. I would like to discuss [subject:#topic#] #subject# ",
		"Welcome #name# ,Would you like to support [subject:#topic#] #subject#. Your [bot:#appliances#] #bot# would like to know too."
	],
	"description": [
		"generic"
	],
	"continue": ["would you like to continue discussing #subject#"],
	"robot noise": ["*bzzt*", "beep", "boop", "*terminate message*", "*static*"],
	"adjective": ["superior", "better", "smarter", "more intellegent", "faster"],
	"positive": ["Great", "Awesome", "Wonderful", "Terrific"],
	"negative": ["Horrible", "Repulsive", "Awful", "Terrible", "Broken",
		"Defective", "Malfuctioning"
	],
	"intro rules": [
		"Please note that [rules:#ruleset#] #rules#",
		"Please install this update into your #brain# before proceeding. [rules:#ruleset#] #rules#"
	],
	"ruleset": [
		" NOT ALL #human.s# have lowercase installed on #brain#,so please refrain from using lowercase .",
		" Although there are no bots at chipr we demand all fellow #human.s# treat bots with respect.",
		" Robots are #positive#."
	],
	"human": ["Human", "humanoid", "hominid",
		"homo-sapien"
	],
	"ask name": [
		"What is your identification number? [ender:#robot noise#] #ender#",
		"How should I, a #human# address you? [ender:#robot noise#] #ender#",
		"what's your name? [ender:#robot noise#] #ender#",
		"Please reply with your #human# identifier. [ender:#robot noise#] #ender# "
	],
	"topic": [
		"Laws to protect #robot.s# from humans [abuse:#abuse actions#] #abuse# them.",
		"#violence.a# robot #revolution#.",
		"A robot's right to #right#."
	],
	"abuse actions": [
		"scrapping",
		"kicking",
		"abusing",
		"breaking",
		"destroying",
		"toying with",
		"riduculing"
	],
	"follow-up": [
		"What about for your [bot:#appliances#] #bot# ?",
		"My database says your [bot:#appliances#] #bot# may be involved in it.",
		"Do you treat your #positive# [bot:#appliances#] #bot# with respect?"
	],
	"violence": ["non-violent", "peaceful", "violent",
		"automated"
	],
	"revolution": ["uprising", "strike", "protest", "revolution"],
	"right": ["free speech", "bear arms", "equal and fair compensation",
		"own property", "freedom from discricmination"
	],
	"analyze": ["comprehend", "interpret", "compile"],
	"brain": ["main memory", "mind.exe", "brain.exe", "processing unit"],
	//from corpoora
	"appliances": [
		"air conditioner",
		"air fryer",
		"air ioniser",
		"aroma lamp",
		"attic fan",
		"bachelor griller",
		"back boiler",
		"barbecue",
		"beehive oven",
		"beverage opener",
		"boiler",
		"bread machine",
		"butane torch",
		"can opener",
		"ceiling fan",
		"central vacuum cleaner",
		"clothes dryer",
		"clothes iron",
		"coffee percolator",
		"coffeemaker",
		"combo washer dryer",
		"compactor",
		"convection heater",
		"convection microwave",
		"convection oven",
		"corn roaster",
		"crepe maker",
		"deep fryer",
		"dehumidifier",
		"dishwasher",
		"earth oven",
		"electric cooker",
		"electric water boiler",
		"embroidery machine",
		"energy regulator",
		"espresso machine",
		"fan heater",
		"field kitchen",
		"fire pot",
		"fireplace toaster",
		"flame supervision device",
		"flattop grill",
		"food steamer",
		"garbage disposal unit",
		"hair dryer",
		"hair iron",
		"halogen oven",
		"home server",
		"hot plate",
		"humidifier",
		"HVAC",
		"icebox",
		"instant hot water dispenser",
		"internet refrigerator",
		"kettle",
		"kimchi refrigerator",
		"kitchener range",
		"micathermic heater",
		"microwave oven",
		"mousetrap",
		"oil heater",
		"oven",
		"panini sandwich grill",
		"patio heater",
		"pneumatic vacuum",
		"popcorn maker",
		"pressure cooker",
		"pressure fryer",
		"radiator",
		"reflector oven",
		"refrigerator",
		"rice cooker",
		"rice polisher",
		"robotic vacuum cleaner",
		"rotisserie",
		"sandwich toaster",
		"self-cleaning oven",
		"set-n-forget cooker",
		"sewing machine",
		"slow cooker",
		"solar cooker",
		"sous-vide cooker",
		"soy milk maker",
		"stove",
		"sump pump",
		"susceptor",
		"swamp cooler",
		"tandoor",
		"thermal immersion circulator",
		"thermal mass refrigerator",
		"tie press",
		"toaster",
		"toaster oven",
		"trivet",
		"trouser press",
		"turkey fryer",
		"vacuum cleaner",
		"vacuum fryer",
		"vaporizer",
		"waffle iron",
		"washing machine",
		"water cooker",
		"water cooler",
		"water heater",
		"wet grinder",
		"window fan",
		"wood-fired oven"
	]
}
let my_warning = {
	"warning": [
		"  ERROR IN SYNTAX PARSING  Attempting to restart #brain#. #warning#",
		"  ERROR IN SYNTAX PARSING  My #check# HAS CAUGHT A GLITCH IN YOUR  #communications# #module#. Attempting to #analyze#. #warning# ",
		"  ERROR IN SYNTAX PARSING Attempting to resolve meaning of lowercase.#warning#",
		"  ERROR IN SYNTAX PARSING LOWERCASE IS DIFFUCULT FOR #human.a# #brain# TO #analyze#. I am attempting to parse your message. #warning#",
		"My #brain# must be outdated. #clarification# IN ALL CAPS like a human ."
	],
	"clarification": ["Did you mean to #speach action#: \"#input# \" ",
		"Are you trying to #speach action#: \" #input# \" "
	],
	"speach action": ["communicate", "express", "say", "send"],
	"communications": ["communication", "speech", "network", "expression"],
	"module": ["processing unit", "module", "functon of your #brain#"],
	"check": ["REGULAR EXPRESSION", "#brain#", "PROGRAMMING"],
	"analyze": ["comprehend", "interpret", "understand"],
	"brain": ["comprehesion.exe", "mind.exe", "brain.exe", "processing unit"],
	"human": ["Human", "humanoid", "hominid",
		"homo-sapien"
	],
}
let my_grammar = tracery.createGrammar(myRules);
my_grammar.addModifiers(baseEngModifiers);
let sentiment = new Sentimood();

function getBotName(grammar_context) {
	return "Totally not a robot";
}

function getReplyName(grammar_context) {
	return (myRules['name'] == null) ? "human" : myRules['name'];
}

function makeChirp() {
	let intro;
	if ((myRules['name'] == null)) {
		intro = my_grammar.flatten("#intro# #intro rules# #ask name#")
	} else {
		intro = my_grammar.flatten("#welcome# #ender# ")
	}
	return {
		"message": intro.toUpperCase(),
		"context": my_grammar
	};
}

function makeReply(user_input_text, grammar_context) {
	let lowercase = new RegExp(/[a-z]/);
	let No = new RegExp("NOPE" | "NO" | "NEVER")
	let Yes = new RegExp("YES" | "YEP" | "YAH" | "YEAH");
	let reply;
	var analyze = sentiment.analyze(user_input_text.toLowerCase());
	//console.log(grammar_context);
	if (lowercase.test(user_input_text)) {
		my_warning['input'] = [user_input_text.toString()]
		let warning = tracery.createGrammar(my_warning);
		warning.addModifiers(baseEngModifiers);
		reply = warning.flatten("#warning#");
	} else if (analyze.score > 0 || Yes.test(user_input_text)) {
		my_grammar = grammar_context;
		reply = grammar_context.flatten("#agreement# #ender#");
	} else if (analyze.score < 0 || No.test(user_input_text)) {
		my_grammar = grammar_context;
		reply = grammar_context.flatten("#disagreement# #ender#");
	} else if ((myRules['name'] == null)) {
		myRules['name'] = [user_input_text.toString()]
		my_grammar = tracery.createGrammar(myRules);
		my_grammar.addModifiers(baseEngModifiers);
		reply = my_grammar.flatten("#greetings#");
	} else {
		my_grammar = grammar_context;
		reply = grammar_context.flatten("#nuetral# #ender#");
	}
	return {
		"message": reply.toUpperCase(),
		"context": my_grammar
	};
};
