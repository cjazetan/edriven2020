var displayTable = document.getElementById('displayTable')
var tbody = displayTable.firstElementChild 
var object = null
var objectt = null

if(data != null){
    for(var i = 0; i < data.length; i++){
        object = data[i]
        objectt = Object.getOwnPropertyNames(object)
        var tr = document.createElement('tr')
        var checker = true
        for(var ii = 0; ii < objectt.length; ii++){
            var td = document.createElement('td')
            td.scope = 'row'
            if(ii == 0 && checker){
                var tdTextNode = document.createTextNode(i + 1)
                td.appendChild(tdTextNode)
                tr.appendChild(td)
                tbody.appendChild(tr)
                ii--
                checker = false
            }
            else{
                td.className = 'text-center'
                if(ii == objectt.length - 1){
                    var anchor = document.createElement('a')
                    anchor.href = ''
                    anchor.className = 'viewOrder'
                    anchor.setAttribute('data-bs-toggle', 'modal')
                    anchor.setAttribute('data-bs-target', '#viewItem')
                    var tdTextNode = document.createTextNode('[View]')
                    anchor.appendChild(tdTextNode)
                    td.appendChild(anchor)
                    tr.appendChild(td)
                    tbody.appendChild(tr)  
                }
                else if(ii == objectt.length - 2){ 
                    var result = data[i][objectt[objectt.length - 1]]
                    var tdTextNode = document.createTextNode(result.toFixed(2))
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                     
                }
                else{ 
                    var tdTextNode = document.createTextNode(data[i][objectt[ii]])
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                    
                }
            }
        }
    }
}