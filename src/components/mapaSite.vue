<template>

<footer>
    <hr>

    <div class="container text-center">
        <div class="row">

            <p>
                <i class="fa-sharp fa-solid fa-copyright">
                    Copyright - todos os direitos reservados
                </i>
            </p>

            <br><br>

            <div class="col">
                 <h5><router-link to="/about">Quem somos</router-link></h5>
            </div>

            <div class="col">
                <h5><router-link to="/services">Agendamentos</router-link></h5>
            </div>

            <div class="col">
                <h5><a href="#">Nossos produtos</a></h5>
            </div>

            <div class="col">
                <h5><router-link to="/contacts">Contatos</router-link></h5>
            </div>

        </div>
    </div>

</footer>

</template>

<script>


</script>

<style scoped>

    footer{
        margin-top:500px;
        background:var(--cor-prim);
    }
    a{
        text-decoration: none;
        color: rgb(67, 67, 104);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    a:hover{
        color: var(--cor-terc);
    }

</style>