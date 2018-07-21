<template>
<div class="child b-contact__wrapper">
  <v-form v-model="valid">
    <v-text-field
      v-model="userName"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
      submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
  </v-form>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'bcontactform',
  
  data: () => ({
    valid: false,
    userName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid'
    ]
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          userName: this.userName,
          email: this.email
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style>
.b-contact__wrapper {
  max-width: 500px;
}
</style>
