<div class="news-grid__item">
	<a href="#" class="news-grid__inner">
		@@if (context.src) {
		<div class="news-grid__img">
			<div class="news-grid__figure">
				<img src="@@src" alt="@@text" />
			</div>
		</div>
		}
		<div class="news-grid__content">
			<div class="news-grid__meta">
				<time datetime="@@datetime">@@published</time>
			</div>
			@@if(context.title){ <div class="news-grid__title">@@title</div>}
			@@if(context.text){ <div class="news-grid__text">@@text</div>}
		</div>
	</a>
</div>