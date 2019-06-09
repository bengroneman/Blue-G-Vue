<template>
  <div class="hubspot-form--wrapper" v-once>
    <form id="form" class="form">
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Your First Name" v-model="firstname">
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Your Last Name" v-model="lastname">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="Email input" value="hello@" v-model="emailaddress">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right"> <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Submit an Issue</option>
              <option>Software Development</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="message_body"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <a @click="submitFormData" class="button is-link">Submit</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const sgMail = require('@sendgrid/mail');

export default {
    name: 'bform',
    data() {
        return {
          firstname: null,
          lastname: null,
          emailaddress: null,
          message_body: null,
        }
    },
    methods: {
        submitFormData() {
            // using Twilio SendGrid's v3 Node.js Library
            // https://github.com/sendgrid/sendgrid-nodejs
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
                to: this.emailaddress,
                from: 'info@bengroneman.tech',
                subject: 'New message from: ' + this.firstname,
                text: this.message_body,
                html: '<strong>and easy to do anywhere, even with Node.js</strong>' + this.lastname,
            };
            sgMail.send(msg);
        }
    }
}
</script>

<style>
  .field {
    text-align: left;
  }
  .select select {
    width: 100%;
  }
</style>
