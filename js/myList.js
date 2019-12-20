$(function(){
	function countList(){
		var count = 0;
		$('.price').each(function(index,val){
			count += $(val).text() * $(val).siblings('.number').text();
		})
		$('#price').text(count);
	}
	countList();
	function check(){//检验订单表是否为空
		if($('tbody').children().length === 0){
			$('tbody').html(`<tr><td style="flex:100000">订单信息为空哦！请您点餐后再看吧。<td></tr>`);
		}
	}
	for(var i=0; i<localStorage.length;i++){
		var item = localStorage.getItem(localStorage.key(i));//从数据库里添加食物
		item = JSON.parse(item);
		$('tbody').append(`
			<tr index="${localStorage.key(i)}">
				<td>${item.name}</td>
				<td class="price">${item.price}</td>
				<td class="number">${item.count}</td>
				<td><button class="delete">删除该食物</button></td>
			</tr>
		`);
		countList();
	  	//console.log('名字：'+localStorage.key(i)+',值为：'+localStorage.getItem(localStorage.key(i)));
	}
	$('tbody').on('click','button',function(e){//删除食物，同时更新总价和数据库
		var tr = $(e.target).parent().parent();
		localStorage.removeItem(tr.attr('index'));
		tr.remove();
		countList();
		check();
	})
	check();
})