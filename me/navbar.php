<?php
/* navigationsmenyn */

$navbar = array(
  'items' => array(
    'hem' => 
    array('text'=>'Hem', 'url'=>'index.php', 'title' => 'Min presentation'),
    'redovisning' => 
    array('text'=>'Redovisning', 'url'=>'report.php', 'title' => 'Redovisningar för kursmomenten',
      'submenu' => array(
              'items' => array(
                // This is a menu item of the submenu
                'kmom01'  => array(
                  'text'  => 'Kmom01',   
                  'url'   => 'report.php#kmom01',  
                  'title' => 'kmom01'
                ),

                'kmom02'  => array(
                  'text'  => 'Kmom02',   
                  'url'   => 'report.php#kmom02',  
                  'title' => 'kmom02'
                ),

                'kmom03'  => array(
                  'text'  => 'Kmom03',   
                  'url'   => 'report.php#kmom03',  
                  'title' => 'kmom03'
                ),

                'kmom04'  => array(
                  'text'  => 'Kmom04',   
                  'url'   => 'report.php#kmom04',  
                  'title' => 'kmom04'
                ),

                'kmom05'  => array(
                  'text'  => 'Kmom05',   
                  'url'   => 'report.php#kmom05',  
                  'title' => 'kmom05'
                ),

                'kmom06'  => array(
                  'text'  => 'Kmom06',   
                  'url'   => 'report.php#kmom06',  
                  'title' => 'kmom06'
                ),
              ),
          ),
      ),
    'source-code' => 
    array('text'=>'Källkod', 'url'=>'source.php', 'title' =>  'Min källkod'),
    
  ),
  'callback' => function($url) {
    if(basename($_SERVER['SCRIPT_FILENAME']) == $url) {
      return true;
    }
  }
); 

