export class Alert {
    message: String;
    type: String;
    display: Boolean;
    constructor(message: String, type: String, display: Boolean) {
        this.message = message;
        this.type = type;
        this.display = display;
    }
}
