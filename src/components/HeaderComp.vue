<template>
    <header>
        <nav class="navbar navbar-expand-lg fixedtop text-pop-up-tr">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Barbe & Ria</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item te">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Serviços</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contatos</a>
                        </li>
                    </ul>
                    <div class="navbar-text">
                        <div class="search-box">
                            <a href="#"><i class="fa-solid fa-magnifying-glass search"></i></a>
                        </div>
                        <div class="profile-box">
                            <a href="#"><i class="fa-solid fa-user user-profile"></i></a>
                           
                        </div>
                       
                    </div>
                    
                </div>
               
            </div>
            
        </nav>
    </header>
    
</template>

<script>
export default {
    name: 'HeaderComp'
}

</script>

<style scoped>

.navbar-brand {
    border-radius: 100px;
    font-weight: bold;
    background-color: rgba(202, 202, 202, 0.414);
    padding: 0.3rem 1rem;
}
    
.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    margin-right: 20px;
    border-radius: 15px;
    width: 40px;
}

.profile-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid blue;
    margin-right: 20px;
    border-radius: 15px;
    width: 25px;
}


.search {
    color: white;
}

.navbar-text {
    display: flex;
    justify-content: flex-end;

}

.nav-item a {
    margin: 0vw 1vw;
    color: rgb(0, 0, 0);
    border-radius: 100px;
    background-color: rgba(202, 202, 202, 0.414);
}

.nav-item a:hover {
    color: rgb(138, 49, 11);
}

#users{
    color:white;
}
p{color:white;}

</style>