$(function(){
	var addBut = $('#add-button');
	var a = 16;
	var items = 0,flag = false;//控制购物车的显示
	function test(button){//若购物车里已有此商品，只增加商品数目
		var name = document.querySelectorAll('#name');
		for([index,val] of name.entries()){
			if($(val).text() == button.attr('name')){
				return index + 1;
			}
		}
		return false;
	}
	//$('#food').find('#name').eq(0).text() == but.attr('name')
	$('#meal').on('click','button',function(e){//主页添加食物到购物车
		var but = $(e.target);
		if(!flag){
			flag = true;
			$('#container').animate({left:'8rem'},500);
			$('#message').animate({right:'0rem'},500);
		}
		if( test(but) ){//若购物车里已有此商品，只增加商品数目
			var index = test(but);
			var span = document.querySelectorAll('#count')[index - 1];
			var count = span.innerText;
			span.innerText = ++count;
		} else{//若购物车里没有此商品，增加此商品
			items++;
			$('#food').append(`
				<li>
					<span id="name">${but.attr('name')}</span>
					<div>
						<button>-</button>
						<span id="count" price='${but.attr('price')}'>1</span>
						<button>+</button>
					</div>
				</li>
			`);
		}
	})
	$('#food').on('click','button',function(e){//购物车里的加和减
		var but = $(e.target);
		if(but.text() == '+'){
			var span = but.prev();
			var count = span.text();
			span.text(++count);
		} else {
			var span = but.next();
			var count = span.text();
			span.text(--count);
			if(count == 0){
				items--;
				countTotal();//在节点移除前计算总价
				but.parent().parent().remove();
				if(items == 0){
					flag = false;
					$('#container').animate({left:'18rem'},500);
					$('#message').animate({right:'-20rem'},500);
				}
			}
		}
	})
	$('#toggle').on('click',function(){//点击切换购物车的显示与否
		if(!flag){
			flag = true;
			$('#container').animate({left:'8rem'},500);
			$('#message').animate({right:'0rem'},500);
		} else{
			flag = false;
			$('#container').animate({left:'18rem'},500);
			$('#message').animate({right:'-20rem'},500);
		}
	})
	$('form').on('submit',function(e){//检验提交表单
		if(!confirm('您确定要提交订单么？')){
			return false;
		} else {
			$('#food>li').each(function(index,val){//判断数据库里是否已有该商品，若有则只增加数目，若没有添加该商品
				var check = false;
				for(var i=0; i<localStorage.length;i++){
					var currentItem = localStorage.getItem(localStorage.key(i));
					currentItem = JSON.parse(currentItem);
					if(currentItem.name === $(val).find('#name').text()){
						currentItem.count *= 1;
						currentItem.count += $(val).find('#count').text() * 1;
						currentItem.count += '';
						currentItem = JSON.stringify(currentItem);
						localStorage.setItem(localStorage.key(i),currentItem);
						check = true;
						break;
					}
				}
				if(check){
					return true;
				}
				//localStorage.clear();
				var items = {//将所需数据包装为JSON
					// "$(val).find('#name').text()":
					"name":$(val).find('#name').text(),
					"price":$(val).find('#count').attr('price'),
					"count":$(val).find('#count').text()
				}
				items = JSON.stringify(items);
				localStorage.setItem(index,items);
			})
			return true;
		}
	})
	$('html').on('click','button',function(e){//每次触发商品变化的事件后计算购物车中商品的总价格
		countTotal();
	})
	function countTotal(){
		var count = 0;
		$('#food>li').each(function(index,val){
			//console.log($(val).find('#count').attr('price') + '----' +$(val).find('#count').text());
			count += $(val).find('#count').attr('price') * $(val).find('#count').text();
		})
		$('#price').text(count);
	}
	countTotal();
})
