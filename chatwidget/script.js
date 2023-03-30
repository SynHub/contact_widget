/* Copyright (C) 2023 Synthetic Intelligence Network. Redistribution, use in source or binary forms are NOT permitted. */

let botScript = {
    buttonToggle: false,
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", launchBot);
} else {
    launchBot();
}

function addToolTip(parentDiv, tooltipText) {
    //Create tooltip
    var toolTipDiv = document.createElement("div");
    toolTipDiv.innerText = tooltipText;
    toolTipDiv.classList.add("tooltiptext");
    parentDiv.appendChild(toolTipDiv);
}

function launchBot() {

    //Create iFrame
    const widgetDiv = document.createElement("div");
    widgetDiv.src = "/";
    widgetDiv.id = "chat-widget";
    document.querySelector("body").insertBefore(widgetDiv, document.body.firstElementChild);

    //Create CSS link
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://synhub.github.io/web/chatwidget/style.css";
    document.querySelector("head").appendChild(cssLink);

    //Create launch button
    var launchDiv = document.createElement("div");
    launchDiv.id = "bot-launch-button";
    launchDiv.addEventListener("click", () => {
        if (botScript.buttonToggle === false) {
            messengerDiv.classList.remove("widget-button-hidden");
            //whatsappDiv.classList.remove("widget-button-hidden");
            gitterDiv.classList.remove("widget-button-hidden");
            emailDiv.classList.remove("widget-button-hidden");
            botScript.buttonToggle = true;
        } else {
            messengerDiv.classList.add("widget-button-hidden");
            //whatsappDiv.classList.add("widget-button-hidden");
            gitterDiv.classList.add("widget-button-hidden");
            emailDiv.classList.add("widget-button-hidden");
            botScript.buttonToggle = false;
        }
    });

    document.querySelector("#chat-widget").appendChild(launchDiv);

    //Create Messenger button
    var messengerDiv = document.createElement("div");
    messengerDiv.id = "bot-messenger-button";
    messengerDiv.addEventListener("click", () => {

        window.open('https://m.me/385662584855464', '_blank');
    });
    messengerDiv.classList.add("widget-button-hidden");

    addToolTip(messengerDiv, "Messenger");

    document.querySelector("#chat-widget").appendChild(messengerDiv);


    //==================================================================

    //Create WhatsApp button
    var whatsappDiv = document.createElement("div");
    whatsappDiv.id = "bot-whatsapp-button";
    whatsappDiv.setAttribute("data-title", "WhatsApp");

    whatsappDiv.addEventListener("click", () => {
        window.open('https://wa.me/919035679777', '_blank');
    });
    whatsappDiv.classList.add("widget-button-hidden");

    addToolTip(whatsappDiv, "WhatsApp");

    document.querySelector("#chat-widget").appendChild(whatsappDiv);

    //==================================================================

    //Create Gitter button
    var gitterDiv = document.createElement("div");
    gitterDiv.id = "bot-gitter-button";

    gitterDiv.addEventListener("click", () => {

        window.open('https://gitter.im/SynCommunity/Lobby', '_blank');
    });
    gitterDiv.classList.add("widget-button-hidden");

    addToolTip(gitterDiv, "Developer Lobby");

    document.querySelector("#chat-widget").appendChild(gitterDiv);

    //==================================================================

    //Create Email button
    var emailDiv = document.createElement("div");
    emailDiv.id = "bot-email-button";
    emailDiv.addEventListener("click", () => {
        //check if hostname contains website domain keywords
        if (document.location.hostname.includes("revarn")) {
            window.open('mailto:hello@revarn.com', '_blank');
        } else if (document.location.hostname.includes("learneva")) {
            window.open('mailto:hello@learneva.com', '_blank');
        } else {
            window.open('mailto:hello@syn.co.in', '_blank');
        }
    });
    emailDiv.classList.add("widget-button-hidden");

    addToolTip(emailDiv, "Email");

    document.querySelector("#chat-widget").appendChild(emailDiv);

    //==================================================================
}
