// ------------------ /  Inputs  / ----------------------

// -------- Form One -----------
const type_model = document.getElementById("typeModel");
const car_maker = document.getElementById("carMaker");
const car_model = document.getElementById("carModel");
const year = document.getElementById("year");
const submit = document.getElementById("submit");
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

let isDataAdded = false;

submit.onclick = () => {
    validateStep(4);

    if (!isDataAdded) {

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

    invoice.push(newInvoice); // إضافة بيانات الفاتورة إلى مصفوفة الفواتير

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
    document.getElementById("information").innerHTML = showData.join("");

    let table = "<table>"; // بدء جدول HTML

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

    table += "</table>"; // إنهاء جدول HTML

    // إضافة الجدول إلى عنصر العرض
    document.getElementById("show").innerHTML = table;

    isDataAdded = true;
}
};
