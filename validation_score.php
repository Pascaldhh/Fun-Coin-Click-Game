<?php
// check with session variable if the score is right
session_start();

$score = $_POST['score'];

if(!isset($_SESSION['score'])) $oldscore = $_SESSION['score'];
if(isset($_SESSION['score'])) 
{
    $oldscore = $_SESSION['score'];
    if($oldscore+1 < $score)
    {
        $score = $oldscore + 1;
    }
}
$_SESSION['score'] = $score;
echo $score;