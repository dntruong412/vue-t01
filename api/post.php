<?php 

$json = file_get_contents(__DIR__ . '/data.json');

$arg = $_REQUEST;
$json = json_decode($json);
if (isset($arg['id'])) {
    foreach ($json as $j) {
        if ($j->id == $arg['id']) {
            $json = $j;
            break;
        }
    }
} else {
    if (isset($arg['action']) && $arg['action']=='search' && $arg['s']!='') {
        $result = [];
        foreach ($json as $j) {
            if (strpos($j->title, $arg['s']) !== false || strpos($j->description, $arg['s']) !== false) {
                $result[] = $j;
            }
        }
        $json = $result;
    }
}

header('Content-type:text.json');
ob_start("ob_gzhandler");
echo json_encode($json);
die();