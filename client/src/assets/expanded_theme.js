import { Palette,PaletteColor } from "@mui/material/style/createPalette"

// Extend PaletteColor interface
PaletteColor.prototype[Symbol.iterator] = function* () {
    for (const key in this) {
        yield [key, this[key]];
    }
};

// Extend Palette interface
Palette.prototype.tertiary = {};