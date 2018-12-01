<template>
<div class="b-contact-master--wrap">
  <div class="b-contact--container container">
    <div class="b-contact--wrapper row">
      <!-- START B Contact Content Column -->
      <div class="b-contact--content col-8">
        <div class="b-contact-intro--content">
          <h1>Contact Me</h1>
          <p>
            I am here to answer any and all questions or thoughts you may have.
            Want to work on a project together?
            Want to talk open source, and technologies?
            Looking for a hard-working web developer for you next project?
            <span>Leave me a message, and I will get right back to you!</span>
          </p>
        </div>
        <form role="form" aria-label="contact form" id="b-contact--form">

          <!-- Name Input -->
          <div class="form-group b-form-name">
            <label for="name">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Tim Tam">
          </div>
          <!-- Email Input -->
          <div class="form-group b-form-email">
            <label for="email">Your Email Address</label> 
            <input type="email" class="form-control" id="email" placeholder="timtam@example.com">
          </div>
          <!-- Textarea input -->
          <div class="form-group b-form-comment">
            <label for="message">Lets chat!</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <!-- Submit Button -->
          <button @click="postFormBody(event)" type="submit" class="btn submit--btn" id="b-btn">Submit</button>

        </form>
      </div>
      <!-- END B Contact Content Column -->
      <!-- START B Contact list info column --> 
      <div class="b-contact--info col-4">
        <div class="b-info--wrapper">
          <p>Email Address:</p>
          <a href="mailto:bluegroneman10@gmail.com">bluegroneman10@gmail.com</a>
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
  </div>
</div>
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
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #151f29;
}
.b-contact--container {
  margin: auto;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid rgba(84, 208, 186, 0.24); 
  display: flex;
  box-shadow: 0px 2px 5px 2px #000000;
}

.b-contact--wrapper {
  margin: auto;
  color: white;
}
.b-contact--content {
  padding: 35px;
}
.b-contact--info {
  padding: 20px;
  text-align: right;
  margin: auto;
  background: #1c252d;
  border-radius: 10px;
}
.b-contact-intro--content {
  text-align: left;
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
