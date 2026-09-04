$(document).ready(function () {

    // 1. Cambiar el color del fondo del Hero
    $("#changeColor").click(function () {

        // Genera un color hexadecimal aleatorio
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0");

        $(".hero").css("background-color", randomColor);
    });


    // 2. Abrir una imagen de la galería en el modal
    $(".gallery-image").click(function () {

        // Obtiene la imagen seleccionada
        const imageSource = $(this).attr("src");
        const imageAlt = $(this).attr("alt");

        // Coloca la imagen dentro del modal
        $("#modalImage").attr("src", imageSource);
        $("#modalImage").attr("alt", imageAlt);

        // Muestra el modal
        $("#imageModal").css("display", "flex");
    });


    // Cerrar el modal con la X
    $("#closeModal").click(function () {
        $("#imageModal").fadeOut(200);
    });


    // Cerrar el modal al hacer clic fuera de la imagen
    $("#imageModal").click(function (event) {

        if (event.target.id === "imageModal") {
            $(this).fadeOut(200);
        }
    });


    // 3. Validar el formulario
    $("#contactForm").submit(function (event) {

        // Evita que la página se recargue
        event.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        // Expresión para comprobar el formato del correo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // Validar nombre
        if (name === "") {
            alert("Please enter your name.");
            $("#name").focus();
            return;
        }


        // Validar email vacío
        if (email === "") {
            alert("Please enter your email.");
            $("#email").focus();
            return;
        }


        if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            $("#email").focus();
            return;
        }


        if (message === "") {
            alert("Please enter a message.");
            $("#message").focus();
            return;
        }


        // Si todo está correcto
        alert("Form submitted successfully!");


        // Limpiar el formulario
        this.reset();
    });

});