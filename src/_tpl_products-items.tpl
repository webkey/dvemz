@@if (context.inCart) {
	<article class="products__item in-cart">
}
@@if (!context.inCart) {
	<article class="products__item">
}
	@@if (context.news != "true") {
	<div class="products__inner">

		<div class="products__body">
			<a href="automatic-card.html" class="products__figure">
				<div class="products__img">
					<img src="img/@@src" alt="@@title" />
				</div>
			</a>
			<div class="products__content">
				<div class="products__title"><a href="automatic-card.html">@@title</a></div>
				<div class="products__stock">@@stock</div>
			</div>
		</div>
		<div class="products__footer">
			@@if (context.price) {
			<div class="products__price">
				<div class="cur">@@price</div>
				@@if (context.old) {
				<div class="old">@@old</div>
				}
			</div>
			}
			@@if (!context.price) {
			<div class="products__price">
				<div class="no">цена по запросу</div>
			</div>
			}
			@@if (!context.result) {
			<div class="products__options">
				<a href="#" class="btn-outline btn-with-icon">
					<i class="depict-cart">&nbsp;</i>
					<span>В корзину</span>
				</a>
				<div class="spinner has-remove">
					<input class="spinner-js" type="text" name="value" value="1" data-only-number>
					<div class="remove-from-cart"><i>&nbsp;</i><span>Удалить с корзины</span></div>
				</div>
			</div>
			}
		</div>

	</div>
	}
	@@if (context.news == "true") {
		<a href="#" class="products__inner">
			<div class="products__news-title">@@title</div>
			<div class="products__news-text">@@text</div>
			<div class="products__news-date"><time datetime="2017-09-24">@@date</time></div>
		</a>
	}

</article>