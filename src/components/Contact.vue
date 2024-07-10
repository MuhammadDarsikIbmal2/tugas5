<template>
  <q-page class="q-pa-md">
    <q-card class="my-card q-mb-md">
      <q-card-section>
        <div class="text-h6">Contact Us</div>
      </q-card-section>
      <q-card-section>
        <p>If you have any questions or need more information, feel free to contact us:</p>
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon name="email" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Email: info@catstore.com</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="phone" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Phone: (123) 456-7890</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="place" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Address: 123 Cat Street, Cat City, CA</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-mb-md">
      <q-card-section>
        <div class="text-h6">Send Us a Message</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input v-model="name" label="Name" outlined />
          <q-input v-model="email" label="Email" outlined />
          <q-input v-model="message" label="Message" type="textarea" outlined />

          <q-btn type="submit" label="Send Message" color="primary" class="q-mt-md" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    onSubmit() {
      // Handle form submission logic
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        message: this.message
      })
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
