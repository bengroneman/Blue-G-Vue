<template>
<div class="btn__container">
  <ul>
    <li class="social--li">
      <a href="https://github.com/bengroneman" target="_bank">
        <i class="fab fa-github" aria-hidden="true"></i>
      </a>
    </li>
    <li class="social--li">
      <a href="https://linkedin.com/in/ben-groneman" target="_blank">
        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
      </a>
    </li>
    <li class="social--li">
      <a href="mailto:info@bengroneman.tech">
        <i class="far fa-envelope" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</div>
</template>
<script>

export default {
    name: 'b-social-icons'
}
</script>
<style>
.btn__container {
    width: 100%;
    display: flex;
}
.btn__container ul {
    margin: auto;
    list-style: none;
}
.social--li {
    display: inline;
    padding-right: 10px;
    padding-left: 10px;
}
.social--li a > i {
    font-size: 1.5rem;
    color: #a9a9b3!important;
}
#b__btn {
    width: 45px;
}
.is-icon--grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
