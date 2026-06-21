const readline = require("readline");

let contacts = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("\n===== Contact Management System =====");
  console.log("1. Add Contact");
  console.log("2. View Contacts");
  console.log("3. Search Contact");
  console.log("4. Update Contact");
  console.log("5. Delete Contact");
  console.log("6. Exit");

  rl.question("Enter your choice: ", function(choice) {

    switch (choice) {

      case "1":
        addContact();
        break;

      case "2":
        viewContacts();
        break;

      case "3":
        searchContact();
        break;

      case "4":
        updateContact();
        break;

      case "5":
        deleteContact();
        break;

      case "6":
        console.log("Program Closed");
        rl.close();
        break;

      default:
        console.log("Invalid Choice");
        menu();
    }

  });
}

function addContact() {

  rl.question("Enter Name: ", function(name) {

    rl.question("Enter Phone Number: ", function(phone) {

      rl.question("Enter Email: ", function(email) {

        contacts.push({
          name,
          phone,
          email
        });

        console.log("Contact Added Successfully");

        menu();

      });

    });

  });

}

function viewContacts() {

  if (contacts.length === 0) {

    console.log("No Contacts Available");

  } else {

    console.table(contacts);

  }

  menu();

}

function searchContact() {

  rl.question("Enter Name to Search: ", function(name) {

    let contact = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );

    if (contact) {

      console.table([contact]);

    } else {

      console.log("Contact Not Found");

    }

    menu();

  });

}

function updateContact() {

  rl.question("Enter Name to Update: ", function(name) {

    let contact = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );

    if (!contact) {

      console.log("Contact Not Found");

      return menu();

    }

    rl.question("New Phone Number: ", function(phone) {

      rl.question("New Email: ", function(email) {

        contact.phone = phone;
        contact.email = email;

        console.log("Contact Updated Successfully");

        menu();

      });

    });

  });

}

function deleteContact() {

  rl.question("Enter Name to Delete: ", function(name) {

    let index = contacts.findIndex(
      c => c.name.toLowerCase() === name.toLowerCase()
    );

    if (index === -1) {

      console.log("Contact Not Found");

    } else {

      contacts.splice(index, 1);

      console.log("Contact Deleted Successfully");

    }

    menu();

  });

}

menu();