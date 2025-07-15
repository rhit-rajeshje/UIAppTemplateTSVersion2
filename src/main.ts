import "./style.css";

// get the current theme from the URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

document.querySelector("[id = 'Button']")?.addEventListener("click", () => {
  // send message to plugin.ts
  console.log(document.getElementById("Button")?.dataset.handler);
  parent.postMessage(document.getElementById("Button")?.dataset.handler, "*");
});


// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});
