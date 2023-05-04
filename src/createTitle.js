function drawTextAlongArc(context, str, centerX, centerY, radius, angle){
    context.save();
    context.translate(centerX, centerY);
    context.rotate(-1 * angle / 2);
    context.rotate(-1 * (angle / str.length) / 2);
    for (let n = 0; n < str.length; n++) {
        context.rotate(angle / str.length);
        context.save();
        context.translate(0, -3 * radius);
        const char = str[n];
        context.fillText(char, 0, 0);
        context.restore();
    }
    context.restore();
}

window.onload = function(){
    const canvas = document.getElementById("title");
    const context = canvas.getContext("2d");

    context.font = "7em Bruno Ace SC, cursive";
    context.textAlign = "center";
    context.fillStyle = "#4e16e7";

    const centerX = canvas.width / 2;
    const centerY = canvas.height - 170;
    const angle = Math.PI * 1.1; // radians
    const radius = 210;
    drawTextAlongArc(context, "Let's search some countries", centerX, centerY, radius, angle);
};