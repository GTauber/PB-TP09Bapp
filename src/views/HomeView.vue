<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
<!--        <login-comps></login-comps>-->
      </div>
    </div>
    <div class="row mt-5">
      <div class="col d-flex justify-content-center">
        <div id="carouselExampleDark" class="carousel carousel-dark slide service-carousel" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner" id="carrossel">
            <div class="carousel-item active" data-bs-interval="10000">
              <router-link to="/queue">
                <img src="@/assets/ServicoQueue.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </router-link>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <router-link to="/credit">
                <img src="@/assets/Payment.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </router-link>
            </div>
            <div class="carousel-item">
              <router-link to="/login">
                <img src="@/assets/loginservice.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </router-link>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import loginComps from '../components/loginComps.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    // loginComps
  }
}
</script>

<style scoped>
.service-carousel {
  width: 50%;
}
img {
  width: 510px;
  height: 420px;
}
#carrossel{
  border-radius:20px;
  box-shadow: 0px 0px 15px rgb(7, 7, 7);
}
</style>
