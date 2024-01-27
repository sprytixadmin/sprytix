    document.addEventListener("DOMContentLoaded", function() {
        var radioButton = document.getElementById("inputSwitchView");
        var mapPanel = document.getElementById("panelMap");
        var listPanel = document.getElementById("panelList");
        
        radioButton.addEventListener("change", function() {
            if (radioButton.value === "Map") {
                mapPanel.style.display = "block";
                listPanel.style.display = "none";
            } else if (radioButton.value === "List") {
                mapPanel.style.display = "none";
                listPanel.style.display = "block";
            }
        });
    });