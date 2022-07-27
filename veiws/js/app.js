const submit = document.getElementById("submit")
const slct = document.getElementById("slct")
const slct2 = document.getElementById("slct2")
const datashow = document.getElementById("datashow")
const dataget = () => {

    let obj = {
        method: "GET",
        headers: { accept: 'applicataion/json' },
        url: "http://localhost:5000/api/dataget"
    }
    axios(obj)
        .then((response) => {

            const { data } = response


            data.dropdown2.map((element) => {

                slct.innerHTML += `<option  value="${element.IO}">${element.IO}</option> `


            })
            data.dropdown1.map((element) => {

                slct2.innerHTML += `<option  value="${element.RowKey}">${element.RowKey}</option> `


            })

        })

        .catch((err) => {
            console.log(err);

        })

}


slct.addEventListener("change", () => {


})
slct2.addEventListener("change", () => {


})

submit.addEventListener("click", (e) => {
    datashow.innerHTML= ""
    e.preventDefault()
    const backendbody = {
        IOkey: slct.value,
        RowKey: slct2.value
    }

    let OBJ2 = {
        method: "POST",
        headers: { accept: 'applicataion/json' },
        url: "http://localhost:5000/api/filterjson",
        data: backendbody
    }

    axios(OBJ2)
        .then((responsedata) => {
            const { data } = responsedata
            console.log(data.finaldata.length);
            if (data.finaldata.length == 0) {
                datashow.innerHTML += `<div >
            <p>
            <h3>Data not found</h3>

          </div>`
            }
            else {
                const { RowKey, date, advertiser_currency, client_line_item, creative_size } = data.finaldata[0]
                datashow.innerHTML += `<div >
          <p>
          <h5>RowKey:</h5> <span>${RowKey}</span></p>
          <p>
          <h5>date:</h5> <span>${date}</span></p>
          <p>
          <h5>advertiser_currency:</h5><span> ${advertiser_currency}</span></p>
          <p>
          <h5>client_line_item:</h5><span>${client_line_item}</span></p>
          <p>
          <h5>creative_size:</h5> <span> ${creative_size}</span></p>
          </div>`

            }
        })
        .catch((err) => {
            console.log(err);

        })
})

