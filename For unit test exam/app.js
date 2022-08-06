window.addEventListener("load", solve);

function solve() {
    let makeField = document.getElementById("make")
    let modelField = document.getElementById("model")
    let yearField = document.getElementById("year")
    let fuelField = document.getElementById('fuel')
    let originalCostField = document.getElementById("original-cost")
    let sellingPriceField = document.getElementById("selling-price")
    let tbody = document.getElementById('table-body')
    let publishButton = document.getElementById('publish')
    let ul = document.getElementById('cars-list')
    publishButton.addEventListener('click', publish)
    let totalprofit = 0
    let profitfield = document.getElementById("profit")
    function publish(e) {
        e.preventDefault()
        if (makeField.value == "" || modelField.value == "" || yearField.value == "" ||
            fuelField.value == "" || originalCostField.value >= sellingPriceField.value) {
            return
        }
        let newtr = document.createElement("tr")
        let newtdmake = document.createElement('td')
        newtdmake.textContent = makeField.value
        let newtdmodel = document.createElement('td')
        newtdmodel.textContent = modelField.value
        let newtdyear = document.createElement('td')
        newtdyear.textContent = yearField.value
        let newtdfuel = document.createElement('td')
        newtdfuel.textContent = fuelField.value
        let newtdoriginal = document.createElement('td')
        newtdoriginal.textContent = originalCostField.value
        let newtdselling = document.createElement('td')
        newtdselling.textContent = sellingPriceField.value
        let newtdbuttons = document.createElement('td')
        let newbuttonedit = document.createElement('button')
        newbuttonedit.addEventListener('click', edit)
        let newbuttonsell = document.createElement('button')
        newbuttonsell.addEventListener('click', sell)
        newbuttonedit.className = 'action-btn edit'
        newbuttonedit.textContent = "Edit"
        newbuttonsell.className = 'action-btn sell'
        newbuttonsell.textContent = "Sell"
        newtdbuttons.appendChild(newbuttonedit)
        newtdbuttons.appendChild(newbuttonsell)
        newtr.className = "row"
        newtr.appendChild(newtdmake)
        newtr.appendChild(newtdmodel)
        newtr.appendChild(newtdyear)
        newtr.appendChild(newtdfuel)
        newtr.appendChild(newtdoriginal)
        newtr.appendChild(newtdselling)
        newtr.appendChild(newtdbuttons)
        tbody.appendChild(newtr)

        //clear field
        makeField.value = ""
        modelField.value = ""
        yearField.value = ""
        fuelField.value = ""
        originalCostField.value = ""
        sellingPriceField.value = ""

        function edit(e) {
            let parentElement = e.currentTarget.parentElement.parentElement
            makeField.value = parentElement.children[0].textContent
            modelField.value = parentElement.children[1].textContent
            yearField.value = parentElement.children[2].textContent
            fuelField.value = parentElement.children[3].textContent
            originalCostField.value = parentElement.children[4].textContent
            sellingPriceField.value = parentElement.children[5].textContent
            e.currentTarget.parentElement.parentElement.parentElement.removeChild(newtr)
        }

        function sell(e) {
            e.currentTarget.parentElement.parentElement.parentElement.removeChild(newtr)
            let li = document.createElement("li") 
            let span1 = document.createElement("span") 
            let span2 = document.createElement("span") 
            let span3 = document.createElement("span") 
            li.className = "each-list"
            span1.textContent = `${newtr.children[0].textContent} ${newtr.children[1].textContent}`
            span2.textContent = newtr.children[2].textContent
            let num1 = newtr.children[4].textContent
            num1 = Number(num1)
            let num2 = newtr.children[5].textContent
            num2 = Number(num2)
            span3.textContent = num2 - num1
            li.appendChild(span1)
            li.appendChild(span2)
            li.appendChild(span3)
            ul.appendChild(li)
            totalprofit += num2 - num1
            profitfield.textContent = totalprofit
            
        }
    }
}