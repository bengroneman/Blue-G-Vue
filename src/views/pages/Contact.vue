<template>
<section class="b-contact-master--wrap container">
  <div class="columns">
    <!-- START B Contact Content Column -->
    <div class="b-contact--content column is-three-quarters">
      <div class="content--wrapper text-is-left">
        <h1>Contact Me</h1>
        <p>
          I am here to answer any and all questions or thoughts you may have.
          Want to work on a project together?
          Want to talk open source, and technologies?
          Looking for a hard-working web developer for you next project?
          <span>Leave me a message, and I will get right back to you!</span>
        </p>
      </div>
      <form role="form" aria-label="contact form" class="content--wrapper" id="b-contact--form">

        <!-- Name Input -->
        <div class="field b-form-name">
          <div class="control">
            <label for="name">Your Name</label>
            <input class="input is-primary" id="name" type="text" placeholder="Name">
          </div>
        </div>
        <!-- Email Input -->
        <div class="field b-form-email">
          <div class="control">
            <label for="email">Your desired email address</label>
            <input class="input is-primary" id="email" type="text" placeholder="Email Address">
          </div>
        </div>
        <!-- Textarea input --> 
        <div class="field b-form-comment">
          <div class="control">
            <label for="message">Comments</label>
            <textarea class="textarea is-primary" id="message" placeholder="Whats on your mind?"></textarea>
          </div>
        </div>
        <!-- Submit Button -->
        <div class="field b-form-submit">
          <div class="control">
            <button @click="postFormBody(event)" type="submit" class="button is-link" id="b-btn">Submit</button>
          </div>
        </div>

      </form>
    </div>
    <!-- END B Contact Content Column -->
    <!-- START B Contact list info column --> 
    <div class="b-contact--info column is-one-quarter">
      <div class="b-info--wrapper">
        <p>Email Address:</p>
        <a href="mailto:info@bengroneman.tech">info@bengroneman.tech</a>
      </div>
      <div class="b-info--wrapper">
        <p>Linkedin:</p>
        <a href="https://linkedin.com/in/ben-groneman" target="_blank">Ben Groneman</a>
      </div>
      <div class="b-info--wrapper">
        <p>Github</p>
        <a href="https://github.com/bengroneman" target="_blank">Code</a>
      </div>
    </div>
    <!-- END B Contact list info column --> 
  </div>
</section>
</template>
<script>
export default {
  name: 'bcontact',

  created: () => {
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
.b-contact-master--wrap {
  height: 100%;
  width: 100%;
  background-color: #151f29;
  color: white;
  display: flex;
  margin: 75px auto 75px auto;
}
.b-contact-master--wrap .columns {
  padding: 45px;
}
.b-contact--container {
  margin: auto;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid rgba(84, 208, 186, 0.24); 
  display: flex;
  box-shadow: 0px 2px 5px 2px #000000;
}

.b-contact--content {
  padding: 35px;
}
.b-contact--content form {
  margin: 45px auto;
}
.b-contact--info {
  padding: 20px;
  text-align: right;
  margin: auto;
  background: #1c252d;
  border-radius: 10px;
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
.b-info--wrapper {
  padding: 10px;
  width: 100%;
  height: fit-content;
  border-right: 2px solid rgba(84, 208, 186, 0.24);
}
/* START Form Styles */

#b-contact--form label {
  text-align: left; 
  display: block;
}
.form-group > input {
  background-color: #151f29;
  color: white;
}
.form-group > input:focus {
  background-color: #151f29;
}
.form-group > textarea:focus {
  background-color: #151f29;
}
.form-group > textarea {
  
  background-color: #151f29;
  color: white;
}

/* END Form Styles */
</style>
