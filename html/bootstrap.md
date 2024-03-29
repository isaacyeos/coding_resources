## Bootstrap:
Bootstrap is an open-source CSS framework used for developing responsive websites (CSS does not provide responsive websites). Based on grid system and able to add pre-defined classes into code without writing from scratch. Other CSS frameworks include Foundation, Bulma, UIkit and Susy.
```
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="custom_script_1.js"></script>
    <script src="custom_script_2.js"></script>
  </body>
</html>
```

Link Reference: https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp
## Bootstrap Classes:
```
.col:
<div class="col-sm-4">{{ wtf.quick_form(form) }}</div>

.button:
<div>
  <a href="{{ url_for(main.index) }}">
    <button type="button" class="btn btn-primary">Homepage</button>
  </a>
</div>
```
## Containers:
Used to establish the width for the layout. Have default fixed widths that will change based on the size of viewing device. Allows up to 12 columns across a page.
```
<div class="container">     # use container-fluid to not fix the width size
  <div class="row">
    <div class=“col-sm-8”> Content </div>
    <div class=“col-sm-4”> Content </div>
</div>
```
