/**
 * Created by home on 2017-03-11.
 */



var UI = UI || {};
var scope = { w: window, jQ: jQuery };//  Q: 이렇게 한 이유 ?

(function(param){
    var global = param.w,
        $ = param.jQ;

    UI.Carousel = function(container, options){
        if(!$(container).length) return; // 선택된 컨테이너가 하나도 없으면 실행 정지

        this.$container = $(container);

        if(!(this instanceof UI.Carousel)){
            return new UI.Carousel(container, options);  // Q: if문에서 return ... 생성되는 위치?
        }

        this.config = $.extend(this.defaults, options || {});
        this.detect = {};// Q : 어디다 쓰는 녀석인고?
        this._init();

    };

    UI.Carousel.prototype = {
        defaults : {
            start: 0,
            autoPlay: true,
            duration: 1000,
            interval : 3000
        },

        _init: function(){

        },
        _detectDom : function(){  // 기본 선택 요소 탐색 .. 탐지하다
            this.detect.$controller = this.$container.find('.contoller');
            this.detect.$visualItems = this.$container.find('.visual li');
            this.detect.$btnStop     = this.$container.find('.ctrl-stop');
            this.detect.$btnPlay     = this.$container.find('.ctrl-play');
            this.detect.maxItems     = this.detect.$visualItems.length;
            this.detect.$indicator   = null;
            this.detect.current      = 0;
            this.detect.intervalID   = null;
        },
        _setupIndicator: function(){// 인디케이터 이미지 만큼 그려주기
            var i = 0,
                len = this.detect.maxItems;
            for(; i<len;i++){
                this.detect.$controller.append( // html  role 속성 확인 !!!!
                    '<a href="#" class="indicator" data-index="' + i + '" role="button">' + (i+1) + '</a>'
                );
            }

            this.detect.$indicator = this.detect.$controller.find('.indicator');
        },
        _setEvent : function(){
            var self = this;
            // $.proxy  사용법 !!!
            // click.ui.gallery 네임스페이스로 이벤트 등록 !!!
            $(this.$container).on('click.ui.gallery', '.indicator', $.proxy(this._controller, this));

            this.detect.$btnStop.on('click.ui.stop',function(){
               var $target = $(this);
                self.config.autoPlay = false;
                clearInterval(self.detect.intervalID);
                $target.removeClass('active');
                self.detect.$btnPlay.addClass('active');
            });

            this.detect.$btnPlay.on('click.ui.play', function () {
                var $target = $(this);
                self.config.autoPlay = true;
                self._autoRolling();
                $target.removeClass('active');
                self.detect.$btnStop.addClass('active');
            });

            this.detect.$indicator.hover(///////////////////  수정되야됨
                function(){// 오버되면 정지
                    if(self.config.autoPlay) clearInterval(self.detect.intervalID);
                },
                function(){// 아웃되면 다시 재생
                    if(self.config.autoPlay) self._autoRolling();
                }
            );

        },

        _controller :function(e){
            e.preventDefault();
            var $target = $(e.currentTarget),
                index = $target.data('index');

            $target.addClass('active');// 인디케이터 선택 표시
            $target.siblings().removeClass('active');

            if( this.detect.current == index) return;// 현재화면과 인디케이터가 같을때 클릭방지
            this._hideItem(this.detect.current);
            this._showItem(index);

            this.detect.current = index;
        },
        _showItem : function(index){
            this.detect.$visualItems.eq(index).fadeIn(this.config.duration);
        },
        _hideItem : function(prevItemIndex){
            this.detect.$visualItems.eq(prevItemIndex).fadeOut(this.config.duration);
        },
        _showDefault: function(){
            this.detect.$indicator.eq(this.config.start).trigger('click');
        },
        _autoRolling :function(){
            var num, self = this;
            if(this.config.autoPlay){
                this.detect.intervalID = setInterval(function() {
                    num = self.detect.current;
                    (num < self.detect.maxItems-1)? num++ : (num=0);
                    self.detect.$indicator.eq(num).trigger('click');
                }, this.config.interval)
            }
        }
    };

    $(function(){
        var $visual = $('[data-visual="carousel"]');
        $visual.each(function(){
            new UI.Carosel(this);
        })
    });
})(scope);
