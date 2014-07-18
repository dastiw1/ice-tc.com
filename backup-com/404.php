<?php

$uri = $_ENV[ 'HTTP_X_REWRITE_URL' ] ? $_ENV[ 'HTTP_X_REWRITE_URL' ] :
  ($_SERVER[ 'HTTP_X_REWRITE_URL' ] ? $_SERVER[ 'HTTP_X_REWRITE_URL' ] : $_SERVER['REQUEST_URI']);

if(strpos($uri, '.html') === false) {
        $content = file_get_contents(dirname(__FILE__)."/published_data.txt");
        //Endurance app servers can't unserialize the published data due to an integer size issue so turn the ints into strings
        function serializedIntToString($matches) {
                $int = $matches[1];
                return "s:".strlen($int).':"'.$int.'";';
        }
        $content = preg_replace_callback(
                "/i:(\d+);/",
                "serializedIntToString",
                $content);
        $aryPublishData = unserialize( $content );
        if(is_array($aryPublishData)) {
                $page = str_replace("/", "", $uri);
                if(!in_array("$page", $aryPublishData['page_links']) && in_array("$page.html", $aryPublishData['page_links'])){
                        header("Location: /$page.html");
                        exit();
                }
        }
}


/**
 * Grabs blog pages from Weebly or gives 404 message
**/
$ch = curl_init();
$nTimeout = 20;
$sUrl = "http://www.dragndropbuilder.com/weebly/apps/404/404.php";
$aryPost = array();
$aryPost['REQUEST_URI'] = $uri;
if ($_COOKIE['is_mobile'] && !$_COOKIE['disable_mobile']) {
	//$aryPost['REQUEST_URI'] = "/mobile" . $aryPost['REQUEST_URI'];
}
$aryPost['HTTP_HOST'] = $_SERVER['HTTP_HOST'];
$aryPost['REDIRECT_URL'] = $_SERVER['REDIRECT_URL'];
$aryPost['user_id'] = file_get_contents( 'userid.txt' );
curl_setopt( $ch, CURLOPT_URL, $sUrl );
curl_setopt( $ch, CURLOPT_POST, true );
curl_setopt( $ch, CURLOPT_POSTFIELDS, $aryPost );
curl_setopt( $ch, CURLOPT_USERAGENT, 'WEEBLY/1.0' );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT, $nTimeout );
$sContents = curl_exec($ch);
curl_close($ch);

if( strpos( $sContents, "Error 404" ) === false )
{
	header("HTTP/1.0 200 OK");
	header("Status: 200 OK");
}

print $sContents;
?>
