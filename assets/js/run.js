// janken
$(function () {
	var $player = $('.player'),
		$enemy = $('.enemy'),
		$judg = $('.judg p'),
		$playerTarget = $player.find('.list-janken li'),
		$enemyTarget = $enemy.find('.list-janken li'),
		$playerEvent = $playerTarget.find('a'),
		playerChose = '',
		enemyChose = '';

	$playerEvent.on('click', function (e) {
		e.preventDefault();
		playerChose = $(this).data('janken');
		console.log(playerChose);
		enemyRand();
	});

	function enemyRand() {
		$enemyTarget.fadeOut(100);
		$judg.fadeOut(100);
		setTimeout(function () {
			enemyChose = Math.floor(Math.random() * 3);
			console.log(enemyChose);
			$enemyTarget.eq(enemyChose).fadeIn();

			judg();
		}, 200);
	}

	function judg() {
		if (playerChose === 0) {
			if (enemyChose === 0) {
				$judg.text('あいこ').fadeIn();
			} else if (enemyChose === 1) {
				$judg.text('勝ち').fadeIn();
			} else {
				$judg.text('負け').fadeIn();
			}
		} else if (playerChose === 1) {
			if (enemyChose === 0) {
				$judg.text('負け').fadeIn();
			} else if (enemyChose === 1) {
				$judg.text('あいこ').fadeIn();
			} else {
				$judg.text('勝ち').fadeIn();
			}
		} else {
			if (enemyChose === 0) {
				$judg.text('勝ち').fadeIn();
			} else if (enemyChose === 1) {
				$judg.text('負け').fadeIn();
			} else {
				$judg.text('あいこ').fadeIn();
			}
		}
	}
});