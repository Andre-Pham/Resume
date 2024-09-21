import { ResFontFamily } from "./ResFontFamily";
import { ResFontWeight } from "./ResFontWeight";
import { ResColor } from "../color/ResColor";

export class ResTypography {
    /**
     * Font size.
     */
    public size: number;

    /**
     * Font family.
     */
    public fontFamily: ResFontFamily;

    /**
     * Font color.
     * An undefined color causes the font inherit the color from its parent.
     */
    public colorObject: ResColor | undefined;

    /**
     * Font weight.
     */
    public weight: ResFontWeight;

    /**
     * True to make font italic.
     */
    public italic: boolean;

    /**
     * True to make font underlined.
     */
    public underlined: boolean;

    /**
     * True to make font lined out.
     */
    public linedOut: boolean;

    /**
     * The font's kerning (spacing between letters).
     */
    public kerning: number;

    /**
     * The color as a hex string.
     */
    get color(): string | undefined {
        return this.colorObject?.hexString;
    }

    /**
     * The line style of this font.
     * Indicates if the font is underlined, lined out, neither, or both.
     */
    get lineStyle(): "none" | "underline" | "line-through" | "underline line-through" {
        let result = "";
        if (!this.underlined && !this.linedOut) {
            result = "none";
        } else {
            if (this.underlined) {
                result = "underline";
            }
            if (this.linedOut) {
                result = (result + " line-through").trimStart();
            }
        }
        return result as "none" | "underline" | "line-through" | "underline line-through";
    }

    constructor({
        size,
        fontFamily,
        color,
        weight = ResFontWeight.medium,
        italic = false,
        underlined = false,
        linedOut = false,
        kerning = 0,
    }: {
        size: number;
        fontFamily: ResFontFamily;
        color?: ResColor;
        weight?: ResFontWeight;
        italic?: boolean;
        underlined?: boolean;
        linedOut?: boolean;
        kerning?: number;
    }) {
        this.size = size;
        this.fontFamily = fontFamily;
        this.colorObject = color;
        this.weight = weight;
        this.italic = italic;
        this.underlined = underlined;
        this.linedOut = linedOut;
        this.kerning = kerning;
    }

    public withSize(size: number): this {
        this.size = size;
        return this;
    }

    public withColor(color: ResColor): this {
        this.colorObject = color;
        return this;
    }

    public withWeight(weight: ResFontWeight): this {
        this.weight = weight;
        return this;
    }

    public withItalic(italic: boolean): this {
        this.italic = italic;
        return this;
    }

    public withUnderline(underline: boolean): this {
        this.underlined = underline;
        return this;
    }

    public withLineOut(lineOut: boolean): this {
        this.linedOut = lineOut;
        return this;
    }

    public getStylesheet(): React.CSSProperties {
        return {
            fontFamily: this.fontFamily,
            fontWeight: this.weight,
            color: this.color ?? "inherit",
            fontSize: this.size,
            textDecorationLine: this.lineStyle,
            letterSpacing: this.kerning,
            fontStyle: this.italic ? "italic" : "normal",
        };
    }
}
