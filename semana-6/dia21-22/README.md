    <!-- <script>
        // seleccionar elementos // 
        const btnDirection = document.querySelector("#btnDirection");
        const btnDarkLight = document.querySelector("#btnDarkLight");

        const iconsContainer = document.querySelector(".Icons");
        const body = document.querySelector('.Body');

        //añadir eventos
        btnDirection.addEventListener('click', () => {
            iconsContainer.classList.toggle("u-flexCol");
            btnDirection.textContent = iconsContainer.classList.contains('u-flexCol') ? 'Filas' : 'Columnas';
        })

        btnDarkLight.addEventListener('click', () => {
            body.classList.toggle('u-Dark');
            btnDarkLight.innerHTML = body.classList.contains('u-Dark') ? ' <span class="material-symbols-outlined"> light_mode </span>'
        })

    </script> -->