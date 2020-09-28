const fetch = require('node-fetch');

setInterval(() => {
  ping(`DISCORD_WEBHOOK_URL_HERE`); // add more of these lines with diffrent webhooks to maximize the amount of pings. I personnally did 10 webhooks (One per channel)
  console.log('Pinged.');
}, 5000);

function ping(link) {
   fetch(link, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"username": "Pinger 9000", "avatar_url":"https://discord.mx/s6po8.jpg", "content": `@everyone`})
    });
}
