eval(
    (function (p, a, c, k, e, d) {
        e = function (c) {
            return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
        };
        if (!"".replace(/^/, String)) {
            while (c--) {
                d[e(c)] = k[c] || e(c);
            }
            k = [
                function (e) {
                    return d[e];
                },
            ];
            e = function () {
                return "\\w+";
            };
            c = 1;
        }
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
            }
        }
        return p;
    })(
        '6 2h="/2i/2N/2M.1k";$(c).2R(9(){1s(\'a.1l, 2O.1l, 2Q.1l\');2e=1t 1O();2e.O=2h});9 1s(2x){$(2x).m(9(){6 t=V.L||V.1C||J;6 a=V.o||V.1S;6 g=V.2L||N;1b(t,a,g);V.38();G N})}9 1b(H,d,16){33{4(2I c.p.B.2F==="2G"){$("p","11").n({s:"2s%",q:"2s%"});$("11").n("2u","32");4(c.2d("1B")===J){$("p").l("<W O=\'/2i/36.1k\' 5=\'1B\'></W><3 5=\'v\'></3><3 5=\'8\'></3>");$("#v").m(F)}}b{4(c.2d("v")===J){$("p").l("<3 5=\'v\'></3><3 5=\'8\'></3>");$("#v").m(F)}}4(2E()){$("#v").2f("31")}b{$("#v").2f("2Z")}4(H===J){H=""}$("p").l("<3 5=\'C\'><3 1T=\'2U-2M\'></3></3>");$(\'#C\').2T();6 1e;4(d.K("?")!==-1){1e=d.2V(0,d.K("?"))}b{1e=d}6 1Q=/\\.25$|\\.2w$|\\.2C$|\\.1k$|\\.2B$/;6 R=1e.1K().23(1Q);4(R==\'.25\'||R==\'.2w\'||R==\'.2C\'||R==\'.1k\'||R==\'.2B\'){1x="";1y="";18="";1p="";1o="";X="";1z="";1P=N;4(16){z=$("a[@2L="+16+"]").2X();2q(r=0;((r<z.19)&&(X===""));r++){6 2Y=z[r].o.1K().23(1Q);4(!(z[r].o==d)){4(1P){1p=z[r].L;1o=z[r].o;X="<1h 5=\'21\'>&1i;&1i;<a o=\'#\'>2S &37;</a></1h>"}b{1x=z[r].L;1y=z[r].o;18="<1h 5=\'24\'>&1i;&1i;<a o=\'#\'>&35; 34</a></1h>"}}b{1P=1m;1z="1O "+(r+1)+" 2P "+(z.19)}}}M=1t 1O();M.1a=9(){M.1a=J;6 1E=2n();6 x=1E[0]-1R;6 y=1E[1]-1R;6 f=M.q;6 k=M.s;4(f>x){k=k*(x/f);f=x;4(k>y){f=f*(y/k);k=y}}b 4(k>y){f=f*(y/k);k=y;4(f>x){k=k*(x/f);f=x}}12=f+30;1j=k+2W;$("#8").l("<a o=\'\' 5=\'1V\' L=\'1M\'><3w 5=\'3x\' O=\'"+d+"\' q=\'"+f+"\' s=\'"+k+"\' 1S=\'"+H+"\'/></a>"+"<3 5=\'3v\'>"+H+"<3 5=\'3u\'>"+1z+18+X+"</3></3><3 5=\'3r\'><a o=\'#\' 5=\'U\' L=\'1M\'>1r</a> 1A 1w 1u</3>");$("#U").m(F);4(!(18==="")){9 14(){4($(c).I("m",14)){$(c).I("m",14)}$("#8").u();$("p").l("<3 5=\'8\'></3>");1b(1x,1y,16);G N}$("#24").m(14)}4(!(X==="")){9 1L(){$("#8").u();$("p").l("<3 5=\'8\'></3>");1b(1p,1o,16);G N}$("#21").m(1L)}c.1n=9(e){4(e==J){D=2z.2y}b{D=e.2v}4(D==27){F()}b 4(D==3s){4(!(X=="")){c.1n="";1L()}}b 4(D==3z){4(!(18=="")){c.1n="";14()}}};Z();$("#C").u();$("#1V").m(F);$("#8").n({P:"Q"})};M.O=d}b{6 1W=d.2l(/^[^\\?]+\\??/,\'\');6 E=2j(1W);12=(E[\'q\']*1)+30||3y;1j=(E[\'s\']*1)+3A||3F;S=12-30;T=1j-3E;4(d.K(\'2A\')!=-1){1G=d.1J(\'3B\');$("#Y").u();4(E[\'1v\']!="1m"){$("#8").l("<3 5=\'22\'><3 5=\'1I\'>"+H+"</3><3 5=\'1U\'><a o=\'#\' 5=\'U\' L=\'1M\'>1r</a> 1A 1w 1u</3></3><W 1Y=\'0\' 1X=\'0\' O=\'"+1G[0]+"\' 5=\'Y\' 1C=\'Y"+1g.1Z(1g.1N()*20)+"\' 1a=\'1q()\' B=\'q:"+(S+29)+"j;s:"+(T+17)+"j;\' > </W>")}b{$("#v").I();$("#8").l("<W 1Y=\'0\' 1X=\'0\' O=\'"+1G[0]+"\' 5=\'Y\' 1C=\'Y"+1g.1Z(1g.1N()*20)+"\' 1a=\'1q()\' B=\'q:"+(S+29)+"j;s:"+(T+17)+"j;\'> </W>")}}b{4($("#8").n("P")!="Q"){4(E[\'1v\']!="1m"){$("#8").l("<3 5=\'22\'><3 5=\'1I\'>"+H+"</3><3 5=\'1U\'><a o=\'#\' 5=\'U\'>1r</a> 1A 1w 1u</3></3><3 5=\'A\' B=\'q:"+S+"j;s:"+T+"j\'></3>")}b{$("#v").I();$("#8").l("<3 5=\'A\' 1T=\'3p\' B=\'q:"+S+"j;s:"+T+"j;\'></3>")}}b{$("#A")[0].B.q=S+"j";$("#A")[0].B.s=T+"j";$("#A")[0].3q=0;$("#1I").11(H)}}$("#U").m(F);4(d.K(\'39\')!=-1){$("#A").l($(\'#\'+E[\'2c\']).2D());$("#8").2J(9(){$(\'#\'+E[\'2c\']).l($("#A").2D())});Z();$("#C").u();$("#8").n({P:"Q"})}b 4(d.K(\'2A\')!=-1){Z();4($.1H.3g){$("#C").u();$("#8").n({P:"Q"})}}b{$("#A").3e(d+="&1N="+(1t 3d().3a()),9(){Z();$("#C").u();1s("#A a.1l");$("#8").n({P:"Q"})})}}4(!E[\'1v\']){c.2t=9(e){4(e==J){D=2z.2y}b{D=e.2v}4(D==27){F()}}}}3b(e){}}9 1q(){$("#C").u();$("#8").n({P:"Q"})}9 F(){$("#3h").I("m");$("#U").I("m");$("#8").3i("3n",9(){$(\'#8,#v,#1B\').3o("2J").I().u()});$("#C").u();4(2I c.p.B.2F=="2G"){$("p","11").n({s:"2H",q:"2H"});$("11").n("2u","")}c.1n="";c.2t="";G N}9 Z(){$("#8").n({3m:\'-\'+28((12/2),10)+\'j\',q:12+\'j\'});4(!(2g.1H.3l&&2g.1H.3j<7)){$("#8").n({3k:\'-\'+28((1j/2),10)+\'j\'})}}9 2j(1F){6 1c={};4(!1F){G 1c}6 1D=1F.1J(/[;&]/);2q(6 i=0;i<1D.19;i++){6 13=1D[i].1J(\'=\');4(!13||13.19!=2){3f}6 2m=2k(13[0]);6 1d=2k(13[1]);1d=1d.2l(/\\+/g,\' \');1c[2m]=1d}G 1c}9 2n(){6 15=c.3c;6 w=2r.2o||2b.2o||(15&&15.2p)||c.p.2p;6 h=2r.2a||2b.2a||(15&&15.26)||c.p.26;2K=[w,h];G 2K}9 2E(){6 1f=3t.1f.1K();4(1f.K(\'3C\')!=-1&&1f.K(\'3D\')!=-1){G 1m}}',
        62,
        228,
        "|||div|if|id|var||TB_window|function||else|document|url||imageWidth||||px|imageHeight|append|click|css|href|body|width|TB_Counter|height||remove|TB_overlay||||TB_TempArray|TB_ajaxContent|style|TB_load|keycode|params|tb_remove|return|caption|unbind|null|indexOf|title|imgPreloader|false|src|display|block|urlType|ajaxContentW|ajaxContentH|TB_closeWindowButton|this|iframe|TB_NextHTML|TB_iframeContent|tb_position||html|TB_WIDTH|KeyVal|goPrev|de|imageGroup||TB_PrevHTML|length|onload|tb_show|Params|val|baseURL|userAgent|Math|span|nbsp|TB_HEIGHT|gif|thickbox|true|onkeydown|TB_NextURL|TB_NextCaption|tb_showIframe|close|tb_init|new|Key|modal|Esc|TB_PrevCaption|TB_PrevURL|TB_imageCount|or|TB_HideSelect|name|Pairs|pagesize|query|urlNoQuery|browser|TB_ajaxWindowTitle|split|toLowerCase|goNext|Close|random|Image|TB_FoundURL|urlString|150|alt|class|TB_closeAjaxWindow|TB_ImageOff|queryString|hspace|frameborder|round|1000|TB_next|TB_title|match|TB_prev|jpg|clientHeight||parseInt||innerHeight|self|inlineId|getElementById|imgLoader|addClass|jQuery|tb_pathToImage|images|tb_parseQuery|unescape|replace|key|tb_getPageSize|innerWidth|clientWidth|for|window|100|onkeyup|overflow|which|jpeg|domChunk|keyCode|event|TB_iframe|bmp|png|children|tb_detectMacXFF|maxHeight|undefined|auto|typeof|unload|arrayPageSize|rel|loader|reports|area|of|input|ready|Next|show|sprite|substr|60|get|urlTypeTemp|TB_overlayBG||TB_overlayMacFFBGHack|hidden|try|Prev|lt|1x1|gt|blur|TB_inline|getTime|catch|documentElement|Date|load|continue|safari|TB_imageOff|fadeOut|version|marginTop|msie|marginLeft|fast|trigger|TB_modal|scrollTop|TB_closeWindow|190|navigator|TB_secondLine|TB_caption|img|TB_Image|630|188|40|TB_|mac|firefox|45|440".split(
            "|"
        ),
        0,
        {}
    )
);
var obj =  new Function("console.log('here')")();  // Noncompliant

const rootDiv = document.getElementById('root');
const hash = decodeURIComponent(location.hash.substr(1));
rootDiv.innerHTML = hash;
//let untrusted_ajax_res = document.write(location.replace("https://www.w3schools.com"));    
//document.getElementById("body").innerHTML=untrusted_ajax_res;
// document.location = document.location.hash.slice(1);
