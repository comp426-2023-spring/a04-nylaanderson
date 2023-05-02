const rps_choices = ["rock", "paper", "scissors"];
const rpsls_choices = ["rock", "paper", "scissors", "lizard", "spock"];

export default {
	rps_choice: rps_choices,
	rpsls_choices: rpsls_choices,
	
	
	rpsStd: function () {
		return (
			{ player: random(rps_choices) }
		);
	},

	rps: function (player_choice) {
		const opp_choice = random(rps_choices)
	
		return (
			{
				player: player_choice,
				opponent: opp_choice,
				result: gameWinner(player_choice, opp_choice)
			}	
		);
	},
	rpslsStd: function () {
		return ( {player: random(rpsls_choices) } );
	},

	rpsls: function(player_choice) {
		const opp_choice = random(rpsls_choices) 
	return ( 
		{ 
			player: player_choice,
			opponent: opp_choice,
			result: gameWinner(player_choice, opp_choice)
		}
	);
	},
}

function random(args) {
	return args[(Math.random() *  args.length) | 0]
}

function gameWinner(player, opponent) {
	if(player === "rock") {
		if(opponent === "rock") return "lose";
		if(opponent === "paper") return "lose";
		if(opponent === "scissors") return "win";
		if(opponent === "lizard") return "win";
		if (opponent === "spock") return "lose";
	}
	if(player === "paper") {
		if (opponent === "rock") return "win";
		if (opponent === "paper") return "lose";
		if (opponent === "scissors") return "lose";
		if (opponent === "lizard") return "lose";
		if (opponent === "spock") return "win";
	}
	if(player === "scissors") {
		if (opponent === "rock") return "lose";
		if (opponent === "paper") return "win";
		if (opponent === "scissors") return "lose";
		if (opponent === "lizard") return "win";
		if (opponent === "spock") return "lose";	
	}
	if(player === "lizard") {
		if (opponent === "rock") return "lose";
		if (opponent === "paper") return "win";
		if (opponent === "scissors") return "lose";
		if (opponent === "lizard") return "lose";
		if (opponent === "spock") return "win";
	}
	if (player === "spock") {
		if (opponent === "rock") return "win";
		if (opponent === "paper") return "lose";
		if (opponent === "scissors") return "win";
		if (opponent === "lizard") return "lose";
		if (opponent === "spock") return "lose";
	}
	return "lose";
}

