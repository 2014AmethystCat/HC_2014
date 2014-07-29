$(function(){

	var index = 1;
	var timer = null;

	var $nav = $( ".promo-nav li" );//导航小圆点
	var $view = $( ".promo" );//容器
	var $handle = $( ".promo-opt" );//左右箭头容器
	var $pipe = $( ".promo-bd>div" );//传送带

	var $firstPipeItem = $( ".promo-bd>div>div" ).first();//大桥
	var $lastPipeItem = $( ".promo-bd>div>div" ).last();//海星
	$firstPipeItem.clone( true ).appendTo( $pipe );//克隆大桥至传送带末尾
	$lastPipeItem.clone( true ).prependTo( $pipe );//克隆海星至传送带开头

	var $pipeItem = $( ".promo-bd>div>div" );//$pipeItem:保存传送带中的图片容器的集合
	var imgWidth = 520;//单位图片宽 520px
	$pipe.width( $pipeItem.length * imgWidth );//传送带的宽

    /**
     * 滚动函数
     * 参数是图片的索引
     * @param i
     */
	function slide( i ){
		if( i === 0 ){                                          //如果index = 0,即海星（海星在显示的时候，视觉上是最后一张）
			setNavFocus( $nav.eq( 4 ) );                        //导航小圆点选中最后一个（一共有5个，起始位置从0开始）
		}else if( i === $pipeItem.length - 1 ){                 //如果index = 6，即大桥（大桥在显示的时候，视觉上是最后一张）
			setNavFocus( $nav.eq( 0 ) );                        //导航小圆点选中第一个
		}else{
            //其它情况下，由于之前将最后一张图片克隆至传送带起始位置，导致第二张图片（视觉上是第一张图片）的索引（index = 1）才对应第一个小圆点(index = 0)，
            setNavFocus( $nav.eq( i - 1 ) );
		}
		$pipe.animate( {left: -i * imgWidth}, 200, function(){
			if( i === 0 ){                                      //如果index = 0，视觉上是代表的最后一张图片（海星），将传送带的left值设为传送带（算5张图片）的带宽
				$pipe.css( "left", ( $pipeItem.length - 2 ) * -imgWidth );
				index = $pipeItem.length - 2;                   //索引设为 5
			}else if( i === $pipeItem.length - 1 ){             //如果index = 6，视觉上是代表的第一张图片（大桥），将传送带的left值设为传送带算1张图片的带宽，然后将index的值设为1，代表视觉上第一张图片的索引，在代码中实际上是第二张图片。
				$pipe.css( "left", -imgWidth );
				index = 1;                                      //索引设为1
			}
		});
	}

	function setNavFocus( $obj ){
		$obj.addClass( "selected" ).siblings().removeClass( "selected" );
	}

	$nav.on( "click", function(){
		var i = $( this ).index() + 1;
		slide( i );
		index = i;
	});

	$view.on( "mouseover", function(){
		$handle.show();
		clearInterval( timer );
	}).on("mouseout", function(){
		$handle.hide();
		setTimer();
	});

	$( ".prev" ).on( "click", function(){
		if( !$pipe.is( ":animated" ) ){
			slide( --index );
		}
	});

	$( ".next" ).on( "click", function(){
		if( !$pipe.is( ":animated" ) ){
            console.log(index);
			slide( ++index );
            console.log(index);
		}
	});

	function setTimer(){
		timer = setInterval( function(){
			$( ".next" ).trigger( "click" );
		}, 2000 );
	}

	setTimer();
});