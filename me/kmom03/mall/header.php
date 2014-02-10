<!doctype html>
<html lang='en' class='no-js'>
<head>
<meta charset='utf-8' />
<title><?=isset($title) ? $title : 'Template for testprograms in JavaScript'?></title>
<link rel="stylesheet/less" type="text/css" href="style.less">
<script src="../../kmom03/mall/js/less.min.js"></script>
<script src="../../kmom03/mall/js/modernizr.js"></script>
</head>
<body>
<header>
<?php  
$srcUrl = '../../source.php?dir=kmom03';
//$srcUrl = '../../source.php?dir=kmom01/&amp;file=index.php#file';
?>
	<nav>
		<ul>
			<li><a href='../../index.php'>Home</a></li>
			<li><a href='../../report.php'>Report</a></li>
			<li><a href='../../assignments.php'>Assignments</a>
				<ul>
					<li><a href='#'>Kmom01</a>
						<ul>
							<li><a href='../../kmom01/resize-div/'>Change Size</a></li>
							<li><a href='../../kmom01/baddie-move/'>Baddie</a></li>
							<li><a href='../../kmom01/baddie-transform/'>Transforms</a></li>
						</ul>
					</li>
					<li><a href='#'>Kmom02</a>
						<ul>
							<li><a href='../../kmom02/literals/'>Literals and identifiers</a></li>
							<li><a href='../../kmom02/math/'>Math in JavaScript</a></li>
							<li><a href='../../kmom02/dice/'>Throwing a dice</a></li>
							<li><a href='../../kmom02/string/'>Creating strings</a></li>
							<li><a href='../../kmom02/ball/'>move a ball</a></li>
							<li><a href='../../kmom02/button/'>Button</a></li>
							<li><a href='../../kmom02/boulder-dash/'>Boulder Dash</a></li>
							<li><a href='../../kmom02/roulette/'>Roulette</a></li>
						</ul>
					</li>
					<li><a href='#'>Kmom03</a>
						<ul>
							<li><a href='../boxes/'>Surprises</a></li>

						</ul>
					</li>
				</ul>
			</li>
			<li><a href='<?=$srcUrl?>'>Source Code</a></li>
		</ul>
	</nav>
</header>


