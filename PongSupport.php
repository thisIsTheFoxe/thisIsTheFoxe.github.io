<html>
    <head>
        <title>thisIsTheFoxe</title>
        
        <noscript>Please Enable JavaScript to enjoy this Website with all it's features :)</noscript>

        <script src="./assets/js/https.js"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon-16x16.png"/>
        <link rel="manifest" href="./assets/site.webmanifest"/>
        <link rel="mask-icon" href="./assets/images/safari-pinned-tab.svg" color="#f18719"/>
        <link rel="shortcut icon" type="image/x-icon" href="./assets/images/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:image" content="./assets/images/apple-touch-icon.png"/>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <meta name = "viewport" content = "width = device-width"/>
        
        <link rel="stylesheet" href="./assets/css/styles.css"/>
    </haed>
                    <body>
                        <h1>Pong Adventure</h1>
                        <img src="httwps://is2-ssl.mzstatic.com/image/thumb/Purple71/v4/1a/17/11/1a17119d-40ae-1542-96d2-071280431b38/pr_source.png/246x0w.png">
                            <div>
                            <p>This is my fist App which is available on the AppStore&trade;. It isn't highly complex and big, but I developed this App entirely by myself an am very proud that it made it into the store!<br/>
                            If you are intersted you can download it: <a href="https://itunes.apple.com/us/app/pong-adventure/id1166251755?mt=8">HERE</a>.
                            </p>
                            <p>If you experience bugs or crashes of any kind, or just want to leave some feedback, please let me know:<br/>
<form method="GET">
<?php
    
    if(isset($_GET["description"])){
        if($_GET["description"] <> "") {
            
            require_once 'Mobile_Detect.php';
            $detect = new Mobile_Detect;
            
            $message = "This is an automatic message from thisisthefoxe.me</br>";
            
            if ($detect->isiOS()){
                if ($detect->isTablet()) {
                    $message .= "iPad, iOS: ". $detect->version('iPhone');
                }else{
                    $message .= "iPhone, iOS: ". $detect->version('iPhone');
                }
                $message .= "</br></br>" . $_GET["description"];
            }else $message .= "This is no iOS device.";
            
            $to      = 'questions.thisisthefoxe@gmail.com';
            $subject = 'Pong Adventure Feedback';
            $message = $message;
            // für HTML-E-Mails muss der 'Content-type'-Header gesetzt werden
            $header[] = 'MIME-Version: 1.0';
            $header[] = 'Content-type: text/html; charset=iso-8859-1';
            
            // zusätzliche Header
            $header[] = 'To: '.$to;
            $header[] = 'From: '.$to;
            $header[] = 'Cc: ' . $_GET["email"];
            
            $success = mail($to, $subject, $message, implode("\r\n", $header));
            if ($success) echo "Thank you for your feedback. :)";
                else echo "There was a problem sending your feedback. Please try again or <a href='mailto:thisisthefoxe@gmail.com'>send an email by your own</a>.";

        }
        else echo "Your feedback couldn't be sent. Please be sure to NOT leave the describe field empty.";
    }else{
        echo "Email (optional):<input name='email'/></br>";
        echo "<textarea name='description' placeholder='I had the following problem/idea...' style='height:20%;width:75%'></textarea><br/>";
        echo "<input type='submit' value='Submit'>";
    }
    
    ?>
</form>
                            
                            </p>
                            <p>(First release: 2014)<br/>
                            Furthermore, if you want to help me developing this app and maybe even have suggestions, feel free to <a target="_blank" href="https://pong-adventure.herokuapp.com">sign up for BetaTesting</a> and thereby agreeing to <a href="./BetaAgreement">this agreement</a>.
                            </p>
                            
                            </div>
<div>

</div>
                    </body>

</html>

