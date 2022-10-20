window.addEventListener('load', (event) => {
    eventWatch("page-visit", "", window.location.href, "");
});

async function eventWatch(name, user, message, extra) {
    //let url = `https://localhost:44398/AppEvent.aspx?Name=${name}&User=${user}&Message=${message}&Extra=${extra}`;
    let url = `https://syn.co.in/AppEvent.aspx?Name=${name}&User=${user}&Message=${message}&Extra=${extra}`;
    let response = await fetch(url);
    console.log(`Fetching Event from: ${url}`);
}