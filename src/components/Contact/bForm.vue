<template>
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

</template>

<script>
export default {
  name: 'bform'
}
</script>

<style>

</style>
