document.addEventListener("DOMContentLoaded", function () {
    // Coordenadas das cidades (exemplo)
    const cityPaths = {
        city1: "M100 150 Q110 140, 120 150 T140 170",
        city2: "M300 300 Q310 290, 320 300 T340 320",
        // Adicione mais paths conforme necessário
    };

    // Posicione os paths no SVG
    Object.keys(cityPaths).forEach(cityId => {
        const cityElement = document.getElementById(cityId);
        const pathData = cityPaths[cityId];
        cityElement.setAttribute("d", pathData);
    });
});
