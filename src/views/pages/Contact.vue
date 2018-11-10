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
        <form>

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
				<span class="b-divider"></span>
        <p>Email Address:</p>
        <a href="mailto:ben_groneman@bluegdev.com">ben_groneman@bluegdev.com</a>
				<span class="b-divider"></span>
        <p>Twitter:</p>
        <a href="https://twitter.com/strangenctar">@strangenectar</a>
				<span class="b-divider"></span>
        <p>Github</p>
        <a href="https://github.com/strangenectar">strangenectar</a>
				<span class="b-divider"></span>
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
}
.b-contact--info > hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
