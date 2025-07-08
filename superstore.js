var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, mail_id, password) {
        this.name = name;
        this.mail_id = mail_id;
        this.password = password;
    }
    User.prototype.nameValidate = function (name) {
        return this.isValid(name);
    };
    User.prototype.isValid = function (name) {
        var nameCheck = /^[a-zA-Z]+$/;
        return nameCheck.test(name);
    };
    User.prototype.mailValidate = function (mail_id) {
        
        return true;
    };
    User.prototype.passwordValidate = function (password) {
        // Check if the first character of the password is an uppercase letter
        return password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90;
    };
    return User;
}());
var Seller = /** @class */ (function (_super) {
    __extends(Seller, _super);
    function Seller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        return _this;
    }
    Seller.prototype.addItem = function () {
        console.log('Item added');
    };
    Seller.prototype.updateItem = function () {
        console.log('Item updated');
    };
    return Seller;
}(User));
var Buyer = /** @class */ (function (_super) {
    __extends(Buyer, _super);
    function Buyer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Search bar
    Buyer.prototype.listInventory = function () {
        console.log('Listing inventory');
    };
    return Buyer;
}(User));
function main() {
    var _a;
    var role = (_a = prompt("Enter whether you are a buyer or a seller")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (role === "buyer") {
        var name_1 = prompt("Enter your name");
        var mail_id = prompt("Enter your mail id");
        var password = prompt("Enter your password");
        if (name_1 && mail_id && password) {
            var buyer = new Buyer(name_1, mail_id, password);
            if (buyer.nameValidate(name_1) && buyer.mailValidate(mail_id) && buyer.passwordValidate(password)) {
                console.log("Buyer account is valid");
                buyer.listInventory();
            }
            else {
                console.log("Invalid buyer account details");
            }
        }
    }
    else if (role === "seller") {
        var name_2 = prompt("Enter your name");
        var mail_id = prompt("Enter your mail id");
        var password = prompt("Enter your password");
        if (name_2 && mail_id && password) {
            var seller = new Seller(name_2, mail_id, password);
            if (seller.nameValidate(name_2) && seller.mailValidate(mail_id) && seller.passwordValidate(password)) {
                console.log("Seller account is valid");
                seller.addItem();
                seller.updateItem();
            }
            else {
                console.log("Invalid seller account details");
            }
        }
    }
    else {
        console.log("Invalid role");
    }
}
main();
