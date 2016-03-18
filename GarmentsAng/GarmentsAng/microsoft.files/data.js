/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v3.10
   http://deluxe-menu.com
*/



//--- Common
var menuIdentifier="microsoft";
var isHorizontal=1;
var smColumns=1;
var smOrientation=0;
var dmRTL=0;
var pressedItem=-2;
var itemCursor="pointer";
var itemTarget="_self";
var statusString="link";
var blankImage="microsoft.files/blank.gif";
var pathPrefix_img="";
var pathPrefix_link="";

//--- Dimensions
var menuWidth="540px";
var menuHeight="";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="0px";
var posY="0px";
var topDX=0;
var topDY=1;
var DX=-5;
var DY=0;
var subMenuAlign="left";
var subMenuVAlign="top";

//--- Font
var fontStyle=["normal 11px Tahoma,Verdana,Segoe,sans-serif","normal 11px Tahoma,Verdana,Segoe,sans-serif"];
var fontColor=["#00629D","#00629D"];
var fontDecoration=["none","underline"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="#FFFFFF";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="#999999";
var menuBorderWidth="1px";
var menuBorderStyle="solid";
var smFrameImage="";
var smFrameWidth=0;

//--- Item Appearance
var itemBackColor=["transparent","transparent"];
var itemBackImage=["",""];
var itemSlideBack=0;
var beforeItemImage=["",""];
var afterItemImage=["",""];
var beforeItemImageW="";
var afterItemImageW="";
var beforeItemImageH="";
var afterItemImageH="";
var itemBorderWidth="0px";
var itemBorderColor=["#FCEEB0","#4C99AB"];
var itemBorderStyle=["none","none"];
var itemSpacing=0;
var itemPadding="10px 5px";
var itemAlignTop="center";
var itemAlign="left";

//--- Icons
var iconTopWidth=16;
var iconTopHeight=16;
var iconWidth=14;
var iconHeight=7;
var arrowWidth=8;
var arrowHeight=16;
var arrowImageMain=["",""];
var arrowWidthSub=0;
var arrowHeightSub=0;
var arrowImageSub=["",""];

//--- Separators
var separatorImage="";
var separatorWidth="1px";
var separatorHeight="2px";
var separatorAlignment="left";
var separatorVImage="microsoft.files/sep.gif";
var separatorVWidth="1px";
var separatorVHeight="42px";
var separatorPadding="0px";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;
var floatableDX=15;
var floatableDY=15;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#DECA9A";
var moveImage="";
var moveCursor="move";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="80";
var transition=101;
var transOptions="";
var transDuration=350;
var transDuration2=200;
var shadowLen=0;
var shadowColor="#B1B1B1";
var shadowTop=0;

//--- CSS Support (CSS-based Menu)
var cssStyle=0;
var cssSubmenu="";
var cssItem=["",""];
var cssItemText=["",""];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var topSmartScroll=0;
var smHideOnClick=1;
var dm_writeAll=1;
var useIFRAME=0;
var dmSearch=0;

//--- AJAX-like Technology
var dmAJAX=0;
var dmAJAXCount=0;
var ajaxReload=0;

//--- Dynamic Menu
var dynamic=0;

//--- Popup Menu
var popupMode=0;

//--- Keystrokes Support
var keystrokes=0;
var dm_focus=1;
var dm_actKey=113;

//--- Sound
var onOverSnd="";
var onClickSnd="";

var itemStyles = [
    ["itemHeight=42px","itemBackColor=#DBDBDB,#FFFFFF","itemBackImage=microsoft.files/back.gif,microsoft.files/blank.gif","fontStyle='normal 11px Tahoma,Verdana,Segoe,sans-serif','normal 11px Tahoma,Verdana,Segoe,sans-serif'","fontColor=#000000,#000000","fontDecoration=none,underline"],
    ["itemBackImage=microsoft.files/blank.gif,microsoft.files/blank.gif","beforeItemImage=microsoft.files/blank.gif,microsoft.files/blank.gif","beforeItemImageW=10","fontStyle='bold 11px Tahoma,Verdana,Segoe,sans-serif','bold 11px Tahoma,Verdana,Segoe,sans-serif'","fontColor=#000000,#000000","fontDecoration=none,none"],
];
var menuStyles = [
    ["smWidth=400px","menuBackColor=#FFFFFF","menuBackImage=microsoft.files/sub_back.gif","menuBorderWidth=1px","menuBorderStyle=solid","menuBorderColor=#444444","smColumns=2","itemPadding=0px 5px"],
    ["smWidth=600px","menuBackColor=#FFFFFF","menuBackImage=microsoft.files/sub_back.gif","menuBorderWidth=1px","menuBorderStyle=solid","menuBorderColor=#444444","smColumns=3","itemPadding=0px 5px"],
    ["smWidth=200px","menuBackColor=#FFFFFF","menuBackImage=microsoft.files/sub_back.gif","menuBorderWidth=1px","menuBorderStyle=solid","menuBorderColor=#444444","smColumns=1","itemPadding=0px 5px"],
];
dm_init();