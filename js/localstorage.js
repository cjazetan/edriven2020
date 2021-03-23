customers = []
customer = {
    'ORNumber' : '',
    'name': '',
    'items': [],
    'total': 0
}


var items = [item1, item2, item3, item4]
var prices = [price1, price2, price3, price4]
var qtys = [qty1, qty2, qty3, qty4]
var subtotals = [subtotal1, subtotal2, subtotal3, subtotal4]

var data = JSON.parse(localStorage.getItem('customers'))


save.addEventListener('click', function(){
    customer['ORNumber'] = ORNumber.value
    customer['name'] = customerName.value
    for(var i = 0; i < items.length; i++){
        if(items[i].value == ''){
            break
        }
        else{
            item = { 
                'name': items[i].value,
                'price' : prices[i].value,
                'qty': qtys[i].value,
                'subtotal' : subtotals[i].value               
            }
            customer['total'] = parseFloat(customer['total']) + parseFloat(item['subtotal'])
            customer['items'].push(item)
        }
    }

    

   if(data != null){ 
       data.push(customer) 
       localStorage.setItem('customers', JSON.stringify(data))
   }
   else{
       customers.push(customer)
       localStorage.setItem('customers', JSON.stringify(customers))
   }
   location.reload() 
})