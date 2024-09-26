(() => {

    let invokePIPFunction = function(){
        const videos = document.querySelectorAll('video');
        if(videos.length == 0){
            return;
        }
        if(document.pictureInPictureElement == null){
            videos[0].requestPictureInPicture()
        } else {
            document.exitPictureInPicture();
        }
    };


    let getSVGElementWhite = function(){
        // Function to create and append the SVG to the DOM
        // Create an SVG namespace
        const svgNS = "http://www.w3.org/2000/svg";

        // Create the SVG element
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 36 36");
        svg.setAttribute("xmlns", svgNS);
        svg.setAttribute("fill", "#ffffff"); // Set fill color
        svg.setAttribute("stroke", "#ffffff"); // Set stroke color

        // Create the first <g> element (background carrier)
        const bgCarrier = document.createElementNS(svgNS, "g");
        bgCarrier.setAttribute("id", "SVGRepo_bgCarrier");
        bgCarrier.setAttribute("stroke-width", "0");

        // Append background carrier to SVG
        svg.appendChild(bgCarrier);

        // Create the second <g> element (tracer carrier)
        const tracerCarrier = document.createElementNS(svgNS, "g");
        tracerCarrier.setAttribute("id", "SVGRepo_tracerCarrier");
        tracerCarrier.setAttribute("stroke-linecap", "round");
        tracerCarrier.setAttribute("stroke-linejoin", "round");
        tracerCarrier.setAttribute("stroke", "#CCCCCC");
        tracerCarrier.setAttribute("stroke-width", "0.048");

        // Append tracer carrier to SVG
        svg.appendChild(tracerCarrier);

        // Create the third <g> element (icon carrier)
        const iconCarrier = document.createElementNS(svgNS, "g");
        iconCarrier.setAttribute("id", "SVGRepo_iconCarrier");

        // Create second path inside icon carrier
        const path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("fill-rule", "nonzero");
        path2.setAttribute("d", "M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4z");

        // Append paths to the icon carrier
        iconCarrier.appendChild(path2);

        // Append icon carrier to SVG
        svg.appendChild(iconCarrier);

        return svg;
    };

    let youtubeControls = document.getElementsByClassName("ytp-right-controls");
    let pipButton = document.getElementsByClassName("pipButton");
    if(youtubeControls.length != 0 && pipButton.length == 0){
        youtubeControls = youtubeControls[0];

        pipButton = document.createElement("button");
        pipButton.className = "ytp-button pipButton";
        pipButton.title = "Play video in PIP";
        pipButton.style = "padding-top:8px;";
        pipButton.append(getSVGElementWhite());
        pipButton.addEventListener("click", invokePIPFunction);

        youtubeControls.prepend(pipButton);
    }
})();
