//style
import '../sass/normalize.scss';
import '../sass/theme.scss';

import ConfirmCookies from './ConfirmCookies.vue';
import LogoutModal from './LogoutModal.vue';
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: {
    ConfirmCookies,
    LogoutModal,
    Navbar,
    Sidebar
  }
}


function validateEmail(email) {
	// http://emailregex.com/
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var re_payment = /^[0-9-a-zA-Z_\-\.@]+$/;
	return re.test(email) && re_payment.test(email);
}

Vue.component('fio-field', {
  props: ['value', 'options', 'type', 'auto'],
  template: `<select class="form-control" :value="value" @change="onChange($event.target.value)" required>
    <option selected :value="auto" v-text="auto+'(auto generated)'" v-if="auto"></option>
    <option selected value="" v-else>Select</option>
    <option v-for="option in options" :value="option" v-text="option"></option>
  </select>`,
  computed: {
    selected () { return this.value }
  },
  methods: {
    onChange(value) {
      this.$emit('input', value);
      if(this.type === 'insert' && data.key !== value) {
        //default
        data.key = value;
      }
    },
    isSelected(option) {
      return option.optionId === this.value;
    }
  }
});

var data = {
	username: 'admin',
    type: 'admin',
    currentMenu: 'fios',

	list: [
        {
          _id: 1,
          name: 'Test',
          sheet: '1VWBt4g9qY7_ik4pe7r4ibvTMlwMqwpEQGSjRfJBYqEE',
          date: '2020-05-07 12:00:00',
          enabled: true,
        },
        {
          _id: 2,
          name: 'Test',
          sheet: '1VWBt4g9qY7_ik4pe7r4ibvTMlwMqwpEQGSjRfJBYqEE',
          date: '2020-05-07 12:00:00',
          enabled: false,
        }

    ],
    log: [
        {
          _id: 1,
          name: '寵物健康火雞肉罐 150g',
          sku: 'WD001',
          price: '150',
          info: '好吃健康營養貓罐',
          stock: '200',
          status: 'success'
        },
        {
          _id: 2,
          name: '寵物健康鴨肉罐 150g',
          sku: 'WD002',
          price: '150',
          info: '好吃健康營養貓罐',
          stock: '400',
          status: 'fail'
        },
        {
          _id: 3,
          name: '寵物健康羊肉罐 150g',
          sku: 'WD003',
          price: '150',
          info: '好吃健康營養貓罐',
          stock: '1000',
          status: 'wait'
        }
	],
	steps: ['Select ecommerce','Grant Permission','Link Desired Google Sheets','Settings','Finish'],
	step: 1,
	auth: '',
	sheetUrl: '',
	code: '',
	type: 'shopee',
	api_type: 'GPG.sign+IOTA.send',
	api_types: {
		'GPG.sign+IOTA.send': {
		  api: 'GPG.sign+IOTA.send',
		  input: {
		    name: 'name',
		    sku: 'sku',
		  },
		  output: {
		    hash: '',
		    token_id: ''
		  }
		}
	},
	fio: {
		_id: 0,
		date: new Date(),
		sheet: '',
		tab: '',
		token: {},
		apis: [],
		confirm: '',
		pending: 'Pending',
		done: 'Completed',
		enabled: false,
		name: '',
		x: 0,
		y: 0
	},
	fields: [
		'name', 'sku', 'price', 'num'
	],
	key: '',
	field: ''
};

window.addEventListener('load', function () {
	var vue = new Vue({
		el: '#vue',
		data: data,
		mounted: function() {
			// this.init();
			console.log(200);

			this.fio.apis.push(this.api_types[this.api_type]);
            this.setConfirmation();
		},
		methods: {
			toLocalTime: function(time){
	          return moment(time).local().format('YYYY/MM/DD HH:mm:ss Z');
	        },
	        toLocalDate: function(time){
	          return moment(time).local().format('YYYY MMM DD');
	        },
	        changeStatus: function(){
	          console.log(200);
          	},
          	init: function() {

          	},
          	setConfirmation: function(){
                window.onbeforeunload = function(){
                  return '';
                };
              },
              resetConfirmation: function(){
                window.onbeforeunload = null;
              },
              go: function(){
                this.resetConfirmation();
                location.href='list.html';
              },
              changeStatus: function(){
                // api.put('/fio/'+this.fio._id, {"enabled": this.fio.enabled}, function(e) {
                    console.log(200);
                // });
              },
              resetErrorMessage: function(id, force) {
                  $(id).find('.form-control').removeClass('is-invalid is-valid');

                  if(force) {
                      $(id).find('.invalid-feedback').text('');
                  } else {
                      $(id).find('.form-text').removeClass('.invalid-feedback');
                  }
              },
              setErrorMessage: function(id, message = '') {
                  $(id).find('.form-control').addClass('is-invalid');

                  if(message) {
                      $(id).find('.invalid-feedback').text(message);
                  } else {
                      $(id).find('.form-text').addClass('invalid-feedback');
                  }
              },
              addColumn: function() {
                  //reset
                  vue.resetErrorMessage('#add-column-container', false);
                  var validate = true;
                  //validate
                  if(this.key === '') {
                    validate = false;
                    vue.setErrorMessage('#form-group-add-key');
                  }

                  if(this.field === '') {
                    validate = false;
                    vue.setErrorMessage('#form-group-add-field');
                  }

                  if(validate) {
                    this.fio.apis[0].input[this.key] = this.field;
                    this.key = this.field = '';
                  }
              },
              delColumn: function(key) {
                  Vue.delete(this.fio.apis[0].input, key);
              },
              prev: function() {
                  if(this.step === 1) {
                      return ;
                  } else if(this.step === 3) {
                    var c = confirm('You need to grant permissions again if you wish to return to Step 2. Confirm?');
                    if(c) {
                        this.code = '';
                        this.step--;
                    }
                  } else {
                      this.step--;
                  }
              },
              next: function() {
                  if(this.step === this.steps.length) {
                      return ;
                  } else {
                      this.step++;
                  }
              },
              getAuth: function() {
                  this.resetConfirmation();
                  // location.href = this.auth;
                  vue.next();
              },
              createFiO: function(e) {
                  //reset
                  if(this.fio._id !== 0) {
                    vue.next();
                    // vue.refresh(true);
                    return ;
                  }

                  var validate = true;
                  vue.resetErrorMessage('#step3-container', false);
                  $('#step3-error-msg').addClass('d-none');

                  //validate
                  if(this.sheetUrl === '') {
                      validate = false;
                      vue.setErrorMessage('#form-group-sheet', 'Required field.');
                  } else {
                      var sheet_url = this.sheetUrl.split('/');
                      if(sheet_url === '' || sheet_url['5'] === '') {
                          validate = false;
                          vue.setErrorMessage('#form-group-sheet', 'Required field.');
                      }
                  }
                  if(this.fio.tab === '') {
                      validate = false;
                      vue.setErrorMessage('#form-group-tab', 'Required field.');
                  }
                  if(this.fio.name === '') {
                      vue.setErrorMessage('#form-group-fio_name', 'Required field.');
                      return ;
                  }

                  if(validate) {
                      this.fio.sheet = sheet_url['5'];
                      $('#step3-container').addClass('d-none');
                      $('#loading-view').removeClass('d-none');

                      // api('/addFio', this.fio, function(fio_id) {
                          $('#step3-container').removeClass('d-none');
                          $('#loading-view').addClass('d-none');

                            data.fio._id = 1;
                            vue.next();
                            // data.fio._id = fio_id;
                            // vue.refresh(true);

                          // },function(result) {
                          //     //error
                          //     $('#step3-container, #step3-error-msg').removeClass('d-none');
                          //     $('#loading-view').addClass('d-none');
                          //     vue.setErrorMessage('#form-group-sheet', ' ');
                          //     vue.setErrorMessage('#form-group-tab', ' ');
                          //     return ;
                          // }
                      // );
                  }
              },
              update: function(e) {
                  //reset
                  var validate = true;
                  vue.resetErrorMessage('#step4-container', false);

                  //validate
                  var i = 0;
                  for (var k in this.fio.apis[0].input) {
                    if (!this.fio.apis[0].input[k]) {
                      validate = false;
                      vue.setErrorMessage('#form-group-coustom-'+i, 'Select the column');
                    }

                    i++;
                  }

                  var d = 0;
                  for(var d in this.fio.apis[0].input.data ) {
                    if (!this.fio.apis[0].input.data[d]) {
                        validate = false;
                        vue.setErrorMessage('#form-group-coustom-'+d, 'Select the column');
                    }
                    d++;
                  }

                  for (var k in this.fio.apis[0].output) {
                      if (!this.fio.apis[0].output[k]) {
                          validate = false;
                          vue.setErrorMessage('#form-group-'+k);
                      }
                  }

                  if (!this.fio.confirm) {
                      validate = false;
                      vue.setErrorMessage('#form-group-confirm');
                  }

                  if(validate) {
                    $('#loading-view').addClass('d-none');
                    $('#step4-container').removeClass('d-none');
                      // api.put('/fio/'+this.fio._id, this.fio,
                      //     function(e) {
                            $('#step4-container').removeClass('d-none');
                            $('#loading-view').addClass('d-none');
                            vue.next();
                      //     },
                      //     function(result) {
                      //      $('#step4-container').removeClass('d-none');
                      //      $('#loading-view').addClass('d-none');
                      //     }
                      // );
                  }
            },
            edit: function(e) {
                //reset
                var validate = true;
                vue.resetErrorMessage('#form-container', false);

                //validate
                var i = 0;
            	for (var k in this.fio.apis[0].input) {
                    if(k !== 'data') {
                       if (!this.fio.apis[0].input[k]) {
                            validate = false;
                            vue.setErrorMessage('#form-group-coustom-'+i, 'Select the column');
                        }
                    }

                    i++;
                }


                var d = 0;
                for(var d in this.fio.apis[0].input.data ) {
                    if (!this.fio.apis[0].input.data[d]) {
                        validate = false;
                        vue.setErrorMessage('#form-group-coustom-'+d, 'Select the column');
                    }
                    d++;
                }

                for (var k in this.fio.apis[0].output) {
                    if (!this.fio.apis[0].output[k]) {
                        validate = false;
                        vue.setErrorMessage('#form-group-'+k);
                    }
                }
                
                if (!this.fio.confirm) {
                    validate = false;
                    vue.setErrorMessage('#form-group-confirm');
                }

                if(validate) {
                	alert('Success.');
                	location.href = 'list.html';
                    // api.put('/fio/'+this.fio._id, this.fio, 
                    // 	function(e) {
	                   //      alert('Success.');
	                   //      location.href = '/decx/list';
	                   //  },
                    //     function(result) {
                    //         console.log(result);
                    //     }
                    // );
                }
                  
            }
		}
	});
})
