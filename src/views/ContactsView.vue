<template>
  <div class="container-sm">
    <ul class="list-group">
      <li class="list-group-item" aria-current="true">Nossos Contatos</li>
      <li class="list-group-item"><a href="https://www.linkedin.com/in/gabriel-tauber-353002202/">Gabriel Tauber</a></li>
      <li class="list-group-item"><a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-caglianone-77559852/">João Caglianone</a></li>
      <li class="list-group-item"><a href="https://www.linkedin.com/in/juan-rostirola-246695222/">Juan Rostirola</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactsView"
}
</script>

<style scoped>
ul {
  width: 20%;
}
div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
li:first-child {
  background: var(--cor-terc);
}
</style>