# vueProject
frame of vue
第六课 2018/03/13
.hd1{color:red;}
.hd2{color:green;}

<div id="hdcms">
    <h1 v-once="">{{n}}</h1>
    {{n+3}}
    <h1 :class="'hd'+n">你好后盾人</h1>
    <input type="text" v-model="n">
    <br>
    <input type="radio" v-model="n" value="1"> 红
    <input type="radio" v-model="n" value="2"> 绿
</div>

var app = new Vue({
        el: '#hdcms',
        data: {
           n:1
        }
    });

第七课 2018/03/13
<div id="hdcms">
    <input type="text" v-model="n1"> +
    <input type="text" v-model="n2"> =
    <input type="text" v-model="sum">
</div>

var app = new Vue({
        el: '#hdcms',
        computed: {
            sum() {
                return this.n1*1+this.n2*1;
            }
        },
        data: {
            n1: 0,
            n2: 0
        }
    });

第九课 2018/03/13
<script src="node_modules/axios/dist/axios.js"></script>
<div id="hdcms">
    <input type="text" v-model="word">
    <h1>
        结果: {{result}}
    </h1>
</div>

var app = new Vue({
        el: '#hdcms',
        watch: {
            word: function (newV, oldV) {
                axios.get('9.php?word='+newV).then(function (response) {
                    app.result = response.data;
                })
            }
        },
        data: {
            word: '',
            result:''
        }
    });

