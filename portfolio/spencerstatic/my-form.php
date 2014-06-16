<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Thank You: Your Form Has Been Processed</title>
    <style>
        body {
            font-family: sans-serif;
        }
        dt {
            font-style: bold;
            margin-top: 1em;
        }

    </style>
</head>
<body>

    <h1>Your form has been processed.</h1>
    <dl>
    <?php foreach ($_POST as $key => $value) {

        echo "\t<dt>" . trim($key) . "</dt>\n";
        if (is_array($value)){
            foreach ($value as $array_value){
                echo "\t\t<dd>". trim($array_value) . "</dd>\n";
            }
        } else {
            echo "\t\t<dd>" . trim($value) . "</dd>\n";
        }
    }    ?>
    </dl>
</body>
</html>