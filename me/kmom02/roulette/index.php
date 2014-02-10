<?php $title = 'Template for test program'; 
	  include(__DIR__ . '../../mall/header.php'); 
?>

<div id='flash'>
<p id='text' class='red'>Hi this text should be replaced when page and DOM is loaded.</p>
<div id='table'></div>
<div id='status'>
<form>
<lable>Bankroll: <input id='bankroll' type='number' value='100' /></lable>
<lable>Bet: <input id='bet' type='number' value='10' /></lable>
<lable>Color: <select id='color'><option value='green'>Green</option><option value='black'>Black</option><option value='red'>Red</option>
</select></lable>
<input id='button' type='button' value='Roll' />
</div>
<div id='log'></div>
</div>

<?php include(__DIR__ . '../../mall/footer.php'); ?>