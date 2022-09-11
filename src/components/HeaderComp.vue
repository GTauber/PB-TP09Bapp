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
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
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
* {
    box-sizing: border-box;
}

.nav-item a {
    color: rgb(199, 0, 0);
}

.nav-item a:hover {
    color: rgb(255, 255, 255);
}

.text-pop-up-tr {
	animation: text-pop-up-tr 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes text-pop-up-tr {
  0% {
    transform: translateY(0) translateX(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

</style>