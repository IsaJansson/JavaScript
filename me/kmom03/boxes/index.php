<?php $title = 'Template for test program'; 
	  include(__DIR__ . '../../mall/header.php'); 
?>
<div id='content'>

<div id='box1' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>1.</h1>
<img class='example' src='img/jag.jpg' alt='mina ögon' width='500' /> 
<p>Detta är en bild på mig (eller rättare sagt mina ögon) från tiden då jag höll på mycket med Photoshop. 
Jag har tagit bilden och editerat den och tyckte av någon anledning att det var snyggt att klippa bort resten av ansiktet. 
Den är inte speciellt mycket redigerad men jag tror nog att jag vart på ögonen med lite ljus och kanske satt dit några extra fransar.
<p>
Om du klickar på den eller något annat element i denna ruta så kommer det att ändra färg. 
</p>
</div>


<div id='box2' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>2.</h1>
<img class='example' src='img/ring_ring.jpg' alt='Disney Land Tokyo' width="200" />
<p>In this photo Im at Disney Land in tokyo with my friend Mai who took this photo. 
If you click on the photo you will see how propagation works. Have fun!
</p>
<p>
If you press anywere else the box is only going to change color but the picture will stay the same. 
</p> 
</div>

<div id='box3' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>3.</h1>
<img class='example' src='img/brum_brum.jpg' alt='Testar motorcycklar' title='Jag testsitter motorcycklar på MC-mässan' width="250" />
 <p>
 Här ser ni en bild på mig när jag var på MC-mässan i stockholm och kollade på nya fina motorcyklar. 
 Denna bild är igentligen helt irrelevant för denna övning förutom att man kan använda en pipett - förutsatt att man har ett sådant plugin - för att hämta färger ur bilden och lägga dem till din palett. 
 </p>
 <p>
 Om du är en mästare på att komma ihåg hexkoder i huvudet är det annars bara att skriva in dem i rutan nedan. 
 Testa dig fram och skapa din alldeles egna färgpalett för en grafisk profil eller något annat roligt. 
 </p>
 <p>
 <form>
 	<lable>Här kan du skapa din egen färgpalett med hexkoder.(#CCC, #567445 osv)</lable>
 	<input type='text' name='color'id='box3_color' placeholder='#' />
	<input type='button' id='box3_add' value='Add color' />
</form>
</p>
<p id='palette'>Låt mig presentera din alldeles egna färgpalett:</p>
</div>

<div id='box4' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>4.</h1>
<img class='example' src='img/brillor.jpg' alt='Paulien med glajer' width="200" height="260" />
<p>Detta är min hund Pauline, hon är en kinesisk nakenhund med päls och är 11 år gammal. 
Här fick en relativt onykter med-passagerare för sig att hon skulle passa bra i mina solglasögon. 
Han tog dem från mitt huvud och satte dem på Pauline och detta är resultatet. 
Jag och min sambo kunde inte hålla oss för skratt när detta hände, då personen som gjorde detta var mycket nära att falla över mig och min hund under tiden. 
</p>
<p>PS. Det ser antagligen ännu roligare ut om du gör bilden större, vilket du kan här nedan.
Vill du ha tillbaka originalstorleken på bilden kan du klicka på den. 
</p>
<form>
<label>Här kan du ändra dimensionerna på bilden till höger, ha så kul!</label>
<input type='button' value='Hämta dimensionerna w*h' id='button' />
<span id='dimensions'></span><br />
<label>Bredd: </label><input type='button' value='+' id='width_plus' /><input type='button' value='-' id='width_minus' /><br />
<label>Höjd: </label><input type='button' value='+' id='height_plus' /><input type='button' value='-' id='height_minus' />
</form>
</div>

<div id='box5' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>5.</h1>
<img class='example' id='nr1' src='img/vatten_skidor.jpg' alt='Jag åker vattenskidor' width="300" />
<img class='example' id='nr2' src='img/vatten_skidor.jpg' alt='Jag åker vattenskidor igen' width="300" />
<p>Här är en bild på mig när jag testade att åka vattenskidor för första gången. 
Det tog mig ca 8 försök innan jag kom upp på skidorna men när jag väl hade kommit upp en gång var det plötsligt busenkelt att göra det igen.
Efter dessa strapatser var jag iskall och helt slut i hela kroppen, det är mäkta jobbigt att åka vattenskidor vill jag lova. 
</p>
<p>
Med dessa bilder vill jag demonstrera animation med JQuery. 
<a class='fade' href='#'>Klicka här för att göra så att den ena bilden fadeas ut.</a>
<a class='slide' href='#'>Klicka hät för att göra så att den andra bilden slidas upp. </a>
</p>
</div>

<div id='box6' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>6.</h1>
<img class='example' src='img/berlin.jpg' alt='Jag besöker Berlin' width="300" />
<p>
Här är jag och min sambo i Berlin för första gången i våra liv och denna bild är tagen vid Checkpoint Charlie som är en stor turistattraktion i Berlin.
Dock är denna checkpoint helt riven och de har stoppat dit det lilla vita skjulet istället och kallar det för Checkpoint Charlie. 
Det är alltså inte ett dugg authentiskt och inte mycket att se, dock ligger den längsta kvarvarande biten av berlinmuren inte långt därifrån. 
</p>
<p>
Denna bild ligger här för att demonstrera min lightbox, om du klickar på bilden så kommer du se hur den fungerar. 
</p>
</div>

<div id='box7' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>7.</h1>
<img class='example' src='img/ring_ring.jpg' alt='Disney Land Tokyo' width="200" />

</div>

<div id='box8' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>8.</h1>
<img class='example' src='img/ring_ring.jpg' alt='Disney Land Tokyo' width="200" />

</div>

<div id='box9' class='box'>
<div id='close'>X</div>
<img class='gift' src='img/gift.png' alt='wrapped gift' width="200" />
<h1 class='gift'>9.</h1>
<img class='example' src='img/ring_ring.jpg' alt='Disney Land Tokyo' width="200" />

</div>

</div>

<?php include(__DIR__ . '../../mall/footer.php'); ?>