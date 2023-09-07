



function DisplaySliderVal() {
    const sliderVal = document.getElementById("transfer_speed").value;
    const labelTarget = document.getElementById("sliderVal");
    labelTarget.innerHTML = sliderVal;
}


function handleSubmit() {
    let capacityOpt = document.getElementById("capacityOption").value
    let capacity = document.getElementById("capacity_text").value
    let speed = document.getElementById("speedOption").value
    let transfer_speed = document.getElementById("transfer_speed").value;
    let resultDiv = document.getElementById("result");
    let result;
    if(capacityOpt != "MB") {
        if(capacityOpt == "GB") {
            capacity*=1000
        }
        if(capacityOpt == "TB") {
            capacity *= Math.pow(1000,2)

        }
    }

    if(speed != "Mbps") {
        if(speed == "Gbps") {
            transfer_speed *=1000
        }
        if(speed == "Kbps") {
            transfer_speed /=1000
        }
        if(speed == "mbps") {
            transfer_speed /=8
        }
    }
    result = capacity / transfer_speed;
    console.log(result)
    resultDiv.children[0].innerHTML = `${result.toFixed(2)} másodperc, ${(result/60).toFixed(1)} perc`;
}



