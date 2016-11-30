function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0)
    {
        return true;
    }
    else  
    {
        return false;
    }
}