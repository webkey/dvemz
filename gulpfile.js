'use strict';

var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass'), // Подключаем Sass пакет https://github.com/dlmanning/gulp-sass
	browserSync = require('browser-sync').create(), // Подключаем Browser Sync
	reload = browserSync.reload,
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления префиксов
	sourcemaps = require('gulp-sourcemaps'), // Подключаем Source Map для дебагинга sass-файлов https://github.com/floridoo/gulp-sourcemaps
	fileinclude = require('gulp-file-include'),
	markdown = require('markdown'),
	htmlbeautify = require('gulp-html-beautify'), // Причесываем
	fs = require('fs'), // For compiling modernizr.min.js
	modernizr = require('modernizr'), // For compiling modernizr.min.js
	config = require('./modernizr-config'), // Path to modernizr-config.json
	replace = require('gulp-string-replace'),
	htmlmin = require('gulp-htmlmin')
	;

var path = {
	'dist': '4'
};

gulp.task('htmlCompilation', function () { // Таск формирования ДОМ страниц
	return gulp.src(['src/__*.html'])
		.pipe(fileinclude({
			filters: {
				markdown: markdown.parse
			}
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.substr(2);
		}))
		.pipe(htmlbeautify({
			"indent_with_tabs": true,
			"max_preserve_newlines": 0
		}))
		.pipe(gulp.dest('./src/'));
});

/// Таск для переноса normalize.css и его минификации
gulp.task('compressNormalizeCss', function () {
	return gulp.src('src/libs/normalize-css/normalize.css')
		.pipe(gulp.dest('src/sass/base/'))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/sass/base/'));
});

gulp.task('sassCompilation', ['compressNormalizeCss'], function () { // Создаем таск для компиляции sass файлов
	return gulp.src('src/sass/**/*.+(scss|sass)') // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded', // nested (default), expanded, compact, compressed
			indentType: 'tab',
			indentWidth: 1,
			precision: 3,
			linefeed: 'lf' // cr, crlf, lf or lfcr
		}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(replace('../../', '../')) /// в css файлах меняем пути к файлам с ../../ на ../
		.pipe(autoprefixer([
			'last 5 versions', '> 1%', 'ie >= 9', 'and_chr >= 2.3' //, 'ie 8', 'ie 7'
		], {
			cascade: true
		})) // Создаем префиксы
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./src/css')) // Выгружаем результата в папку src/css
		.pipe(browserSync.reload({
			stream: true
		})); // Обновляем CSS на странице при изменении
});

gulp.task('mergeCssLibs', ['addFotoramaCss'], function () { // Таск для мержа css библиотек
	return gulp.src([
		'src/css/temp/*.css' // see gulpfile-special.js
		,'src/libs/fullpage.js/dist/jquery.fullpage.min.css'
		, 'src/libs/select2/dist/css/select2.min.css'
		// jquery ui
		, 'src/libs/jquery-ui/themes/base/base.css'
		// , 'src/libs/jquery-ui/themes/base/button.css'
		// , 'src/libs/jquery-ui/themes/base/checkboxradio.css'
		, 'src/libs/jquery-ui/themes/base/spinner.css'
		, 'src/libs/toastr/toastr.min.css' // non-blocking notifications
		, 'src/libs/magnific-popup/dist/magnific-popup.css' // Magnific Popup - v1.1.0 - 2016-02-20 http://dimsemenov.com/plugins/magnific-popup/
		// , 'src/libs/jquery-ui/themes/base/theme.css'
		// , 'src/lib/plugin/file.css'
	]) // Выбираем файлы для конкатенации
		.pipe(concatCss("src/css/libs.css", {
			rebaseUrls: false
		}))
		.pipe(gulp.dest('./')) // Выгружаем в папку src/css несжатую версию
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('./')); // Выгружаем в папку src/css сжатую версию
});

gulp.task('createCustomModernizr', function (done) { // Таск для формирования кастомного modernizr
	modernizr.build(config, function (code) {
		fs.writeFile('src/js/modernizr.min.js', code, done);
	});
});

gulp.task('copyLibsScriptsToJs', ['copyJqueryToJs'], function () { // Таск для мераж js библиотек
	return gulp.src([
		'src/libs/jquery-mousewheel/jquery.mousewheel.min.js' // mousewheel
		// jquery ui
		, 'src/libs/jquery-ui/jquery-ui.min.js'
		// jquery ui end
		, 'src/libs/device.js/lib/device.min.js' // определение устройств
		, 'src/js/temp/filer.min.js' // инпут файл
		, 'src/libs/jquery-smartresize/jquery.debouncedresize.js' // "умный" ресайз
		, 'src/libs/jquery-placeholder/jquery.placeholder.min.js' // поддержка плейсхолдера в старых браузерах
		, 'src/libs/gsap/src/minified/TweenMax.min.js' // библиотека для создания анимаций
		, 'src/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js' // плагин проскролла к заданной позиции
		, 'src/libs/matchHeight/dist/jquery.matchHeight-min.js' // скрипт для выравнивания элементов по максимальному
		, 'src/libs/slick-carousel/slick/slick.min.js' // slick slider
		, 'src/libs/fullpage.js/dist/jquery.fullpage.min.js' // скрипт для постраничной прокрутки
		, 'src/libs/select2/dist/js/select2.full.min.js' // кастомный селект
		, 'src/libs/select2/dist/js/i18n/ru.js' // локализация для кастомного селекта
		, 'src/libs/fotorama/fotorama.js'
		, 'src/libs/page-scroll-to-id/jquery.malihu.PageScroll2id.js'
		, 'node_modules/object-fit-images/dist/ofi.min.js' // object-fit fix for a non-support browsers
		, 'src/libs/toastr/toastr.min.js' // non-blocking notifications
		, 'src/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Magnific Popup - v1.1.0 - 2016-02-20 http://dimsemenov.com/plugins/magnific-popup/
	])
		.pipe(concat('libs.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(gulp.dest('src/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('src/js')); // Выгружаем в папку src/js
});

gulp.task('copyJqueryToJs', function () { // Таск для копирования jquery в js папку
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
		.pipe(gulp.dest('src/js'));
});

gulp.task('browserSync', function (done) { // Таск browserSync
	browserSync.init({
		server: {
			baseDir: "./src"
		},
		notify: false // Отключаем уведомления
	});
	browserSync.watch(['src/*.html', 'src/js/**/*.js', 'src/includes-json/**/*.json']).on("change", browserSync.reload);
	done();
});

// ============= ТОЛЬКО ДЛЯ ТЕКУЩЕГО ПРОЕКТА ===========//
// необходимо запустить перед mergeCssLibs
gulp.task('addFotoramaCss', ['copyFotoramaImg'], function () { // Таск для добавления стилей библиотеки fotorama.js
	return gulp.src([
		'src/libs/fotorama/fotorama.css'
	])
		.pipe(replace(/url\(/g, 'url(../img/')) // необходимо заменить пути к картинкам для fotorama.js
		.pipe(gulp.dest('src/css/temp')); // Выгружаем в папку src/css/temp
});
gulp.task('copyFotoramaImg', function () {
	return gulp.src([
		'src/libs/fotorama/fotorama.png'
		, 'src/libs/fotorama/fotorama@2x.png'
	])
		.pipe(gulp.dest('src/img')); // Выгружаем в папку src
});
// ============= ТОЛЬКО ДЛЯ ТЕКУЩЕГО ПРОЕКТА (КОНЕЦ) ===========//

gulp.task('watch', ['createCustomModernizr', 'browserSync', 'htmlCompilation', 'sassCompilation', 'mergeCssLibs', 'copyLibsScriptsToJs'], function () {
	gulp.watch(['src/*.tpl', 'src/*.xhtml', 'src/_tpl_*.html', 'src/__*.html', 'src/includes-json/**/*.json'], ['htmlCompilation']); // Наблюдение за темплейтами и файлами в папке include-json
	gulp.watch('src/sass/**/*.+(scss|sass)', ['sassCompilation']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']); // Назначаем таск watch дефолтным

/************************************************************
 * Create Distribution folder and move files to it
 ************************************************************/

gulp.task('copyImgToDist', function () {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			optimizationLevel: 7, //степень сжатия от 0 до 7
			use: [pngquant()]
		})))
		.pipe(gulp.dest(path.dist + '/img')); // Выгружаем на продакшен
});

gulp.task('build', ['cleanDistFolder', 'htmlCompilation', 'copyImgToDist', 'sassCompilation', 'mergeCssLibs', 'createCustomModernizr', 'copyLibsScriptsToJs'], function () {

	gulp.src('src/css/*.css')
		.pipe(gulp.dest(path.dist + '/css'));

	// если необходимо сжать main.css
	// gulp.src('src/css/main.css')
	// 	.pipe(cssnano())
	// 	.pipe(rename({suffix: '.min'}))
	// 	.pipe(gulp.dest(path.dist + '/css'));

	gulp.src('src/fonts/**/*')
		.pipe(gulp.dest(path.dist + '/fonts')); // Переносим шрифты в продакшен

	gulp.src(['!src/js/temp/**/*.js', '!src/js/**/temp-*.js', 'src/js/*.js'])
		.pipe(gulp.dest(path.dist + '/js')); // Переносим скрипты в продакшен

	// если необходимо сжать common.js
	// gulp.src(['src/js/common.js'])
	// 	.pipe(rename({suffix: '.min'}))
	// 	.pipe(uglify()) // Сжимаем JS файл
	// 	.pipe(gulp.dest(path.dist + '/js')); // Переносим скрипты в продакшен

	gulp.src('src/files/**/*')
		.pipe(gulp.dest(path.dist + '/files')); // Переносим дополнительные файлы в продакшен

	gulp.src(['!src/__*.html', '!src/_tpl_*.html', 'src/*.html'])
		//.pipe(replace('css/main.css', 'css/main.min.css')) // меняем подключение main.css на main.min.css
		//.pipe(replace('js/common.js', 'js/common.min.js')) // меняем подключение common.js на common.min.js
		//.pipe(htmlmin({collapseWhitespace: true})) // если необходимо сжать html
		.pipe(gulp.dest(path.dist)); // Переносим HTML в продакшен

	gulp.src(['src/*.png', 'src/*.ico', 'src/.htaccess', 'src/manifest.json']) // Переносим favicon и др. файлы в продакшин
		.pipe(gulp.dest(path.dist));

});

gulp.task('cleanDistFolder', function () {
	return del.sync([path.dist + '/']); // Удаляем папку dist
});

gulp.task('clearCache', function () { // Создаем такс для очистки кэша
	return cache.clearAll();
});