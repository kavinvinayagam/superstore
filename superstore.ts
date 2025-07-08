class User {
    name: string;
    mail_id: string;
    password: string;

    constructor(name: string, mail_id: string, password: string) {
        this.name = name;
        this.mail_id = mail_id;
        this.password = password;
    }

    nameValidate(name: string): boolean {
        return this.isValid(name);
    }

    private isValid(name: string): boolean {
        const nameCheck = /^[a-zA-Z]+$/;
        return nameCheck.test(name);
    }

    mailValidate(mail_id: string): boolean {
        // Here you would check whether the mail_id already has an account and return true or false
        // For now, let's assume all mail_ids are valid
        return true;
    }

    passwordValidate(password: string): boolean {
        // Check if the first character of the password is an uppercase letter
        return password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90;
    }
}

class Seller extends User {
    count = 0;

    addItem() {
        console.log('Item added');
    }

    updateItem() {
        console.log('Item updated');
    }
}

class Buyer extends User {
    // Search bar
    listInventory() {
        console.log('Listing inventory');
    }
}

function main() {
    var role = prompt("Enter whether you are a buyer or a seller")?.toLowerCase();

    if (role === "buyer") {
        const name = prompt("Enter your name");
        const mail_id = prompt("Enter your mail id");
        const password = prompt("Enter your password");

        if (name && mail_id && password) {
            const buyer = new Buyer(name, mail_id, password);
            if (buyer.nameValidate(name) && buyer.mailValidate(mail_id) && buyer.passwordValidate(password)) {
                console.log("Buyer account is valid");
                buyer.listInventory();
            } else {
                console.log("Invalid buyer account details");
            }
        }
    } else if (role === "seller") {
        const name = prompt("Enter your name");
        const mail_id = prompt("Enter your mail id");
        const password = prompt("Enter your password");

        if (name && mail_id && password) {
            const seller = new Seller(name, mail_id, password);
            if (seller.nameValidate(name) && seller.mailValidate(mail_id) && seller.passwordValidate(password)) {
                console.log("Seller account is valid");
                seller.addItem();
                seller.updateItem();
            } else {
                console.log("Invalid seller account details");
            }
        }
    } else {
        console.log("Invalid role");
    }
}

main();
