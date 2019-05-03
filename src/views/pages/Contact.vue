<template>
<div class="b-contact--master">

  <bsubpagehero hero_title="Contact Me" hero_sub_title="Get in touch with me">

    <a class="has-some-margin has-hover--effect" href="https://github.com/bengroneman" target="_blank"><i class="fab fa-github-alt fa-3x"></i></a>
    <a class="has-some-margin has-hover--effect" href="https://twitter.com/StrangeNectar" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
    <a class="has-some-margin has-hover--effect" href="https://join.slack.com/t/bluegdevelopment/shared_invite/enQtNTI5NTM1NzYwMDU1LWU1ZTg0OGVlMmI0M2IzZTE3NTI3N2I5ZjMzZWVmODJiZDEzZmFhMTcyMjkwMmMzNDk4ODE0MGExNzdiODk3Yzg" target="_blank"><i class="fab fa-slack fa-3x"></i></a>

  </bsubpagehero>

  <section class="b-form--grid">
      <bform></bform>
  </section>

</div>
</template>
<script>
import bsubpagehero from '@/components/1-Hero/bSubPageHero'
import bform from '@/components/Contact/bForm'
import btabs from '@/components/0-Global/bTabs'
import btab from '@/components/0-Global/bTab'

export default {
  name: 'bcontact',

  components: {
    bsubpagehero,
    bform,
    btabs,
    btab
  },

  data: () => { 

    return {
    }

  },

  computed: {
    preparePostBody: () => {
      
      // lets gather the data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // create post object
      const formBody = {
        date: new Date(),

        user_name: name,

        user_email: email,

        user_message: message
      };

      return formBody;
    }
    
  },

  methods: {

    postFormBody(event) {
      // don't redirect lol
      event.preventDefault();
      let body = this.preparePostBody();
      const url = 'localhost:3000/contact';

      const options = {
        method: "POST",
        mode: "cors", // maybe change
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(body)
      }

      fetch(url, options).then(res => {
        return res.json();
      }).catch(e => {
        console.log(e);
      });
    }
  }
}
</script>
<style>
.b-contact-master--wrap .columns {
    padding: 45px;
}
.b-contact--content form {
    margin: 45px auto;
}
.b-form--grid {
    width: 600px!important;
}
.b-form--grid div {
    width: 100%;
}
.b-form-submit div > .button {
  margin: 0!important;
}
.b-contact-intro--content h1 {
  text-transform: uppercase;
  margin: 1rem auto 1rem auto;
}
.b-contact-intro--content span {
  border-bottom: 2px solid #54d0ba;
}
/* START Form Styles */
#b-contact--form label {
  text-align: left; 
  display: block;
}
.b-form--grid {
  display: flex;
  grid-template-columns: repeat(1, auto);
  max-width: 550px; /*Maybe use vw*/
  padding: 45px;
  margin: auto;
}
.b-form--grid div {
  margin: auto;
}

.has-hover--effect > i {
  transition: 0.3s all ease-in-out;
  color: black;
}
.has-hover--effect > i:hover {
  cursor: pointer;
  transform: rotate(25deg);
  color: white;
}
.tabs--wrapper {
  height: 10em;
  margin-top: 45px;
}
/* END Form Styles */
</style>
