// ------------------ /  Inputs  / ----------------------

const submit = document.getElementById("submit");
// -------- Form One -----------
const type_model = document.getElementById("typeModel");
const car_maker = document.getElementById("carMaker");
const car_model = document.getElementById("carModel");
const year = document.getElementById("year");
// -------- Form Two -----------
const item_name = document.getElementById("itemName");
const number_Item = document.getElementById("numberItem");
const serial_number = document.getElementById("serialNumber");
const body_number = document.getElementById("Car_body_number");
const Plot_Descr = document.getElementById("Plot_Description");
// -------- Form three -----------
const email = document.getElementById("email");
const phone_number = document.getElementById("phone-number");
const country_phone = document.getElementById("country-phone");
const country_code = document.getElementById("country-code");
// -------- Form four -----------
const type_shipment = document.getElementById("Type-shipment");
const fool_name = document.getElementById("name");
const country = document.getElementById("country");
const city = document.getElementById("City");
const neighborhood = document.getElementById("Neighborhood");
const box_number = document.getElementById("Box-number");
const address_description = document.getElementById("housing-address");

// ------------------ /  Inputs  / ----------------------

// -------- Invoice Array of Object -----------
let invoice = [];

let isDataAdded = false; // Flag to track if data has been added

submit.onclick = () => {
  validateStep(4); // Validate show step 4

  // If data has not been added previously
  if (!isDataAdded) {

    // Create a new invoice object with form data
    let newInvoice = {
      type_model: type_model.value,
      car_maker: car_maker.value,
      car_model: car_model.value,
      year: year.value,
      item_name: item_name.value,
      number_Item: number_Item.value,
      serial_number: serial_number.value,
      body_number: body_number.value,
      Plot_Descr: Plot_Descr.value,
      email: email.value,
      phone_number: phone_number.value,
      country_phone: country_phone.value,
      country_code: country_code.value,
      type_shipment: type_shipment.value,
      fool_name: fool_name.value,
      country: country.value,
      city: city.value,
      neighborhood: neighborhood.value,
      box_number: box_number.value,
      address_description: address_description.value,
    };

    invoice.push(newInvoice); // Add the invoice data to the invoices array

     // Generate HTML to display invoice data
    const showData = invoice.map((e) => { 
      return `
         <div dir="ltr" class="col-6 p-0 m-0">
            <h5> ${e.country} , ${e.city} , ${e.neighborhood} , ${e.body_number} </h5>
            <p>
                ${e.address_description}
            </p>
         </div>

         <div dir="rtl" class="col-6 p-0 m-0">
            <h5> ${e.fool_name}</h5>
            <h5> ${e.email}</h5>
            <h5> ${e.country_code} ${e.phone_number}</h5>
         </div>
        `;
    });
    
    // Display the invoice data in the "information" element
    document.getElementById("information").innerHTML = showData.join("");

    let table = "<table>"; // Start HTML table

    // Generate rows for each invoice data
    for (let i = 0; i < invoice.length; i++) {

      // تكوين صف لكل بيانات فاتورة
      table += `
            <tr>
                <td>${i + 1}</td>
                <td>${invoice[i].item_name}</td>
                <td>${invoice[i].number_Item}</td>
                <td>${invoice[i].type_shipment}</td>
                <td>${invoice[i].serial_number}</td>
                <td>${invoice[i].body_number}</td>
            </tr>
          `;
    }

    table += "</table>"; // End HTML table

    // Add the table to the "show" element
    document.getElementById("show").innerHTML = table;

    isDataAdded = true; // Set the flag to indicate data has been added
  }
};
