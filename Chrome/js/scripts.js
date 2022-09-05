function colourPicker(elementID) {
    var parent = document.querySelector(elementID);
    var picker = new Picker(parent);

    picker.onChange = (color) => {
        parent.style.background = color.rgbaString;
    }
}