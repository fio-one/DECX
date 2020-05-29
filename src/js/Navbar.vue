'use strict';
Vue.component('navbar-header', {
  template: `
  <div class="navbar-header clearfix">
    <button type="button" class="d-inline-block d-sm-inline-block d-md-none mobile-menu-btn">
      <i class="fa fa-close"></i>
      <i class="fa fa-bars"></i>
    </button>
    <h1 class="navbar-title">DECX</h1>
    <ul class="float-right lang">
      <li>EN</li>
      <li>CH</li>
    </ul>
    <div class="float-right profile-container"><a href="#">
      <span class="name">User</span>
      <img src="image/icon/profile.png">
    </a></div>
    <button class="float-right btn btn-icon notify-icon"><i class="far fa-bell"></i></button>
 </div>
`,
  data: function() {
    return {}
  },
  props: {
    username:     String,
    type:         String,
    isOpen: Boolean,
  }
});
