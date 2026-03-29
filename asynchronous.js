<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <h1> CHAI AUR JAVASCRIPT</h1>
    <button id="start">start</button>
    <button id="stop">stop</button>


</head>

<body>
    <script>
        let s;

        document.querySelector('#start').addEventListener('click', function (e) {
            s = setInterval(function () {
                console.log("sarthak")
            }, 2000
            )
        })

        document.querySelector('#stop').addEventListener('click', function (e) {
            clearInterval(s)
        });

    </script>
</body>

</html>
