<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<meta http-equiv="Refresh" content="60">-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="Bahnhofsuhr/station-clock.js"></script>
    <script type="text/javascript" src="Bahnhofsuhr/draw.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title>BVB Abfahrten</title>
</head>
<body>
    
    <div class="containerFromStop">

        <div class="fromStop" id="fromStop"></div>
        
        <!--<canvas id="clock" width="150" height="150">
            Fehlermeldung       
        </canvas>-->
        <div class="container" style="margin-left: 15px; padding-left: 30px;">
            <form action="" method="post">
            <input type="text" id="StationSearch" name="StationSearch">
            <input type="submit" id="SubmitBtn">
        </div>
    </form>
    <?php 
    
    if(isset($_POST['StationSearch'])){
        $station = "?station=".$_POST['StationSearch'];
        header("Location: ./departure.php".$station);
    }
    
    ?>
    </div>


        


    <div class="timetable"></div>

    <script>
        var stationQuery = '<?php echo $_GET['station'] ?>';
    </script>

    <script src="departure.js"></script>

    <a href="#fromStop"><button class="goToTop">Go to top ↑</button></a>
</body>
</html>