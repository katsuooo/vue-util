
// 讓ｪ蟷�､画峩縺ｮ諠��ｱ
var tmLeftSideOffLen	= 700;				// 繧ｵ繧､繝峨Γ繝九Η繝ｼ繧呈ｶ医☆讓ｪ蟷�(px)
var tmMarginOffLen	= 550;				// 繝槭�繧ｸ繝ｳ繧呈ｶ医☆讓ｪ蟷�(px)
var tmCmanLinkOffLen	= 400;				// 荳矩ΚcmanLink繧呈ｶ医☆讓ｪ蟷�(px)
var tmgMenuOff		= 9;				// 繧ｵ繧､繝峨Γ繝九Η繝ｼ繧定｡ｨ遉ｺ縺励※縺�ｋ縺�
//var tmgNowMarginL	= 1;				// 繧ｳ繝ｳ繝�Φ繝��縺ｮ繝槭�繧ｸ繝ｳ蟷�
var tmgCmanLinkOff	= 9;				// cman繝ｪ繝ｳ繧ｯ繧呈ｶ医＠縺ｦ縺�ｋ蝣ｴ蜷医�0縲�
var tmCookieView	= '';
var tmOldBr			= 0;				// 蜿､縺�ヶ繝ｩ繧ｦ繧ｶ菴ｿ逕ｨ


// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	Onload
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
window.onload = function() {

	// --- Cookie縺ｮ陦ｨ遉ｺ繝｢繝ｼ繝牙叙蠕� -----------
//	tmCookieView = tmGetCookie('tmViewMode');


	// --- 陦ｨ遉ｺ繝｢繝ｼ繝会ｼ医ョ繝舌う繧ｹ�芽ｨｭ螳� -------
//	tmViewMove();


	// --- 繧ｹ繧ｯ繝ｪ繝ｼ繝ｳ繧ｵ繧､繧ｺ繧辰ookie縺ｫ菫晏ｭ� ---
	if(screen.width){
		tmSetCookie("tmSW", screen.width);
		tmSetCookie("tmSH", screen.height);
	}

	// --- 蛟句挨逕ｻ髱｢縺ｮonload蜻ｼ縺ｳ蜃ｺ縺� ---------
	if ( typeof pageOnload == "function")  {
		pageOnload();
	}

	// --- 蛟句挨逕ｻ髱｢縺ｮonload蜻ｼ縺ｳ蜃ｺ縺� ---------
	if ( typeof pageResize == "function")  {
		pageResize();
	}

}
window.onunload = function() {};

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝ｪ繧ｵ繧､繧ｺ蜃ｦ逅�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
window.onresize = tmResize;
function tmResize(){

	// 蜿､縺�ヶ繝ｩ繧ｦ繧ｶ縺ｯ繝ｪ繧ｵ繧､繧ｺ蜃ｦ逅�＠縺ｪ縺�
	if(tmOldBr == 1){return;}

	var wNowFrameWidth		= document.getElementById("tmMainFrame").clientWidth;
	var wSideMenuOff		= 0;

	// --- cman蜷�ｨｮ繝ｪ繝ｳ繧ｯ繧呈ｶ医☆縺九�蛻､螳� ----
	if(document.getElementById("cmanLinkGaid")){
		if(wNowFrameWidth < tmCmanLinkOffLen){
			// 繧ｷ繝ｼ繝槭Φ蜷�ｨｮ繝ｪ繝ｳ繧ｯ繧呈ｶ医☆
			if(tmgCmanLinkOff != 0){
				document.getElementById("cmanLinkGaid").style.display = "";
				document.getElementById("cmanLinkMeisai").style.display = "none";
				tmgCmanLinkOff= 0;
			}
		}else{
			// 繧ｷ繝ｼ繝槭Φ蜷�ｨｮ繝ｪ繝ｳ繧ｯ繧剃ｻ倥￠繧�
			if(tmgCmanLinkOff != 1){
				document.getElementById("cmanLinkGaid").style.display = "none";
				document.getElementById("cmanLinkMeisai").style.display = "";
				tmgCmanLinkOff= 1;
			}
		}
	}


	// --- 蛟句挨逕ｻ髱｢縺ｮonload蜻ｼ縺ｳ蜃ｺ縺� ---------
	if ( typeof pageResize == "function")  {
		pageResize();
	}

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//
//	繝�ヰ繧､繧ｹ驕ｸ謚槭け繝ｪ繝�け
//
//		蛟､��'auto','smart','pc'
//
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function tmChangeView(setMode) {

	// --- Cookie險ｭ螳� -----------------------
	tmSetCookie("tmViewMode", setMode);

	// --- 迴ｾ蝨ｨ縺ｮ陦ｨ遉ｺ繝｢繝ｼ繝我ｿ晏ｭ� -------------
	tmCookieView = setMode;

	// --- 陦ｨ遉ｺ繝｢繝ｼ繝牙�譖ｿ -------------------
	window.location.reload();
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	cookie蜿門ｾ�	tmGetCookie(key)
//
//	蠑墓焚�� key
//	謌ｻ繧奇ｼ� cookie蛟､縲隧ｲ蠖徒ey縺ｪ縺励�""繧定ｿ斐☆
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function tmGetCookie(key) {
	var tmp1 = " " + document.cookie + ";";
	var xx1 = 0;
	var xx2 = 0;
	var len = tmp1.length;
	while (xx1 < len) {
		xx2 = tmp1.indexOf(";", xx1);
		tmp2 = tmp1.substring(xx1 + 1, xx2);
		var xx3 = tmp2.indexOf("=");
		if (tmp2.substring(0, xx3) == key) {
			return(unescape(tmp2.substring(xx3 + 1, xx2 - xx1 - 1)));
		}
		xx1 = xx2 + 1;
	}
	return("");
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	cookie菫晏ｭ�	tmSetCookie(key,val)
//
//	蠑墓焚�� key縲�� 菫晏ｭ倥☆繧橘ey
//	蠑墓焚�� val縲�� 菫晏ｭ倥☆繧九ョ繝ｼ繧ｿ蛟､
//	謌ｻ繧奇ｼ� 縺ｪ縺�
//
//	cookie縺ｯ1譎る俣縺ｧ豸医∴繧�
//
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function tmSetCookie(key, val) {
	var xDay = new Date;
	xDay.setHours(xDay.getHours() + 1);		// 譛牙柑譛滄剞繧�1譎る俣蠕後↓險ｭ螳�
	var xLimitDay = xDay.toGMTString();		//GMT蠖｢蠑上�譁�ｭ怜�縺ｫ螟画鋤

	var tmp = key + "=" + escape(val) + "; path=/; ";
	tmp += "expires=" + xLimitDay;
	document.cookie = tmp;
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	cookie蜑企勁	tmGetCookie(key)
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function tmClearCookie(key) {
	document.cookie = key + "=" + "xx; expires=Tue, 1-Jan-1980 00:00:00;";
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	cman繝ｪ繝ｳ繧ｯ陦ｨ遉ｺ蛻ｶ蠕｡
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function cmanLinkGaidClick(){
	if(document.getElementById("cmanLinkMeisai").style.display == "none"){
		document.getElementById("cmanLinkMeisai").style.display = "block";
	}else{
		document.getElementById("cmanLinkMeisai").style.display = "none";
	}
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝｡繝九Η繝ｼOPEN
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function cmanMenuOpen(argID){

	if(document.getElementById('menuD'+argID).style.display == 'none'){
		document.getElementById('menuT'+argID).className = 'tmMenuOp';
		document.getElementById('menuD'+argID).style.display = '';
	}else{
		document.getElementById('menuT'+argID).className = 'tmMenuCl';
		document.getElementById('menuD'+argID).style.display = 'none';
	}
}


// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	逕ｻ髱｢OPEN譎ゅ�Scroll
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comStartScroll(){

	var wStartID = document.getElementById("startId").value;

	if(wStartID != ''){

		if(document.getElementById(wStartID)){

			var rect = document.getElementById(wStartID).getBoundingClientRect() ;
			var positionY = rect.top + window.pageYOffset ;	// 隕∫ｴ�縺ｮY蠎ｧ讓�

			if(document.documentElement.clientHeight < positionY){
				cmanLinkScroll(wStartID);
			}
		}

		document.getElementById("startId").value  = '';
	}

}
function comMenuCookieSet(argMenu){
	tmSetCookie('qrMenu',argMenu);
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	QR繧ｳ繝ｼ繝我ｽ懈� 螳溯｡�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comQrJikko(){
	var wSel;

	document.getElementById('idInStr').value		= document.getElementById('textString').value;

	document.getElementById('idInTitle').value		= document.getElementById('textTitle').value;

	wSel = document.getElementById('selVersion');
	document.getElementById('idInVersion').value	= wSel.options[wSel.selectedIndex].value;

	wSel = document.getElementById('selCellSize');
	document.getElementById('idInCellSize').value	= wSel.options[wSel.selectedIndex].value;

	wSel = document.getElementById('selLevel');
	document.getElementById('idInLevel').value		= wSel.options[wSel.selectedIndex].value;

	document.getElementById('idInCellColor').value	= document.getElementById('textCellColor').value;
	document.getElementById('idInBgColor').value	= document.getElementById('textBgColor').value;

	wSel = document.getElementById('selLoopStr');
	document.getElementById('idInLoopStrKbn').value	= wSel.options[wSel.selectedIndex].value;

	wSel = document.getElementById('selFormat');
	document.getElementById('idInFileForm').value	= wSel.options[wSel.selectedIndex].value;

	comJikkoPopON();

	fm1.action = "/QRcode/qr_make/";
	fm1.method = "POST";
	fm1.submit();

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	蜈･蜉帙ヨ繝ｪ繝�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comCRLF_trim(argStr){
	var rcStr = argStr;
	rcStr	= rcStr.replace(/\t/g, '');
	rcStr	= rcStr.replace(/^[ 縲\r\n]+/g, '');
	rcStr	= rcStr.replace(/[ 縲\r\n]+$/g, '');
	return rcStr;
}
function comCRLF_del(argStr){
	var rcStr = argStr;
	rcStr	= rcStr.replace(/[ 縲\r\n\t]/g, '');
	return rcStr;
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繧ｪ繝励す繝ｧ繝ｳ驕ｸ謚�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comOptionWin(argOption){

	if(document.getElementById('textString')){
		var wSel;

		document.getElementById('idInStr').value		= document.getElementById('textString').value;

		document.getElementById('idInTitle').value		= document.getElementById('textTitle').value;

		wSel = document.getElementById('selVersion');
		document.getElementById('idInVersion').value	= wSel.options[wSel.selectedIndex].value;

		wSel = document.getElementById('selCellSize');
		document.getElementById('idInCellSize').value	= wSel.options[wSel.selectedIndex].value;

		wSel = document.getElementById('selLevel');
		document.getElementById('idInLevel').value		= wSel.options[wSel.selectedIndex].value;

		document.getElementById('idInCellColor').value	= document.getElementById('textCellColor').value;
		document.getElementById('idInBgColor').value	= document.getElementById('textBgColor').value;

		wSel = document.getElementById('selLoopStr');
		document.getElementById('idInLoopStrKbn').value	= wSel.options[wSel.selectedIndex].value;

		wSel = document.getElementById('selFormat');
		document.getElementById('idInFileForm').value	= wSel.options[wSel.selectedIndex].value;
//		document.getElementById('idInStr').value	= document.getElementById('textString').value;
//		document.getElementById('idInTitle').value	= document.getElementById('textTitle').value;
//		document.getElementById('idInVersion').value	= document.getElementById('selVersion').value;
//		document.getElementById('idInCellSize').value	= document.getElementById('selCellSize').value;
//		document.getElementById('idInLevel').value	= document.getElementById('selLevel').value;
//		document.getElementById('idInCellColor').value	= document.getElementById('textCellColor').value;
//		document.getElementById('idInBgColor').value	= document.getElementById('textBgColor').value;
//		document.getElementById('idInLoopStrKbn').value	= document.getElementById('selLoopStr').value;
//		document.getElementById('idInFileForm').value	= document.getElementById('selFormat').value;
	}

	switch (argOption.toLowerCase()){
		case 'title'	:	fm1.action = "/QRcode/qr_option/title/";	break;
		case 'cellsize'	:	fm1.action = "/QRcode/qr_option/cellsize/";	break;
		case 'version'	:	fm1.action = "/QRcode/qr_option/version/";	break;
		case 'level'	:	fm1.action = "/QRcode/qr_option/level/";	break;
		case 'color'	:	fm1.action = "/QRcode/qr_option/color/";	break;
		case 'loopstr'	:	fm1.action = "/QRcode/qr_option/loopstr/";	break;
		case 'format'	:	fm1.action = "/QRcode/qr_option/format/";	break;
		default		:	fm1.action = "/QRcode/";			break;
	}
	fm1.method = "POST";
	fm1.submit();

}
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繧ｪ繝励す繝ｧ繝ｳ縺九ｉ縺ｮ繝ｪ繧ｿ繝ｼ繝ｳ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comOptionRtn(argScroll){

	var wObjStrShurui	= document.getElementById("idInStrShurui");
	var wRtnWin		= '';

	if(wObjStrShurui.value == ''){
		wRtnWin = tmGetCookie('qrMenu');
		if(wRtnWin == ''){
			wRtnWin	= 'free';
		}
	}else{
		wRtnWin	= wObjStrShurui.value;
	}

	if((argScroll != '')&&(argScroll != 'undefined')){
		document.getElementById("idInScroll").value = 'optionSelArea';
	}

	if(wRtnWin == 'free'){
		document.getElementById("idInTitle").value = '';
	}

	switch (wRtnWin.toLowerCase()){
		case 'free'	:	fm1.action = "/QRcode/";		break;		// 笆� DEBUG
		case 'url'	:	fm1.action = "/QRcode/qr_url/";			break;
		case 'mail'	:	fm1.action = "/QRcode/qr_mail/";		break;
		case 'map'	:	fm1.action = "/QRcode/qr_map/";			break;
		default		:	fm1.action = "/QRcode/";			break;
	}
	fm1.method = "POST";
	fm1.submit();

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	螳溯｡御ｸｭPOP 陦ｨ遉ｺ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comJikkoPopON(){

	var objPop	= document.getElementById('popJikko');
	var objOver	= document.getElementById('JikkoOverlay');

	var wLeft = Math.floor((document.documentElement.clientWidth - 304) / 2) + (document.body.scrollLeft || document.documentElement.scrollLeft);
	var wTop  = Math.floor((document.documentElement.clientHeight - 100) / 2) + (document.body.scrollTop  || document.documentElement.scrollTop);

	if(wLeft < 0){wLeft=0;}
	if(wTop  < 0){wTop=0;}

	objPop.style.left = wLeft+'px';
	objPop.style.top = wTop+'px';

	objOver.style.width = document.body.clientWidth + 'px';
	objOver.style.height = document.body.clientHeight + 'px';

	objOver.style.display = '';
	objPop.style.display = '';
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	螳溯｡御ｸｭPOP 髱櫁｡ｨ遉ｺ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comJikkoPopOFF(){

	document.getElementById('popJikko').style.display = 'none';;
	var objOver	= document.getElementById('JikkoOverlay');

	objOver.style.width = '5px';
	objOver.style.height = '5px';
	objOver.style.display = 'none';
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝繧ｦ繝ｳ繝ｭ繝ｼ繝臼OP 陦ｨ遉ｺ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comDownloadPopON(){

	var objPop	= document.getElementById('popDownload');
	var objOver	= document.getElementById('downOverlay');

	var wLeft = Math.floor((document.documentElement.clientWidth - 304) / 2);
	var wTop  = Math.floor((document.documentElement.clientHeight - 200) / 2);

	if(wLeft < 0){wLeft=0;}
	if(wTop  < 0){wTop=0;}

	objPop.style.left = wLeft+'px';
	if(document.getElementById('tmCgiSideOff').value == '1'){
		objPop.style.top = '10px';
	}else{
		objPop.style.top = wTop+'px';
	}

	objOver.style.width = document.body.clientWidth + 'px';
	objOver.style.height = document.body.clientHeight + 'px';

	objOver.style.display = '';
	objPop.style.display = '';
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝繧ｦ繝ｳ繝ｭ繝ｼ繝峨ヵ繧｡繧､繝ｫ蜷崎ｨｭ螳�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comDownloadNameSet(){

	var objImg	= document.getElementById('idDownloadQrImgSrc');

	var wKakuchoPos = objImg.value.lastIndexOf("_");
	document.getElementById('downKakucho').innerHTML = '.'+objImg.value.substr(wKakuchoPos + 1, 3);

	var wDayTime = new Date();
	var wY = wDayTime.getFullYear();
	var wM = wDayTime.getMonth() + 1;
	var wD = wDayTime.getDate();
	var wH = wDayTime.getHours();
	var wN = wDayTime.getMinutes();
	var wS = wDayTime.getSeconds();
	var wI = wDayTime.getMilliseconds();
	document.getElementById('inDownFileName').value = 'qr'+comNumKeta(wY,4)+comNumKeta(wM,2)+comNumKeta(wD,2)+comNumKeta(wH,2)+comNumKeta(wN,2)+comNumKeta(wS,2)+comNumKeta(wI,3);

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝繧ｦ繝ｳ繝ｭ繝ｼ繝臼OP 髱櫁｡ｨ遉ｺ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comDownloadPopOFF(){

	document.getElementById('popDownload').style.display = 'none';;
	var objOver	= document.getElementById('downOverlay');

	objOver.style.width = '5px';
	objOver.style.height = '5px';
	objOver.style.display = 'none';
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝繧ｦ繝ｳ繝ｭ繝ｼ繝峨け繝ｪ繝�け
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comQrDownLoad(){

	var wObjFileName	= document.getElementById('inDownFileName');
	var wValueB		= wObjFileName.value;

	// 繝輔ぃ繧､繝ｫ蜷肴紛蛯�
	comFileNameChk(wObjFileName);

	var wValueA		= wObjFileName.value;

	if(wValueA == ''){
		return true;
	}

	if(wValueB != wValueA){
		return true;
	}

	comErrMsgSet('');

	// --- 繝繧ｦ繝ｳ繝ｭ繝ｼ繝牙ｮ溯｡� ---------------
	document.getElementById('idDownloadFileName').value = wObjFileName.value;

	var wF = document.fDownLoad;
	wF.action	= '/QRcode/qr_download/';
	wF.method	= "POST";
	wF.submit();

	comDownloadPopOFF();

	return true;

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝繧ｦ繝ｳ繝ｭ繝ｼ繝峨ヵ繧｡繧､繝ｫ蜷阪メ繧ｧ繝�け�育ｽｮ謠幢ｼ�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comFileNameChk(argObj){

	var wInFileName = argObj.value+'';
	var wRcFileName = '';

	wInFileName	= wInFileName.replace(/[��-�枉/g,
				function( tmpStr ) {
					return String.fromCharCode( tmpStr.charCodeAt(0) - 0xFEE0 );
				}
			);

	for( var i=0; i < wInFileName.length; i++){
		if(wInFileName.charAt(i).match(/[^A-Za-z0-9-_]+/)) {
		}else{
			wRcFileName += wInFileName.charAt(i)+'';
		}
	}

	if(wRcFileName.length > 20){wRcFileName = wRcFileName.substr(0,20);}

	argObj.value = '';
	argObj.value = wRcFileName;

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝ｪ繧ｻ繝�ヨ繧ｯ繝ｪ繝�け
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comReset(argKbn){

	var elm;

	switch (argKbn.toLowerCase()){

	case 'str' :
		elm = document.getElementById('textString');

		if(elm){
			elm.value = '';
			comTextAreaResize(elm);
		}

		btClassSet();

		break;

	case 'option' :
		elm = document.getElementById('textTitle');

		if(elm){
			elm.value = '';
			comTextAreaResize(elm);
		}

		document.getElementById('selCellSize').value	= '03';
		document.getElementById('selVersion').value	= '00';
		document.getElementById('selLevel').value	= 'H';
		document.getElementById('textCellColor').value	= '#000000';
		document.getElementById('textBgColor').value	= '#ffffff';
		document.getElementById('selLoopStr').value	= '0';
		document.getElementById('selFormat').value	= 'PNG';

		comOptionColorSet();

		break;
	}

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繧ｪ繝励す繝ｧ繝ｳ繧ｫ繝ｩ繝ｼ縺ｮ險ｭ螳�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comOptionColorSet(){

	var wObjCellColor	= document.getElementById('textCellColor');
	var wObjBgColor		= document.getElementById('textBgColor');


	// 繧ｻ繝ｫ繧ｫ繝ｩ繝ｼ
	wObjCellColor.value	= wObjCellColor.value.replace(/^[ ]+|[ ]+$/g, '');
	wObjCellColor.value	= wObjCellColor.value.replace(/^[縲]+|[縲]+$/g, '');
	wObjCellColor.value	= wObjCellColor.value.toUpperCase()

	if((wObjCellColor.value.substr(0,1) == '#')&&(wObjCellColor.value.substr(1).toString().match(/^[0-9A-F]+$/i))&&(wObjCellColor.value.length == 7)){
	}else{
		wObjCellColor.value	= '#000000';
	}
	document.getElementById('sampleCellColor').style.backgroundColor = wObjCellColor.value;


	// 繧ｻ繝ｫ繧ｫ繝ｩ繝ｼ
	wObjBgColor.value	= wObjBgColor.value.replace(/^[ ]+|[ ]+$/g, '');
	wObjBgColor.value	= wObjBgColor.value.replace(/^[縲]+|[縲]+$/g, '');
	wObjBgColor.value	= wObjBgColor.value.toUpperCase()

	if(wObjBgColor.value.substr(0,1) == 'NONE'){
		document.getElementById('sampleBgColor').style.backgroundColor = '#ffffff';
	}
	else{
		if((wObjBgColor.value.substr(0,1) == '#')&&(wObjBgColor.value.substr(1).toString().match(/^[0-9A-F]+$/i))&&(wObjBgColor.value.length == 7)){
		}else{
			wObjBgColor.value	= '#FFFFFF';
		}
		document.getElementById('sampleBgColor').style.backgroundColor = wObjBgColor.value;
	}

}
function loopStrChenge(){
	if(document.getElementById('selLoopStr').value == '0'){
	}else{
		comOptionWin('loopstr');
	}
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	QR繧ｳ繝ｼ繝我ｽ懈�繝懊ち繝ｳ縺ｮ濶ｲ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function btClassSet(){

	var wObjBtn = document.getElementById("qrCreateBt");

	if(wObjBtn == null){
		return true;
	}

	if(document.getElementById("textString").value == ''){
		wObjBtn.className	= "opeBtn noSel";
	}else{
		wObjBtn.className	= "opeBtn";
	}
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繧ｨ繝ｩ繝ｼ繝｡繝�そ繝ｼ繧ｸ邱ｨ髮�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comErrMsgSet(argMsg){

	var objMsg = document.getElementById('errMsg');

	if(argMsg == ''){
		objMsg.style.display	= 'none';
	}else{
		objMsg.innerHTML	= argMsg;
		objMsg.style.display	= '';
	}
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	OK繝｡繝�そ繝ｼ繧ｸ邱ｨ髮�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comOkMsgSet(argMsg){

	var objMsg = document.getElementById('okMsg');

	if(argMsg == ''){
		objMsg.style.display	= 'none';
	}else{
		objMsg.innerHTML	= argMsg;
		objMsg.style.display	= '';
	}
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	繝�く繧ｹ繝医お繝ｪ繧｢縺ｮ繝ｪ繧ｵ繧､繧ｺ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comTextAreaResize(argObj){

	argObj.style.height = "20px";

	var wSclollHeight = parseInt(argObj.scrollHeight);
	if(wSclollHeight < 36){wSclollHeight=36;}

	if(wSclollHeight == 0){wSclollHeight = 36;}
	argObj.style.height = parseInt(wSclollHeight + 2) + "px";

}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//	譯∵焚邨ｱ荳
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function comNumKeta(argNum, argKeta) {
	var len = String(argNum).length;
	if(argKeta > len) {
		return (new Array((argKeta - len) + 1).join(0)) + argNum;
	}else{
		return argNum;
	}
}

var cmanLinkScrollWk  = {};
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//  繧�▲縺上ｊ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function cmanLinkScroll(argID){

	// 迴ｾ蝨ｨ縺ｮ菴咲ｽｮ蜿門ｾ�
	cmanLinkScrollWk["startX"] = document.body.scrollLeft || document.documentElement.scrollLeft;
	cmanLinkScrollWk["startY"] = document.body.scrollTop  || document.documentElement.scrollTop;

	// 謖�ｮ夊ｦ∫ｴ�縺ｮ菴咲ｽｮ�育ｸｦ縺ｮ縺ｿ��
	cmanLinkScrollWk["endY"]   = Math.floor(document.getElementById(argID).getBoundingClientRect().top);
	cmanLinkScrollWk["endY"]  += cmanLinkScrollWk["startY"];

	// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ髢句ｧ�
	cmanLinkScrollWk["moveIdx"] = 0;
	cmanLinkScrollWk["nowY"]    = cmanLinkScrollWk["startY"];
	cmanLinkScrollLoop();
}

// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
//  繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ螳溯｡�
// 笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤笏≫煤
function cmanLinkScrollLoop(){

	var cmanLinkScrollCns = '0.014,0.042,0.083,0.139,0.208,0.292,0.389,0.5,0.611,0.708,0.792,0.861,0.917,0.958,0.986,1';

	// 繧ｿ繧､繝槭�蛻晄悄蛹�
	if (cmanLinkScrollWk["timer"]) {clearTimeout(cmanLinkScrollWk["timer"]);}

	// 遘ｻ蜍輔�繝代�繧ｻ繝ｳ繝亥叙蠕�
	var wParTbl = cmanLinkScrollCns.split(",");
	var wPar = wParTbl[cmanLinkScrollWk["moveIdx"]];
	cmanLinkScrollWk["moveIdx"]++;

	// 谺｡縺ｮ菴咲ｽｮ險育ｮ�
	cmanLinkScrollWk["nowY"]  = Math.floor((cmanLinkScrollWk["endY"] - cmanLinkScrollWk["startY"]) * wPar + cmanLinkScrollWk["startY"]);

	// 邨ゆｺ�愛螳� & 遘ｻ蜍�
	if(cmanLinkScrollWk["moveIdx"] > wParTbl.length){
		clearTimeout(cmanLinkScrollWk["timer"]);   // 繧ｿ繧､繝槭け繝ｪ繧｢
	} else {
		// 遘ｻ蜍募ｮ溯｡�
		window.scrollTo(cmanLinkScrollWk["startX"],cmanLinkScrollWk["nowY"]);   // 遘ｻ蜍募ｮ溯｡�
		cmanLinkScrollWk["timer"] = setTimeout("cmanLinkScrollLoop()",20);   // 谺｡縺ｮ繝ｫ繝ｼ繝�
	}
}