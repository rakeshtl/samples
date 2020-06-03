 var currentURL = context.getVariable("target.url");
 print("currentURL="+currentURL);
 var newURL = context.getVariable("configs.targetUrl");
 if (newURL === null) {
        newURL = context.getVariable("configs.default.targetUrl");
    }
 newURL1 = "https://" + newURL;
 print("newURL="+newURL1);
 context.setVariable("target.url",newURL1);