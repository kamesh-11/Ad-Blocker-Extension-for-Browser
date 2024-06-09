chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Successfully Blocked:", details.url)
        return {cancel: true}
    },
    {urls: blocked_sites_v2},
    ["blocking"]
)
