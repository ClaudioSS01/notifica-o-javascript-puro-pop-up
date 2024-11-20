// Função para criar e exibir um popup temporário empilhado
function showPopup(message, duration = 5000) {
    // Cria o container principal para os popups, caso ainda não exista
    let popupContainer = document.querySelector("#popup-container");
    if (!popupContainer) {
        popupContainer = document.createElement("div");
        popupContainer.id = "popup-container";
        popupContainer.style.position = "fixed";
        popupContainer.style.bottom = "10px";
        popupContainer.style.right = "10px";
        popupContainer.style.zIndex = "10000";
        popupContainer.style.display = "flex";
        popupContainer.style.flexDirection = "column-reverse"; // Mensagens recentes no topo
        popupContainer.style.gap = "5px"; // Espaçamento entre mensagens
        document.body.appendChild(popupContainer);
    }

    // Cria o popup individual
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popup.style.color = "white";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
    popup.style.fontFamily = "Arial, sans-serif";
    popup.style.fontSize = "14px";
    popup.style.opacity = "1";
    popup.style.transition = "opacity 0.5s ease";

    // Adiciona o popup ao container
    popupContainer.appendChild(popup);

    // Remove o popup após o tempo especificado
    setTimeout(() => {
        popup.style.opacity = "0"; // Inicia a transição de desaparecimento
        setTimeout(() => popup.remove(), 500); // Remove após a transição
    }, duration);
}

// Exemplo de uso
showPopup("Compra realizada! Preço de compra: 542,500 BRL", 4000);
setTimeout(() => showPopup("Venda realizada! Preço de venda: 542,600 BRL", 4000), 2000);
setTimeout(() => showPopup("Monitorando... Preço atual: 542,550 BRL", 4000), 4000);
