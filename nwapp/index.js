var gui = require('nw.gui')
var log = require('./lib/log.js')
var argv = require('./lib/argv.js')

/*
	Bootstrap
*/
argv.init(gui.App.argv) // provide access to process argv to all require()d modules

process.mainModule.exports.init() // init nodeMain.js

var config = require('./lib/config.js') // config depends on argv, but cannot access it before we initialize argv module

log.setLevel(config.logLevel) // that...

log.info('bootstrapping done.')

// Get the current window
// var win = gui.Window.get()

// $(function () {

// 	$('#closeApp').click(function () {
// 		gui.App.quit()
// 	})

// 	$('#minApp').click(function () {
// 		win.minimize()
// 	})

// })

$(function () {
	$('div.container h2#EST').text(luxon.DateTime.local().setZone('America/New_York'));
	$('div.container h2#IST').text(luxon.DateTime.local());
	$('div.container h2#UTC').text(luxon.DateTime.local().setZone('UTC'));

});