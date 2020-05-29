'use strict';
Vue.component('sidebar', {
  template: `
<div class="sidebar-container">
  <ul :class="classUl" :data-in="dataInUl" :data-out="dataOutUl">
    <li><a href="index.html"><i class="fa fa-tachometer-alt" aria-hidden="true"></i> Dashboard</a></li>
    <!-- <li><a href="/decx/list"><i class="fa fa-table" aria-hidden="true"></i> DECX</a></li> -->
    <li style="padding-left: 20px;"><a href="add.html"><i class="fa fa-coins small-icon" aria-hidden="true"></i> Create</a></li>
    <li><a href="#" data-toggle="modal" data-target="#logoutModal"><i class="fa fa-sign-out-alt" aria-hidden="true"></i> Logout</a></li>
  </ul>
  <p class="version">ver. Alpha</p>
</div>
`,

  data: function() {
    return {}
  },
  props: {
    username:     String,
    type:         String,
    currentMenu:  {
      type:       String,
      required:   true,
    },
    isMobile:     Boolean,
  },
  computed: {
    classUl: function() {
      return (this.isMobile) ? 'nav navbar-nav' : '';
    },
    dataInUl: function() {
      return 'fadeInDown';
    },
    dataOutUl: function() {
      return 'fadeOutUp';
    },
  }

});
