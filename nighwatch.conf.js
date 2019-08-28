// var env         = process.env.NODE_ENV || 'staging';
// var rek         = require('rekuire');
// var config      = rek('config');
// var baseURL     = config.env[env].web;

// module.exports = {
// 	src_folders: ['./tests'], //test directory
// 	output_folder: './output',
// 	// custom_commands_path : './commands',
// 	// page_objects_path: './pages',
// 	live_output: true,

// 	selenium: {
// 		start_process: true,
// 		server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.5.3.jar',
// 		log_path: './output',
// 		host: '127.0.0.1',
// //		host: '52.76.111.85', //matrix
// 		port: 4444,
// 		cli_args: {
// 			'webdriver.chrome.driver': './node_modules/.bin/chromedriver'
// 		}
// 	},

// 	test_settings: {

// 		default: {
// 			launch_url: baseURL,
// //			selenium_host: '52.76.111.85', //matrix
// 			selenium_host: '127.0.0.1',
// 			selenium_port: 4444,
// 			silent: true,
// 			disable_colors: false,
// 			screenshots: {
// 				enabled: true,
// 				path: './report/screenshots'
// 			},
// 			desiredCapabilities: {
// 				browserName: 'chrome',
// 				javascriptEnabled: true,
// 				acceptSslCerts: true,
// 				'chromeOptions' : {
// 					'args' : [
// //						 'start-maximized',
// 						'--disable-notifications'
// 					]
// 				}
// 			},
// 			test_workers: {
//                 enabled: false,
//                 workers: 'auto'
//             },
//             end_session_on_fail: false,
//             skip_testcases_on_fail: true
// 		},

// 	}
// };

module.exports = (function(settings) {
	settings.test_workers = false;
	return settings;
  })(require('./nightwatch.json'));
  
  
