'use strict';
Vue.component('logout-modal', {
  template: `
  <div class="modal" id="logoutModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog logout-container" role="document"><div class="modal-content"><div class="modal-body"><div class="clearfix">
      <img src="image/icon/logout.png" class="icon float-left">
      <div class="float-left">
        <p class="title">Logout?</p>
        <p>Whether to confirm leaving</p>
        <button type="button" class="btn" data-dismiss="modal">Cancel</button>
        <a href="/alpha/logout" class="btn">Logout</a>
      </div>
    </div></div></div></div>
  </div>
`,
  data: function() {
    return {}
  },
  props: {}
});
