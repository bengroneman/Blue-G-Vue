<template>
  <div class="card--wrapper">
      <div class="card">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Tim Tam">
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <!-- TODO: set this up to throw if the form doesn't match regex -->
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Website Issue</option>
                <option>Looking for a Freelancer?</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
              <!-- TODO: setup a form clear function for this button -->
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'bformcard',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.card--wrapper {
  width: 100%;
}
.card > .field {
  margin: auto 25px auto 25px;
}
</style>
