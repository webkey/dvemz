<article class="products-basket__item">
	<div class="products-basket__cell products-basket__product">
		<a href="automatic-card.html" class="products-basket__figure">
			<div class="products-basket__img">
				<img src="img/@@src" alt="@@title" />
			</div>
		</a>
		<div class="products-basket__title"><a href="automatic-card.html">@@title</a></div>
	</div>
	<div class="products-basket__cell products-basket__price" data-label="Цена, руб">
		<div class="products-basket__align">
			<div class="cur">@@price</div>
		</div>
	</div>
	<div class="products-basket__cell products-basket__amount" data-label="Количество, шт.">
		<div class="products-basket__align">
			<div class="spinner">
				<input class="spinner-js" type="text" name="value" value="@@if(context.amount){@@amount}@@if(!context.amount){1}" data-only-number>
			</div>
		</div>
	</div>
	<div class="products-basket__cell products-basket__sum" data-label="Сумма, руб">
		<div class="products-basket__align">
			<div class="cur">@@price</div>
		</div>
	</div>
	<div class="products-basket__cell products-basket__remove" data-label="&nbsp;">
		<div class="products-basket__align">
			<a href="#" class="btn-remove" title="Удалить">
				<i class="depict-remove">&nbsp;</i>
				<span>Удалить</span>
			</a>
		</div>
	</div>
</article>