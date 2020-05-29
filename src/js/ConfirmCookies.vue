'use strict';
Vue.component('comfirm-cookies', {
  template: `
  <div class="confirm-cookies-block clearfix d-none"><div class="container">
    <div class="float-left">
      <p>This website uses cookies so that we can provide you with the best user experience.<a class="inline-block" href="#" target="_blank">Privacy policy</a></p>
    </div>
    <button class="float-right btn" id="confirm-btn" @click="agree()">I agree</button>
  </div></div>
`,
  data: function() {
    return {}
  },
  mounted: function () {
    var c = this.$cookies.get('cookie_consent_status');
    if(c === null) {
      $('.confirm-cookies-block').removeClass('d-none');
    }
  },
  methods: {
    agree: function() {
      this.$cookies.set('cookie_consent_status','dismiss','30d');
      $('.confirm-cookies-block').addClass('d-none');
    }
  }
});
