<template>
  <div class="hubspot-form--wrapper" v-once>
    <form class="form">
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Your First Name" v-model="first_name">
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Your Last Name" v-model="last_name">
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
          <textarea class="textarea" placeholder="Textarea" v-model="message"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <a @click="submitForm()" class="button is-link">Submit</a>
        </div>
        <div class="control">
          <button @click="clearForm()" class="button is-text">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'bform',
    data() {
        return {
            first_name: '',
            last_name: '',
            emailaddress: '',
            message: '',
            isSending: false,
            isValid: true,
        }
    },
    methods: {
        clearForm() {
            this.first_name = '';
            this.last_name = '';
            this.emailaddress = '';
            this.message = '';
        },
        submitForm() {
            this.isSending = true;
            
            setTimeout(() => {
                const form = new FormData();
                form.append('first_name', this.first_name);
                form.append('last_name', this.last_name);
                form.append('emailaddress', this.emailaddress);
                form.append('message', this.message);
                
                const hs_form_submission_endpoint = "https://forms.hubspot.com/uploads/form/v2/4569640/" + process.env.DB_HOST;
                const hs_create_contact_endpoint = "https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/" + this.emailaddress + "/?hapikey=f2c0256f-1a3b-45b4-89ca-da008b01b146";
                
                const form_data = {
                    properties: [
                        {
                            property: "firstname",
                            value: this.first_name
                        },
                        {
                            property: "lastname",
                            value: this.lastname
                        },
                        {
                            property: "emailaddres",
                            value: this.emailaddress
                        },
                        {
                            property: "message",
                            value: this.message
                        }
                    ]
                };
                
                
                this.postHSData(form, hs_form_submission_endpoint);
                this.postHSData(form_data, hs_create_contact_endpoint);
                
                this.clearForm();
                
                this.isSending = false;
            })
        },
        methods: {
            validateEmail(email_address) {
                regex = "/\w@\w.\w/g"
                matches = regex.exec(regex) 
            }
        }
        // Posts form data to the Hubspot API
        postHSData(data, endpoint) {
            const headers = {
                'Content-Type': 'application/json'
            };

            this.$http.post(endpoint, data, headers)
                .then((response) => {
                    console.log(response);
                }).catch((e) => {
                    console.error(e);
                })
        }
    },
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
