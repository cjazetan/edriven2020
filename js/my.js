var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var tableBody = document.getElementById("body");
var month = parseInt(prompt("Enter month (1-12): "));
var day = parseInt(prompt("1st day of month, (1-7) where 1 is sunday and 7 is Saturday: "));

var end = true;
var currentDay = 1;
var checker = 0;

if (month < 13 && day < 8 && month > 0 && day > 0)
{
    var title = document.getElementById("title");
    var titleTextNode = document.createTextNode(months[month-1]);
    title.appendChild(titleTextNode);
    while(end)
    {
        var tr = document.createElement("tr");
        for(var i = 0; i < days.length; i++)
        {
            if(i == day - 1)
            {
                if(checker ==1)
                {
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode(currentDay);
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tableBody.appendChild(tr);
                    if(i == 0)
                    {
                        td.className = "body-color";
                    }
                    currentDay++;
                }
                else
                {
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode(currentDay);
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tableBody.appendChild(tr);

                    if(i == 0)
                    {
                        td.className = "body-color";
                    }
                    currentDay++;
                    checker = 1;
                }
            }
            else
            {
                if(checker ==1)
                {
                    if(currentDay >= 32 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12))
                    {
                        end = false;
                        break;
                    }
                    else if(currentDay >= 31 && (month == 4 || month == 6 || month == 9 || month == 11))
                    {
                        end = false;
                        break;
                    }
                    else if(currentDay >= 28 && (month == 2))
                    {
                        var td = document.createElement("td");
                        var tdTextNode = document.createTextNode('28');
                        td.appendChild(tdTextNode);
                        tr.appendChild(td);
                        tableBody.appendChild(tr);

                        if(i == 0)
                        {
                            td.className = "body-color";
                        }
                        end = false;
                        break;
                    }
                    else
                    {
                        var td = document.createElement("td");
                        var tdTextNode = document.createTextNode(currentDay);
                        td.appendChild(tdTextNode);
                        tr.appendChild(td);
                        tableBody.appendChild(tr);

                        if(i == 0)
                        {
                            td.className = "body-color";
                        }
                        currentDay++;   
                    }
                }
                else
                {
                    var td = document.createElement("td");
                    var tdTextNode = document.createTextNode('');
                    td.appendChild(tdTextNode);
                    tr.appendChild(td);
                    tableBody.appendChild(tr);  
                    if(i == 0)
                    {
                        td.className = "body-color";
                    }           
                }
            }
        }
    }
}
else
{
    var e = document.getElementById("ERROR");
    var etextnode = document.createTextNode("Invalid Input");
    e.appendChild(etextnode);
}