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
        <form id="b-contact--form">

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
            <label for="comment">Lets chat!</label>
            <textarea class="form-control" id="comment" rows="3"></textarea>
          </div>

        </form>
      </div>
      <!-- END B Contact Content Column -->
      <!-- START B Contact list info column --> 
      <div class="b-contact--info col-4">
        <div class="b-info--wrapper">
          <p>Email Address:</p>
          <a href="mailto:ben_groneman@bluegdev.com">ben_groneman@bluegdev.com</a>
        </div>
        </br>
        <div class="b-info--wrapper">
          <p>Twitter:</p>
          <a href="https://twitter.com/strangenctar">@strangenectar</a>
        </div>
        </br>
        <div class="b-info--wrapper">
          <p>Github</p>
          <a href="https://github.com/strangenectar">strangenectar</a>
        </div>
        </br>
      </div>
      <!-- END B Contact list info column --> 
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'bcontact'
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
  background-color: #1a2127;
  border-radius: 5px;
  border: 2px solid #54d0ba;
  display: flex;
}

.b-contact--wrapper {
  margin: auto;
  color: white;
}
.b-contact--content {
  padding: 20px;
}
.b-contact--info {
  padding: 20px;
  text-align: right;
  margin: auto;
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
