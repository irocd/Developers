//
// developers.js
// Summary : template-developers.js used to generate developers.js.
// Icon : developers.jpg
//

var ManVer = "1438268031066";
function GetManVer()
{
    return ManVer;

}

var strFileURL = "http://snapback-apps.com/developers/developers1438268031066.cdpupdate";
function GetstrFileURL()
{
    return strFileURL;

}

var strOnlineURL = "http://snapback-apps.com/developers/invis.gif";
function GetstrOnlineURL()
{
    return strOnlineURL;

}

var SyncCookieName = "developerspckgid";
function GetSyncCookieName()
{
    return SyncCookieName;

}

// the following variables are defined outside the scope of this template :
// % RemoteManifestLocation %
// % LocalManifestLocation %
// % RemoteStartUrl %
// % LocalStartUrl %
// % UpdaterLocationUrl %
// soon : % UpdaterVersion %

var ManifestFile = "developers.xml"
function GetManifestFile()
{
    return ManifestFile;

}

var ManifestURL_Remote = "http://snapback-apps.com/developers/developers.xml";
function GetManifestURL_Remote()
{
    return ManifestURL_Remote;

}

var ManifestURL_Local = "%ALLUSERSPROFILE%\\cdp\\snapback\\apps\\developers\\developers.xml";
function GetManifestURL_Local()
{
    return ManifestURL_Local;

}

var StartUrl_Remote = "http://snapback-apps.com/developers/index.html";
function GetStartUrl_Remote()
{
    return StartUrl_Remote;

}

var StartUrl_Local = "index.html";
function GetStartUrl_Local()
{
    return StartUrl_Local;

}

//
// for AXUpdater
//
function AXLoadObject2()
{
    var UpdaterObjectTag = "";
    UpdaterObjectTag  = "<OBJECT WIDTH=200 HEIGHT=100 ID=\"IDAXUpdater\"";
    UpdaterObjectTag += "CLASSID=\"CLSID : 57FF5EAF - 789B - 4738 - 8D25 - B4848CC41298\"";
    UpdaterObjectTag += "CODEBASE=\"http : // www.apps.cdp.com / a / ax / CDPUpdater.cab#Version = - 1, - 1, - 1, - 1\">";
    UpdaterObjectTag += "</OBJECT>";

    return( UpdaterObjectTag );
}

//
// DoUpdate
//
var nagent = navigator.userAgent.toLowerCase();
var ms    = nagent.indexOf( 'msie' );

function UseAX()
{
    if ( ms > - 1 )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function LaunchProgram()
{
    alert( 'LaunchProgram' );
}

function DoUpdate()
{
    if ( UseAX() )
    {
        IDAXUpdater.DoUpdate( ManifestURL_Local, ManifestURL_Remote );
    }
    else
    {
        alert( 'ManifestURL_Remote' );
    }
}

function ExecuteCommand( command )
{
    var output = "";
    if ( UseAX() )
    {
        // alert( 'Using ActiveX' );
        // compile Manifest Button request
        command = ManifestURL_Local + "," + command;
        output = IDAXUpdater.ExpandEnvVar( command );
        output = IDAXUpdater.RequestCommand( output );
        // alert( output );
    }
    else
    {
        alert( 'Using Java' );
    }
    return output;
}

var browserType = "";

function doCommand( command )
{
    var output = "";
    if ( document.all )
    {
        output = ExecuteCommand( command );
    }
    // Netscape Navigator
    else
    {
        output = document.applets[0].ExecuteCommand( command + "" );
    }
    return output;
}

function switchToLocal()
{
    var output = "";
    if ( location.href.indexOf( "http" ) > - 1 )
    {
        output = doCommand2( "takemelocal" + "," + "\"" + escape("%ALLUSERSPROFILE%\\cdp\\developers\\startmom.vbs") + "\"" );
    }

    return output;
}

function getBrowser()
{
    var retVal = "";
    var browserName = navigator.appName;
    var browserUserAgent = navigator.userAgent;
    var browserVendor = window.navigator.vendor;
    //    alert( "browserName = " + browserName )
    //    alert( "browserUserAgent = " + browserUserAgent );
    //    alert( "browserVendor = " + browserVendor );
    if ( browserName == "Netscape" )
    {
        // alert( "browserUserAgent = " + browserUserAgent );
        // alert( "browserVendor = " + browserVendor );
        if ( /Firefox[\/\s](\d+\.\d+)/.test( navigator.userAgent ) && browserVendor.length < 1 )
        {
            // test for Firefox / x.x or Firefox x.x ( ignoring remaining digits );
            var ffversion = new Number( RegExp.$1 ) // capture x.x portion and store as a number
            retVal = "Firefox";
        }

        if ( /Chrome[\/\s](\d+\.\d+)/.test( navigator.userAgent ) && browserVendor.indexOf( "Google Inc." ) > - 1 )
        {
            // test for Chrome / x.x or Chrome x.x ( ignoring remaining digits );
            var ffversion = new Number( RegExp.$1 ) // capture x.x portion and store as a number
            retVal = "Chrome";
        }

        if ( /Safari[\/\s](\d+\.\d+)/.test( navigator.userAgent ) && browserVendor.indexOf( "Apple Computer, Inc." ) > - 1 )
        {
            // test for Safari / x.x or Safari x.x ( ignoring remaining digits );
            var ffversion = new Number( RegExp.$1 ) // capture x.x portion and store as a number
            retVal = "Safari";
        }

        if ( /Opera[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
        {
            // test for Opera / x.x or Opera x.x ( ignoring remaining digits );
            var ffversion = new Number( RegExp.$1 ) // capture x.x portion and store as a number
            retVal = "Opera";
        }
    }
    else
    {
        if ( browserName == "Microsoft Internet Explorer" )
        {
            if ( /MSIE (\d+\.\d+);/.test( navigator.userAgent ) )
            {
                // test for MSIE x.x;
                var ieversion = new Number( RegExp.$1 ) // capture x.x portion and store as a number
                retVal = "Microsoft Internet Explorer";
            }
        }

        if ( browserName == "Opera" )
        {
            retVal = "Opera";
        }
        else
        {
            var s = "browserName=" + browserName;
            s += "\r\nbrowserUserAgent=" + browserUserAgent;
            s += "\r\nbrowserVendor=" + browserVendor;
            retVal = browserName;
        }
    }

    return retVal;
}

function pageInit()
{
    browserType = checkBrowser();
}

function checkBrowser()
{
    // Microsoft Internet Explorer
    if ( document.all )
    {
        return "IE";
    }
    // Netscape Navigator
    else
    {
        // 		writeHeaderNetscape();
        // 		return "Netscape";
        // 		location.href = "noff.html";
    }
}

// function writeHeaderNetscape() {
// 	if ( document.title == "CDP - Update Application" )	{
// 		<!-- applet width = 20 height = 16 code = "Buttons.Updater.ManifestUpdater.class" archive = "ManifestUpdater.jar" MAYSCRIPT >
// 		document.write( '<applet code="Buttons.Updater.ManifestUpdater.class" width="0" height="0" archive="ManifestUpdater.jar"  MAYSCRIPT> <param name="manifest" value=""> <param name="localcopy" value="%ALLUSERSPROFILE%\\cdp\\snapback\\manifest.xml"> <param name="debug" value="true"> </applet>' );
// 	} else {
// 		document.write( '<applet code="snaptool.class" width="0" height="0" archive="snaptool.jar" align="left"></applet>' );
// 	}
// }

function doHourglass()
{
    document.body.style.cursor = 'wait';
}

function crun( appendMe )
{
    var myCmd = "crun," + appendMe
    output = doCommand2( myCmd );

    return output;
}

function wrun( appendMe )
{
    var myCmd = "wrun," + appendMe
    output = doCommand2( myCmd );

    return output;
}

function doCommand( command )
{
    var output = "";
    if ( document.all )
    {
        output = ExecuteCommand( command );
    }
    // Netscape Navigator
    else
    {
        output = document.applets[0].ExecuteCommand( command + "" );
    }
    return output;
}

function doCommand2( command )
{
    var output = "";
    var UpdObj;
    var command2 = ManifestURL_Local + "," + command;
    if ( navigator.appName == "Microsoft Internet Explorer" )
    {
        UpdObj = new ActiveXObject( "CDPUpdater.Updater" );
    }
    else
    {
        UpdObj = document.getElementById( "embed1" );
    }

    try
    {
        output = UpdObj.ExpandEnvVar( command2 );
        output = UpdObj.RequestCommand( output );
    }
    catch ( e )
    {
        alert( e.message );
    }
    finally
    {
        UpdObj = null;
    }

    return output;
}

function hideContent( e )
{
//~    document.getElementById( e ).style.display = "none";
}

function showContent( e )
{
//~    document.getElementById( e ).style.display = "block";
}

function loadScript( url, callback )
{
    var script = document.createElement( "script" );
    script.type = "text/javascript";

    if ( script.readyState )
    {
        // IE
        script.onreadystatechange = function()
        {
            if ( script.readyState == "loaded" ||
            script.readyState == "complete" )
            {
                script.onreadystatechange = null;
                callback();
            }
        }
        ;
    }
    else
    {
        // Others
        script.onload = function()
        {
            callback();
        }
        ;
    }

    script.src = url;
    document.getElementsByTagName( "head" )[0].appendChild( script );
}

function appupdate()
{
    var output = "";
    if ( location.href.indexOf( "http" ) < 0 )
    {
        output = doCommand2( "updateapp" );
    }
    return output;
}

