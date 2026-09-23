document.addEventListener("DOMContentLoaded", () => {

    const serverButton = document.querySelector(".discord-btn");
    const searchInput = document.querySelector("#commandSearch");
    const commands = document.querySelectorAll(".command-box p");

    const serverInvite = "https://discord.gg/VnEYUmJEFv";

    if (serverButton) {
        serverButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.open(serverInvite, "_blank");
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {

            const search = searchInput.value.toLowerCase().trim();

            commands.forEach((command) => {

                const commandText = command.textContent.toLowerCase();

                if (commandText.includes(search)) {
                    command.style.display = "";
                } else {
                    command.style.display = "none";
                }

            });
        });
    }

    console.log("New Era Web cargada correctamente.");
});